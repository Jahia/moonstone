#!/usr/bin/env node
// Aggregates the raw accessibility reports into one dated audit file.
//
//   yarn test:a11y                                   -> reports/a11y/light.json, dark.json
//   yarn test --reporter=json --outputFile=reports/a11y/unit.json
//   yarn lint:a11y                                   -> reports/a11y/lint.json (oxlint, jsx-a11y rules)
//   node scripts/a11y-kpi.mjs [--date YYYY-MM-DD] [--label text] [--reports dir] [--out dir] [--history dir] [--force]
// The previous audit is read from --history (default: --out). Same figures: nothing is written and GITHUB_OUTPUT
// gets changed=false, unless --force.
//
// Output: <out>/<date>.json, the schema read by a11y-csv.mjs.
import {readFileSync, writeFileSync, appendFileSync, existsSync, readdirSync, mkdirSync, globSync} from 'node:fs';
import {basename, join} from 'node:path';
import {execSync} from 'node:child_process';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const reportsDir = arg('--reports', 'reports/a11y');
const outDir = arg('--out', 'a11y/history');
const historyDir = arg('--history', outDir);
const date = arg('--date', new Date().toISOString().slice(0, 10));
const label = arg('--label', '');
const git = cmd => { try { return execSync(`git ${cmd}`, {encoding: 'utf8'}).trim(); } catch { return 'unknown'; } };

const readJson = name => {
    const file = join(reportsDir, name);
    if (!existsSync(file)) throw new Error(`Missing ${file}. Run the command that produces it first.`);
    return JSON.parse(readFileSync(file, 'utf8'));
};
const componentOfStory = file => basename(file.replace(/\\/g, '/')).replace(/\.stories\.[jt]sx?$/, '');
const componentOfSpec = file => basename(file.replace(/\\/g, '/')).replace(/\.spec\.[jt]sx?$/, '');
const sortDesc = (list, key) => list.sort((a, b) => b[key] - a[key] || String(a.id || a.name).localeCompare(String(b.id || b.name)));

// WCAG success criteria carried by axe tags such as "wcag412" or "wcag1411".
const WCAG_LABELS = {
    '1.1.1': 'Non-text content', '1.3.1': 'Info and relationships', '1.3.5': 'Identify input purpose',
    '1.4.1': 'Use of colour', '1.4.3': 'Contrast (minimum)', '1.4.11': 'Non-text contrast', '1.4.12': 'Text spacing',
    '2.1.1': 'Keyboard', '2.1.3': 'Keyboard (no exception)', '2.4.4': 'Link purpose', '2.4.7': 'Focus visible',
    '2.5.3': 'Label in name', '2.5.8': 'Target size (minimum)', '3.3.2': 'Labels or instructions',
    '4.1.2': 'Name, role, value', '4.1.3': 'Status messages',
};
const criterionOf = tag => {
    const m = tag.match(/^wcag(\d)(\d)(\d{1,2})$/);
    return m ? `${m[1]}.${m[2]}.${m[3]}` : null;
};
const levelOf = tags => tags.some(t => /^wcag2\d*a$/.test(t)) ? 'A' : tags.some(t => /^wcag2\d*aa$/.test(t)) ? 'AA' : 'other';

// ---------- axe ----------
function readAxe(theme) {
    const report = readJson(`${theme}.json`);
    const stories = [];
    let withReport = 0;
    for (const file of report.testResults) {
        for (const test of file.assertionResults) {
            const a11y = (test.meta?.reports || []).find(r => r.type === 'a11y' && r.result?.violations);
            if (a11y) withReport++;
            stories.push({id: `${file.name}::${test.fullName}`, component: componentOfStory(file.name), result: a11y?.result || null});
        }
    }
    if (stories.length && withReport === 0) {
        throw new Error(`${theme}.json contains no axe result in meta.reports. The Storybook a11y addon output has changed; update this script.`);
    }
    return stories;
}

const themes = {light: readAxe('light'), dark: readAxe('dark')};
const violations = new Map(); // key story::rule -> {theme set, rule, impact, tags, component, nodes}
const perTheme = {};
for (const [theme, stories] of Object.entries(themes)) {
    const t = perTheme[theme] = {stories: stories.length, noReport: 0, violations: 0, nodes: 0, incomplete: 0, components: new Set()};
    for (const story of stories) {
        t.components.add(story.component);
        if (!story.result) { t.noReport++; continue; }
        t.incomplete += story.result.incomplete.length;
        for (const v of story.result.violations) {
            t.violations++;
            t.nodes += v.nodes.length;
            const key = `${story.id}::${v.id}`;
            const entry = violations.get(key) || {themes: new Set(), rule: v.id, impact: v.impact, tags: v.tags, component: story.component, nodes: new Set()};
            entry.themes.add(theme);
            v.nodes.forEach(n => entry.nodes.add((n.target || []).join(' ')));
            violations.set(key, entry);
        }
    }
}

