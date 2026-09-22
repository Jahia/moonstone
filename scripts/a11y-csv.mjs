#!/usr/bin/env node
// Turns the audits in a11y/history/<date>.json into the tabs of the KPI spreadsheet.
//   node scripts/a11y-csv.mjs [--history a11y/history] [--out reports/a11y/csv] [--extra <audit.json>]
// --extra adds one more audit (today's measurement in CI) on top of the committed ones, replacing a same-day file.
// general.csv = KPI x date grid, overview.csv = one row per audit (feeds the charts), <date>.csv = one row per component.
import {readFileSync, writeFileSync, readdirSync, mkdirSync} from 'node:fs';
import {join} from 'node:path';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const historyDir = arg('--history', 'a11y/history');
const outDir = arg('--out', 'reports/a11y/csv');

const extra = arg('--extra', null);
const audits = readdirSync(historyDir).filter(f => /^\d{4}-\d{2}-\d{2}.*\.json$/.test(f)).sort()
    .map(f => JSON.parse(readFileSync(join(historyDir, f), 'utf8')));
if (extra) {
    const audit = JSON.parse(readFileSync(extra, 'utf8'));
    const i = audits.findIndex(a => a.date === audit.date);
    if (i > -1) audits[i] = audit; else audits.push(audit);
    audits.sort((a, b) => a.date.localeCompare(b.date));
}
if (!audits.length) throw new Error(`No audit found in ${historyDir}. Run node scripts/a11y-kpi.mjs first.`);
if (!audits[0].axe.unique.impact || audits[0].axe.rules[0]?.unique === undefined) throw new Error('Audits predate the deduplicated counts. Re-run node scripts/a11y-kpi.mjs.');

const cell = v => (v === null || v === undefined) ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
const csv = rows => rows.map(r => r.map(cell).join(',')).join('\n') + '\n';
const total = a => a.axe.unique.total + a.keyboard.fail;

// General: one KPI per row, one audit per column, laid out like the user's sheet. Column A carries a
// group label on the first row of its group (merged down to the next label by a11y-sheet.mjs).
const kpis = [
    ['', 'Total issues (axe + keyboard)', a => total(a)],
    ['', 'Axe violations', a => a.axe.unique.total],
    ['Violations', 'Axe critical ( part of violations )', a => a.axe.unique.impact.critical],
    ['', 'Axe serious ( part of violations )', a => a.axe.unique.impact.serious],
    ['', 'Axe level A ( part of violations )', a => a.axe.unique.level.A],
    ['', 'Axe level AA', a => a.axe.unique.level.AA],
    ['', 'Components with axe violation', a => `${a.axe.componentsHit} / ${a.axe.componentsTotal}`],
    ['Keyboard', 'Keyboard gaps', a => a.keyboard.fail],
    ['', 'Components with keyboard gap', a => `${a.keyboard.componentsHit} / ${a.keyboard.components}`],
    ['Total', '', a => total(a)],
];
const general = [['', 'KPI', ...audits.map(a => a.date)], ...kpis.map(([group, label, fn]) => [group, label, ...audits.map(fn)])];

// The family columns of the user's sheet, and nothing else: an axe category outside them only counts in Total.
const FAMILIES = [['cat.color', 'Color'], ['cat.structure', 'Structure'], ['cat.aria', 'Aria attribute'], ['cat.forms', 'From']];
const familyLabels = [...FAMILIES.map(([, label]) => label), 'Keyboard = cat.keyboard + keyboard'];

const byComponent = a => {
    const byName = {};
    const get = n => byName[n] = byName[n] || {total: 0, critical: 0, serious: 0, A: 0, AA: 0, families: {}, keyboard: 0};
    (a.axe.componentRules || []).forEach(r => {
        const e = get(r.component);
        e.total += r.unique;
        e[r.impact] = (e[r.impact] || 0) + r.unique;
        e[r.level] = (e[r.level] || 0) + r.unique;
        if (r.family === 'cat.keyboard') e.keyboard += r.unique;
        else e.families[r.family] = (e.families[r.family] || 0) + r.unique;
    });
    a.keyboard.byComponent.forEach(c => { const e = get(c.name); e.total += c.fail; e.keyboard += c.fail; });
    return byName;
};
const familyCells = e => [...FAMILIES.map(([id]) => e.families[id] || 0), e.keyboard];

// One table per audit, one row per component: the sheet everyone reads.
// Row 1 carries the column groups, each label sitting on the first column of its group.
const auditTable = a => [
    ['', '', '', 'severity', '', 'Level', '', 'Violations', ...Array(familyLabels.length - 1).fill('')],
    ['date', 'component', 'Total', 'critical', 'serious', 'A', 'AA', ...familyLabels],
    ...Object.entries(byComponent(a))
        .map(([name, e]) => [a.date, name, e.total, e.critical, e.serious, e.A, e.AA, ...familyCells(e)])
        .sort((x, y) => y[2] - x[2] || x[1].localeCompare(y[1])),
];

// Overview: one row per audit, the whole of General's totals plus the family split, for the charts.
const overview = [
    ['date', 'Total issues', 'Axe violations', 'Keyboard gaps', ...familyLabels],
    ...audits.map(a => {
        const sum = Object.values(byComponent(a)).reduce((acc, e) => familyCells(e).map((v, i) => (acc[i] || 0) + v), []);
        return [a.date, total(a), a.axe.unique.total, a.keyboard.fail, ...sum];
    }),
];

mkdirSync(outDir, {recursive: true});
const files = {'general.csv': general, 'overview.csv': overview, ...Object.fromEntries(audits.map(a => [`${a.date}.csv`, auditTable(a)]))};
for (const [name, rows] of Object.entries(files)) writeFileSync(join(outDir, name), csv(rows));
console.log(`${audits.length} audit(s) (${audits[0].date} -> ${audits.at(-1).date}) written to ${outDir}/{${Object.keys(files).join(',')}}`);
