#!/usr/bin/env node
// Measures the WCAG 2.2 AA state of every component and appends it to the KPI spreadsheet, one row per component.
//
//   yarn test:a11y                                                  -> reports/a11y/light.json, dark.json
//   yarn test --reporter=json --outputFile=reports/a11y/unit.json
//   node scripts/a11y-report.mjs [--dry-run] [--id <spreadsheetId>] [--reports dir] [--label text]
//
// The script runs oxlint itself for the jsx-a11y findings, writes the full audit to reports/a11y/audit.json (the
// workflow artefact) and appends the History rows to the sheet. Credentials: GOOGLE_SHEETS_SA_KEY (the JSON itself,
// for CI) or GOOGLE_APPLICATION_CREDENTIALS (a path). Without them the script behaves as --dry-run.
import {JWT} from 'google-auth-library';
import {execSync} from 'node:child_process';
import {existsSync, globSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {basename, join} from 'node:path';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const reportsDir = arg('--reports', 'reports/a11y');
const label = arg('--label', '');
const spreadsheetId = arg('--id', process.env.A11Y_SHEET_ID);
const date = new Date().toISOString().slice(0, 10);
const git = cmd => { try { return execSync(`git ${cmd}`, {encoding: 'utf8'}).trim(); } catch { return 'unknown'; } };

const readJson = name => {
    const file = join(reportsDir, name);
    if (!existsSync(file)) throw new Error(`Missing ${file}. Run the command that produces it first.`);
    return JSON.parse(readFileSync(file, 'utf8'));
};
const componentOfStory = file => basename(file.replace(/\\/g, '/')).replace(/\.stories\.[jt]sx?$/, '');
const componentOfSpec = file => basename(file.replace(/\\/g, '/')).replace(/\.spec\.[jt]sx?$/, '');
const componentOfPath = file => (file.replace(/\\/g, '/').match(/src\/components\/([^/]+)/) || [, 'other'])[1];
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
// A run without keyboard blocks would report 0 gap, i.e. a fake win.
if (!kbList.length) throw new Error('No keyboard test in unit.json.');
const keyboard = {
    environment: 'jsdom',
    components: kbList.length,
    componentsHit: kbList.filter(c => c.fail > 0).length,
    tests: kbList.reduce((s, c) => s + c.tests, 0),
    pass: kbList.reduce((s, c) => s + c.tests - c.fail, 0),
    fail: kbList.reduce((s, c) => s + c.fail, 0),
    clean: kbList.filter(c => c.fail === 0).map(c => c.name).sort((a, b) => a.localeCompare(b)),
    byComponent: sortDesc(kbList.filter(c => c.fail > 0).map(({name, tests, fail, gaps}) => ({name, tests, fail, gaps: gaps.sort()})), 'fail'),
};

// ---------- lint (oxlint, jsx-a11y rules) ----------
// oxlint exits non-zero when it reports errors; the JSON is on stdout either way.
const run = cmd => { try { return execSync(cmd, {encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024}); } catch (e) { return e.stdout || ''; } };
const rawLint = run('yarn oxlint . --format json');
const lintReport = JSON.parse(rawLint.slice(rawLint.indexOf('{')));
const kindOf = file => /\.stories\./.test(file) ? 'stories' : /\.spec\./.test(file) ? 'specs' : 'components';
const tally = (list, key) => list.reduce((acc, x) => { const k = key(x); acc[k] = (acc[k] || 0) + 1; return acc; }, {});
const messages = lintReport.diagnostics.filter(d => /^jsx[-_]a11y\(/.test(d.code || '')).map(d => ({
    component: kindOf(d.filename) === 'components' ? componentOfPath(d.filename) : 'other',
    rule: d.code.replace(/^jsx[-_]a11y\((.*)\)$/, '$1'),
    file: d.filename.replace(/\\/g, '/'),
    line: d.labels?.[0]?.span?.line ?? null,
}));
const byKind = tally(messages, m => kindOf(m.file));
const lint = {
    plugin: 'oxlint jsx-a11y',
    warnings: messages.length,
    files: new Set(messages.map(m => m.file)).size,
    rulesHit: new Set(messages.map(m => m.rule)).size,
    byKind: {components: byKind.components || 0, stories: byKind.stories || 0, specs: byKind.specs || 0},
    byRule: sortDesc(Object.entries(tally(messages, m => m.rule)).map(([id, n]) => ({id, n})), 'n'),
    byComponent: sortDesc(Object.entries(tally(messages.filter(m => kindOf(m.file) === 'components'), m => m.component)).map(([name, n]) => ({name, n})), 'n'),
    // One line per finding: the per-component follow-up across audits.
    messages,
};

// ---------- audit artefact ----------
const audit = {date, sha: git('rev-parse --short HEAD'), branch: git('branch --show-current'), label, axe, keyboard, lint};
mkdirSync(reportsDir, {recursive: true});
writeFileSync(join(reportsDir, 'audit.json'), JSON.stringify(audit, null, 2) + '\n');
console.log(`axe: ${axe.light.violations} light + ${axe.dark.violations} dark = ${unique.total} unique story x rule (${unique.both} in both themes), ${axe.componentsHit}/${axe.componentsTotal} components, ${axe.light.noReport + axe.dark.noReport} stories without report`);
console.log(`keyboard: ${keyboard.fail}/${keyboard.tests} gaps, ${keyboard.componentsHit}/${keyboard.components} components`);
console.log(`lint: ${lint.warnings} warnings, ${lint.rulesHit} rules`);

// ---------- History rows ----------
// total = axe (deduplicated) + keyboard gaps; the family columns add up to total; Lint is a separate static signal.
const FAMILY_COLUMNS = ['Color', 'Structure', 'Attribute', 'Forms', 'Keyboard', 'Other'];
const FAMILY_OF = {'cat.color': 'Color', 'cat.structure': 'Structure', 'cat.aria': 'Attribute', 'cat.name-role-value': 'Attribute', 'cat.forms': 'Forms', 'cat.keyboard': 'Keyboard'};
const HEADER = ['date', 'sha', 'component', 'total', 'critical', 'serious', 'A', 'AA', ...FAMILY_COLUMNS, 'Lint'];
const rowsOf = {};
const rowOf = name => rowsOf[name] = rowsOf[name] || {total: 0, critical: 0, serious: 0, A: 0, AA: 0, ...Object.fromEntries(FAMILY_COLUMNS.map(f => [f, 0])), Lint: 0};
for (const r of audit.axe.componentRules) {
    const e = rowOf(r.component);
    e.total += r.unique;
    if (r.impact === 'critical' || r.impact === 'serious') e[r.impact] += r.unique;
    if (r.level === 'A' || r.level === 'AA') e[r.level] += r.unique;
    e[FAMILY_OF[r.family] || 'Other'] += r.unique;
}
for (const c of audit.keyboard.byComponent) { const e = rowOf(c.name); e.total += c.fail; e.Keyboard += c.fail; }
// Lint findings in stories or specs land on the row "other", so that the Lint column adds up to lint.warnings.
for (const m of audit.lint.messages) rowOf(m.component).Lint++;
const rows = Object.entries(rowsOf)
    .sort(([a, x], [b, y]) => y.total - x.total || a.localeCompare(b))
    .map(([name, e]) => [audit.date, audit.sha, name, e.total, e.critical, e.serious, e.A, e.AA, ...FAMILY_COLUMNS.map(f => e[f]), e.Lint]);

// ---------- Google Sheet ----------
const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const rawKey = process.env.GOOGLE_SHEETS_SA_KEY || (keyPath && existsSync(keyPath) ? readFileSync(keyPath, 'utf8') : null);
const dryRun = process.argv.includes('--dry-run') || !rawKey || !spreadsheetId;
if (dryRun) {
    if (!process.argv.includes('--dry-run')) console.log('No spreadsheet id or credentials: dry run.');
    console.log([HEADER, ...rows].map(r => r.join('\t')).join('\n'));
    console.log(`${rows.length} History row(s) for ${audit.sha}, not pushed.`);
    process.exit(0);
}

const {client_email: clientEmail, private_key: privateKey} = JSON.parse(rawKey);
if (!clientEmail || !privateKey) throw new Error('The credentials are not a service account key (no client_email / private_key).');
const {token} = await new JWT({email: clientEmail, key: privateKey, scopes: ['https://www.googleapis.com/auth/spreadsheets']}).getAccessToken();
const api = async (path, method = 'GET', body) => {
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}${path}`, {
        method,
        headers: {authorization: `Bearer ${token}`, 'content-type': 'application/json'},
        body: body && JSON.stringify(body)
    });
    const json = await res.json();
    if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${json.error?.message || JSON.stringify(json)}`);
    return json;
};

const TAB = 'History';
const VALUES = '/values/' + TAB + '!';
const {sheets} = await api('?fields=sheets.properties.title');
if (!sheets.some(s => s.properties.title === TAB)) {
    await api(':batchUpdate', 'POST', {requests: [{addSheet: {properties: {title: TAB, gridProperties: {frozenRowCount: 1}}}}]});
    await api(VALUES + 'A1?valueInputOption=USER_ENTERED', 'PUT', {values: [HEADER]});
    console.log(`Created the ${TAB} tab.`);
}

// One audit per commit: a re-run of the same commit adds nothing.
const shas = ((await api(VALUES + 'B:B')).values || []).flat();
if (shas.includes(audit.sha)) {
    console.log(`${audit.sha} is already in ${TAB}: nothing appended.`);
    process.exit(0);
}
await api(VALUES + 'A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS', 'POST', {values: rows});
console.log(`Appended ${rows.length} row(s) for ${audit.sha} to ${TAB}.`);
console.log(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
