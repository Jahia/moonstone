#!/usr/bin/env node
// Measures the WCAG 2.2 AA state of every component and appends one row per component to the KPI spreadsheet.
//
//   yarn test:a11y                                                  -> reports/a11y/light.json, dark.json
//   yarn test --reporter=json --outputFile=reports/a11y/unit.json
//   node scripts/a11y-report.mjs [--dry-run] [--id <spreadsheetId>] [--reports dir]
//
// The script runs oxlint itself for the jsx-a11y findings, writes the pushed rows to reports/audit-a11y.csv (the
// workflow artefact) and appends them to the History tab. Credentials: GOOGLE_SHEETS_SA_KEY (the JSON itself, for
// CI) or GOOGLE_APPLICATION_CREDENTIALS (a path). Without them it prints the rows (dry run); in CI it fails instead.
import {JWT} from 'google-auth-library';
import {execSync} from 'node:child_process';
import {existsSync, globSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {basename, join} from 'node:path';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const reportsDir = arg('--reports', 'reports/a11y');
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
const levelOf = tags => tags.some(t => /^wcag2\d*a$/.test(t)) ? 'A' : tags.some(t => /^wcag2\d*aa$/.test(t)) ? 'AA' : 'other';
const familyOf = tags => tags.find(t => t.startsWith('cat.')) || 'cat.other';

// ---------- axe: one deduplicated entry per story x rule, across the light and dark themes ----------
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

const violations = new Map(); // story::rule -> {impact, tags, component}
const axeStat = {light: {violations: 0, noReport: 0}, dark: {violations: 0, noReport: 0}};
for (const theme of ['light', 'dark']) {
    for (const story of readAxe(theme)) {
        if (!story.result) { axeStat[theme].noReport++; continue; }
        for (const v of story.result.violations) {
            axeStat[theme].violations++;
            violations.set(`${story.id}::${v.id}`, {impact: v.impact, tags: v.tags, component: story.component});
        }
    }
}

// ---------- keyboard: describe('<Component> keyboard') blocks in the specs ----------
// A known gap is a test marked it.fails in its spec. Vitest reports such a test as passed, so the gaps are read
// from the sources; unit.json only confirms the keyboard tests ran and flags a gap that no longer fails.
const unit = readJson('unit.json');
const kb = {};
const kbEntry = name => kb[name] = kb[name] || {tests: 0, gaps: []};
for (const file of globSync('src/components/**/*.spec.tsx')) {
    const gaps = [...readFileSync(file, 'utf8').matchAll(/\b(?:it|test)\.fails\(\s*(['"`])((?:\\.|(?!\1).)*)\1/g)].map(m => m[2]);
    if (gaps.length) kbEntry(componentOfSpec(file)).gaps = gaps;
}
for (const file of unit.testResults) {
    for (const test of file.assertionResults) {
        if (!(test.ancestorTitles || []).some(t => /^\S+ keyboard$/.test(t))) continue;
        const name = componentOfSpec(file.name);
        const c = kbEntry(name);
        c.tests++;
        if (test.status === 'failed' && c.gaps.includes(test.title)) console.warn(`${name}: "${test.title}" passes now, remove its it.fails`);
    }
}
const kbComponents = Object.keys(kb).length;
if (!kbComponents) throw new Error('No keyboard test in unit.json.');
const keyboardGaps = Object.fromEntries(Object.entries(kb).map(([name, c]) => [name, c.gaps.length]));
const keyboardFail = Object.values(keyboardGaps).reduce((s, n) => s + n, 0);
const keyboardTests = Object.values(kb).reduce((s, c) => s + c.tests, 0);

// ---------- lint: oxlint jsx-a11y warnings, per component ----------
// oxlint exits non-zero when it reports; the JSON is on stdout either way.
const run = cmd => { try { return execSync(cmd, {encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024}); } catch (e) { return e.stdout || ''; } };
const rawLint = run('yarn oxlint . --format json');
const lintReport = JSON.parse(rawLint.slice(rawLint.indexOf('{')));
const kindOf = file => /\.stories\./.test(file) ? 'stories' : /\.spec\./.test(file) ? 'specs' : 'components';
const lintByComponent = {};
const lintRules = new Set();
for (const d of lintReport.diagnostics) {
    if (!/^jsx[-_]a11y\(/.test(d.code || '')) continue;
    // Warnings in stories or specs are not tied to a component: they land on the "other" row.
    const component = kindOf(d.filename) === 'components' ? componentOfPath(d.filename) : 'other';
    lintByComponent[component] = (lintByComponent[component] || 0) + 1;
    lintRules.add(d.code);
}
const lintWarnings = Object.values(lintByComponent).reduce((s, n) => s + n, 0);

// ---------- History rows: one per component ----------
// total = axe (deduplicated across themes) + keyboard gaps; the family columns add up to total; Lint is separate.
const FAMILY_COLUMNS = ['Color', 'Structure', 'Attribute', 'Forms', 'Keyboard', 'Other'];
const FAMILY_OF = {'cat.color': 'Color', 'cat.structure': 'Structure', 'cat.aria': 'Attribute', 'cat.name-role-value': 'Attribute', 'cat.forms': 'Forms', 'cat.keyboard': 'Keyboard'};
const HEADER = ['date', 'sha', 'component', 'total', 'critical', 'serious', 'A', 'AA', ...FAMILY_COLUMNS, 'Lint'];
const rowsOf = {};
const rowOf = name => rowsOf[name] = rowsOf[name] || {total: 0, critical: 0, serious: 0, A: 0, AA: 0, ...Object.fromEntries(FAMILY_COLUMNS.map(f => [f, 0])), Lint: 0};
for (const v of violations.values()) {
    const e = rowOf(v.component);
    e.total++;
    if (v.impact === 'critical' || v.impact === 'serious') e[v.impact]++;
    const lvl = levelOf(v.tags); if (lvl === 'A' || lvl === 'AA') e[lvl]++;
    e[FAMILY_OF[familyOf(v.tags)] || 'Other']++;
}
for (const [name, fail] of Object.entries(keyboardGaps)) { const e = rowOf(name); e.total += fail; e.Keyboard += fail; }
for (const [name, n] of Object.entries(lintByComponent)) rowOf(name).Lint += n;
const sha = git('rev-parse --short HEAD');
const rows = Object.entries(rowsOf)
    .sort(([a, x], [b, y]) => y.total - x.total || a.localeCompare(b))
    .map(([name, e]) => [date, sha, name, e.total, e.critical, e.serious, e.A, e.AA, ...FAMILY_COLUMNS.map(f => e[f]), e.Lint]);

// ---------- artefact: the pushed rows as CSV ----------
const csvCell = v => /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
const csvFile = 'reports/audit-a11y.csv';
mkdirSync('reports', {recursive: true});
writeFileSync(csvFile, [HEADER, ...rows].map(r => r.map(csvCell).join(',')).join('\n') + '\n');
console.log(`axe: ${axeStat.light.violations} light + ${axeStat.dark.violations} dark = ${violations.size} unique story x rule`);
console.log(`keyboard: ${keyboardFail}/${keyboardTests} gaps in ${kbComponents} components`);
console.log(`lint: ${lintWarnings} warnings, ${lintRules.size} rules`);
console.log(`${rows.length} rows -> ${csvFile}`);

// ---------- Google Sheet ----------
const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const rawKey = process.env.GOOGLE_SHEETS_SA_KEY || (keyPath && existsSync(keyPath) ? readFileSync(keyPath, 'utf8') : null);
const explicitDry = process.argv.includes('--dry-run');
const canPush = rawKey && spreadsheetId;
// In CI a missing secret must fail loudly, not silently skip the push.
if (!explicitDry && !canPush && process.env.CI) {
    throw new Error('Missing A11Y_SHEET_ID or GOOGLE_SHEETS_SA_KEY: refusing to pass without pushing to the sheet.');
}
if (explicitDry || !canPush) {
    if (!explicitDry) console.log('No spreadsheet id or credentials: dry run.');
    console.log([HEADER, ...rows].map(r => r.join('\t')).join('\n'));
    console.log(`${rows.length} History row(s) for ${sha}, not pushed.`);
    process.exit(0);
}

const {client_email: clientEmail, private_key: privateKey} = JSON.parse(rawKey);
if (!clientEmail || !privateKey) throw new Error('The credentials are not a service account key (no client_email / private_key).');
const {token} = await new JWT({email: clientEmail, key: privateKey, scopes: ['https://www.googleapis.com/auth/spreadsheets']}).getAccessToken();
const api = async (path, method = 'GET', body) => {
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}${path}`, {
        method,
        headers: {authorization: `Bearer ${token}`, 'content-type': 'application/json'},
        body: body && JSON.stringify(body),
        signal: AbortSignal.timeout(30000)
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
    await api(VALUES + 'A1?valueInputOption=RAW', 'PUT', {values: [HEADER]});
    console.log(`Created the ${TAB} tab.`);
}

// One audit per commit: a re-run of the same commit adds nothing.
const shas = ((await api(VALUES + 'B:B')).values || []).flat();
if (shas.includes(sha)) {
    console.log(`${sha} is already in ${TAB}: nothing appended.`);
    process.exit(0);
}
await api(VALUES + 'A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS', 'POST', {values: rows});
console.log(`Appended ${rows.length} row(s) for ${sha} to ${TAB}.`);
console.log(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