const count = (fn) => { const acc = {}; for (const v of violations.values()) for (const theme of v.themes) { const k = fn(v); acc[k] = acc[k] || {light: 0, dark: 0}; acc[k][theme]++; } return acc; };
const byRule = count(v => v.rule), byImpact = count(v => v.impact), byLevel = count(v => levelOf(v.tags)), byComponent = count(v => v.component);
const byComponentRule = count(v => `${v.component}::${v.rule}`);
const impactOfRule = {};
for (const v of violations.values()) impactOfRule[v.rule] = v.impact;
const familyOf = {}; const rulesPerComponent = {};
for (const v of violations.values()) {
    familyOf[v.rule] = (v.tags.find(t => t.startsWith('cat.')) || 'cat.other');
    for (const theme of v.themes) {
        const rc = rulesPerComponent[v.component] = rulesPerComponent[v.component] || {};
        rc[v.rule] = (rc[v.rule] || 0) + 1;
        void theme;
    }
}
const wcag = {};
for (const v of violations.values()) for (const theme of v.themes) for (const tag of v.tags) { const sc = criterionOf(tag); if (sc) wcag[sc] = (wcag[sc] || 0) + 1; void theme; }

// Deduplicated story x rule counts, the ones that add up to unique.total.
const uniqueByComponent = {}, uniqueByRule = {}, uniqueByComponentRule = {}, levelOfRule = {};
for (const v of violations.values()) {
    uniqueByComponent[v.component] = (uniqueByComponent[v.component] || 0) + 1;
    uniqueByRule[v.rule] = (uniqueByRule[v.rule] || 0) + 1;
    uniqueByComponentRule[`${v.component}::${v.rule}`] = (uniqueByComponentRule[`${v.component}::${v.rule}`] || 0) + 1;
    levelOfRule[v.rule] = levelOf(v.tags);
}
const unique = {total: violations.size, both: 0, lightOnly: 0, darkOnly: 0, nodes: 0, impact: {critical: 0, serious: 0, moderate: 0, minor: 0}, level: {A: 0, AA: 0}};
for (const v of violations.values()) {
    unique.nodes += v.nodes.size;
    if (v.themes.size === 2) unique.both++; else if (v.themes.has('light')) unique.lightOnly++; else unique.darkOnly++;
    unique.impact[v.impact] = (unique.impact[v.impact] || 0) + 1;
    const lvl = levelOf(v.tags); if (lvl !== 'other') unique.level[lvl]++;
}
const allComponents = new Set([...perTheme.light.components, ...perTheme.dark.components]);
const pick = (obj, key) => obj[key] || {light: 0, dark: 0};

const axe = {
    engine: (() => { const s = themes.light.find(x => x.result); return s ? `${s.result.testEngine.name} ${s.result.testEngine.version}` : 'axe-core'; })(),
    light: {stories: perTheme.light.stories, noReport: perTheme.light.noReport, violations: perTheme.light.violations, nodes: perTheme.light.nodes, incomplete: perTheme.light.incomplete},
    dark: {stories: perTheme.dark.stories, noReport: perTheme.dark.noReport, violations: perTheme.dark.violations, nodes: perTheme.dark.nodes, incomplete: perTheme.dark.incomplete},
    unique,
    componentsTotal: allComponents.size,
    componentsHit: Object.keys(byComponent).length,
    impact: {critical: pick(byImpact, 'critical'), serious: pick(byImpact, 'serious'), moderate: pick(byImpact, 'moderate'), minor: pick(byImpact, 'minor')},
    level: {A: pick(byLevel, 'A'), AA: pick(byLevel, 'AA')},
    rules: sortDesc(Object.entries(byRule).map(([id, n]) => ({id, family: familyOf[id], impact: impactOfRule[id], light: n.light, dark: n.dark, unique: uniqueByRule[id], total: n.light + n.dark})), 'total').map(({total, ...r}) => r),
    wcag: sortDesc(Object.entries(wcag).map(([sc, n]) => ({sc, label: WCAG_LABELS[sc] || sc, n})), 'n'),
    components: sortDesc(Object.entries(byComponent).map(([name, n]) => ({
        name, light: n.light, dark: n.dark, unique: uniqueByComponent[name], total: n.light + n.dark,
        rules: Object.entries(rulesPerComponent[name]).sort((a, b) => b[1] - a[1]).map(([r, c]) => `${r} ${c}`).join(', '),
    })), 'total').map(({total, ...c}) => c),
    // One line per component x rule: the per-component follow-up across audits.
    componentRules: Object.entries(byComponentRule).map(([key, n]) => {
        const [component, rule] = key.split('::');
        return {component, rule, family: familyOf[rule], impact: impactOfRule[rule], level: levelOfRule[rule], light: n.light, dark: n.dark, unique: uniqueByComponentRule[key]};
    }).sort((a, b) => a.component.localeCompare(b.component) || (b.light + b.dark) - (a.light + a.dark)),
};

// ---------- keyboard (describe blocks named "... keyboard" in the component specs) ----------
// A known gap is a test marked it.fails in its spec. Vitest reports such a test as passed, so the gaps are read
// from the sources; unit.json only gives the number of keyboard tests and reveals a gap that no longer fails.
const unit = readJson('unit.json');
const kb = {};
const entry = name => kb[name] = kb[name] || {name, tests: 0, fail: 0, gaps: []};
for (const file of globSync('src/components/**/*.spec.tsx')) {
    const gaps = [...readFileSync(file, 'utf8').matchAll(/\b(?:it|test)\.fails\(\s*(['"`])((?:\\.|(?!\1).)*)\1/g)].map(m => m[2]);
    if (gaps.length) Object.assign(entry(componentOfSpec(file)), {fail: gaps.length, gaps});
}
for (const file of unit.testResults) {
    for (const test of file.assertionResults) {
        // Only the audit blocks, named exactly '<Component> keyboard'; other suites may mention the keyboard too.
        if (!(test.ancestorTitles || []).some(t => /^\S+ keyboard$/.test(t))) continue;
        const c = entry(componentOfSpec(file.name));
        c.tests++;
        if (test.status === 'failed' && c.gaps.includes(test.title)) console.warn(`${c.name}: "${test.title}" passes now, remove its it.fails`);
    }
}
const kbList = Object.values(kb);
// Root causes are written by hand; carry them over from the latest audit (same date included, so a rerun keeps them).
const previous = existsSync(historyDir) ? readdirSync(historyDir).filter(f => /^\d{4}-\d{2}-\d{2}.*\.json$/.test(f)).sort().filter(f => f <= `${date}.json`).pop() : null;
const previousAudit = previous ? JSON.parse(readFileSync(join(historyDir, previous), 'utf8')) : null;
// A run without keyboard blocks would report 0 gap, i.e. a fake win: carry the previous figures over instead.
if (!kbList.length && !previousAudit?.keyboard) throw new Error('No keyboard test in unit.json and no previous audit to carry over.');
const keyboard = !kbList.length ? {...previousAudit.keyboard, carriedOverFrom: previousAudit.date} : {
    environment: 'jsdom',
    components: kbList.length,
    componentsHit: kbList.filter(c => c.fail > 0).length,
    tests: kbList.reduce((s, c) => s + c.tests, 0),
    pass: kbList.reduce((s, c) => s + c.tests - c.fail, 0),
    fail: kbList.reduce((s, c) => s + c.fail, 0),
    clean: kbList.filter(c => c.fail === 0).map(c => c.name).sort(),
    byComponent: sortDesc(kbList.filter(c => c.fail > 0).map(({name, tests, fail, gaps}) => ({name, tests, fail, gaps: gaps.sort()})), 'fail'),
    rootCauses: previousAudit?.keyboard?.rootCauses?.length ? previousAudit.keyboard.rootCauses
        : (existsSync(join(historyDir, 'root-causes.json')) ? JSON.parse(readFileSync(join(historyDir, 'root-causes.json'), 'utf8')) : []),
};

// ---------- lint ----------
const lint = readJson('lint.json');
const lintOut = {
    plugin: 'oxlint jsx-a11y',
    warnings: lint.total,
    files: lint.files,
    rulesHit: Object.keys(lint.byRule).length,
    byKind: {components: lint.byKind.components || 0, stories: lint.byKind.stories || 0, specs: lint.byKind.specs || 0},
    byRule: sortDesc(Object.entries(lint.byRule).map(([id, n]) => ({id, n})), 'n'),
    byComponent: sortDesc(Object.entries(lint.byComponent).map(([name, n]) => ({name, n})), 'n'),
    // One line per finding: the per-component follow-up across audits.
    messages: (lint.messages || []).map(m => ({
        component: (m.file.replace(/\\/g, '/').match(/src\/components\/([^/]+)/) || [, 'other'])[1],
        rule: m.rule, file: m.file.replace(/\\/g, '/'), line: m.line,
    })),
};

// ---------- write ----------
const audit = {date, sha: git('rev-parse --short HEAD'), branch: git('branch --show-current'), label, axe, keyboard, lint: lintOut};

// The figures the spreadsheet shows; identical to the previous audit means there is nothing to record.
const figures = a => JSON.stringify({axe: [a.axe.unique, a.axe.componentRules], keyboard: [a.keyboard.fail, a.keyboard.byComponent], lint: [a.lint.warnings, a.lint.byRule]});
const changed = !previousAudit || figures(audit) !== figures(previousAudit);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}
`);
if (!changed && !process.argv.includes('--force')) {
    console.log(`No change since the audit of ${previousAudit.date}: nothing written.`);
    process.exit(0);
}

mkdirSync(outDir, {recursive: true});
const outFile = join(outDir, `${date}.json`);
writeFileSync(outFile, JSON.stringify(audit, null, 2) + '\n');

console.log(`Audit ${date} written to ${outFile}`);
console.log(`axe: ${axe.light.violations} light + ${axe.dark.violations} dark = ${unique.total} unique story x rule (${unique.both} in both themes), ${axe.componentsHit}/${axe.componentsTotal} components, ${axe.light.noReport + axe.dark.noReport} stories without report`);
console.log(`keyboard: ${keyboard.fail}/${keyboard.tests} gaps, ${keyboard.componentsHit}/${keyboard.components} components`);
console.log(`lint: ${lintOut.warnings} warnings, ${lintOut.rulesHit} rules`);
