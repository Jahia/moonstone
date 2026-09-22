#!/usr/bin/env node
// Replaces the tabs of the KPI spreadsheet with the CSVs written by scripts/a11y-csv.mjs.
//   node scripts/a11y-sheet.mjs --id <spreadsheetId> [--csv reports/a11y/csv] [--key <service-account.json>] [--dry-run]
// Credentials, in order: --key, GOOGLE_SHEETS_SA_KEY (the JSON itself, for CI), GOOGLE_APPLICATION_CREDENTIALS (a path).
// The service account only needs the spreadsheet shared with its email as an editor, no IAM role.
// The script owns the tabs Overview (charts only), Data (hidden, the chart series) and <date>; any other tab is left alone and listed at the end.
import {readFileSync, existsSync} from 'node:fs';
import {createSign} from 'node:crypto';
import {loadTables, wantedMerges as layoutMerges, headerRows, frozenColumns, dataRows, a1, columnLetter, CHARTS_TAB} from './a11y-layout.mjs';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const csvDir = arg('--csv', 'reports/a11y/csv');
const spreadsheetId = arg('--id', process.env.A11Y_SHEET_ID);
const keyPath = arg('--key', process.env.GOOGLE_APPLICATION_CREDENTIALS);
const dryRun = process.argv.includes('--dry-run');

const tables = loadTables(csvDir);
const overview = tables.find(([tab]) => tab === 'Data')?.[1];
const wantedMerges = (tab, rows, sheetId) => layoutMerges(tab, rows).map(m => ({sheetId, ...m}));

// Overview charts: the trend of the three totals, and the family split of the latest audit. Both read the
// hidden Data tab; the pie reads a two-column block written next to the table, so it never depends on row-shaped ranges.
const FAMILY_START = 4;
const PIE_COLUMN = overview ? overview[0].length + 1 : 0;
const pieBlock = overview ? [['Family', 'Issues'], ...overview[0].slice(FAMILY_START).map((label, i) => [label.replace(/ =.*/, ''), overview.at(-1)[FAMILY_START + i]])] : [];
const rgb = hex => ({rgbColor: Object.fromEntries(['red', 'green', 'blue'].map((k, i) => [k, parseInt(hex.slice(1 + (2 * i), 3 + (2 * i)), 16) / 255]))});
const SERIES_COLORS = ['#2a78d6', '#eb6834', '#1baf7a'];
const chartSpecs = sheetId => {
    const range = (startColumnIndex, endColumnIndex, endRowIndex) => ({sourceRange: {sources: [{sheetId, startRowIndex: 0, endRowIndex, startColumnIndex, endColumnIndex}]}});
    return [{
        key: 'Accessibility issues',
        legacy: 'Issues per audit',
        anchor: {rowIndex: 0, columnIndex: 0},
        spec: {
            title: 'Accessibility issues, one point per audit',
            basicChart: {
                chartType: 'LINE',
                legendPosition: 'BOTTOM_LEGEND',
                headerCount: 1,
                axis: [{position: 'BOTTOM_AXIS', title: 'Audit date'}, {position: 'LEFT_AXIS', title: 'Issues'}],
                domains: [{domain: range(0, 1, overview.length)}],
                series: [1, 2, 3].map(col => ({series: range(col, col + 1, overview.length), targetAxis: 'LEFT_AXIS', colorStyle: rgb(SERIES_COLORS[col - 1])}))
            }
        }
    }, {
        key: 'Issues by family',
        anchor: {rowIndex: 0, columnIndex: 10},
        spec: {
            title: `Issues by family, ${overview.at(-1)[0]}`,
            pieChart: {
                legendPosition: 'RIGHT_LEGEND',
                domain: range(PIE_COLUMN, PIE_COLUMN + 1, pieBlock.length),
                series: range(PIE_COLUMN + 1, PIE_COLUMN + 2, pieBlock.length)
            }
        }
    }];
};

if (dryRun) {
    for (const [tab, rows] of tables) {
        const merges = wantedMerges(tab, rows, 0).map(a1);
        console.log(`${tab}: ${dataRows(tab, rows)} row(s) x ${rows.at(-1).length} column(s)${merges.length ? `, merges ${merges.join(' ')}` : ''}`);
    }

    if (overview) console.log(`${CHARTS_TAB} charts (series on the hidden Data tab): ${chartSpecs(0).map(c => c.spec.title).join(' | ')}; pie data ${pieBlock.slice(1).map(r => r.join('=')).join(', ')}`);
    process.exit(0);
}

if (!spreadsheetId) throw new Error('Missing spreadsheet id: pass --id or set A11Y_SHEET_ID.');
const rawKey = process.env.GOOGLE_SHEETS_SA_KEY || (keyPath && existsSync(keyPath) ? readFileSync(keyPath, 'utf8') : null);
if (!rawKey) throw new Error('Missing credentials: pass --key <service-account.json>, or set GOOGLE_SHEETS_SA_KEY or GOOGLE_APPLICATION_CREDENTIALS.');
const {client_email: clientEmail, private_key: privateKey} = JSON.parse(rawKey);
if (!clientEmail || !privateKey) throw new Error('The credentials are not a service account key (no client_email / private_key).');

const b64 = value => Buffer.from(typeof value === 'string' ? value : JSON.stringify(value)).toString('base64url');

async function getAccessToken() {
    const now = Math.floor(Date.now() / 1000);
    const unsigned = `${b64({alg: 'RS256', typ: 'JWT'})}.${b64({
        iss: clientEmail,
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600
    })}`;
    const signer = createSign('RSA-SHA256');
    signer.update(unsigned);
    const assertion = `${unsigned}.${signer.sign(privateKey).toString('base64url')}`;

    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion})
    });
    const body = await res.json();
    if (!res.ok) throw new Error(`Google refused the service account: ${body.error_description || JSON.stringify(body)}`);
    return body.access_token;
}

const token = await getAccessToken();
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

const describe = async () => Object.fromEntries((await api('?fields=sheets(properties(title,sheetId),merges,charts(chartId,spec(title)))')).sheets
    .map(s => [s.properties.title, {sheetId: s.properties.sheetId, merges: s.merges || [], charts: s.charts || []}]));
let sheets = await describe();
const owned = [CHARTS_TAB, ...tables.map(([tab]) => tab)];
const missing = owned.filter(tab => !(tab in sheets));
if (missing.length) {
    // Overview first, then Data, then the audit tabs in date order.
    await api(':batchUpdate', 'POST', {requests: missing.map(title => ({addSheet: {properties: {title, index: owned.indexOf(title)}}}))});
    sheets = await describe();
}

// Clearing the values keeps the tabs, and with them the charts and the pivot tables bound to their columns.
await api('/values:batchClear', 'POST', {ranges: owned.map(tab => `'${tab}'`)});
await api('/values:batchUpdate', 'POST', {
    valueInputOption: 'USER_ENTERED',
    data: [
        ...tables.map(([tab, rows]) => ({range: `'${tab}'!A1`, values: rows})),
        ...(overview ? [{range: `'Data'!${columnLetter(PIE_COLUMN)}1`, values: pieBlock}] : [])
    ]
});

// Layout is owned here and reapplied on every run, so a tab is right whether this run created it or not.
const span = m => `${m.startRowIndex}-${m.endRowIndex}/${m.startColumnIndex}-${m.endColumnIndex}`;
const bold = (sheetId, range) => ({repeatCell: {range: {sheetId, ...range}, cell: {userEnteredFormat: {textFormat: {bold: true}, verticalAlignment: 'MIDDLE'}}, fields: 'userEnteredFormat(textFormat.bold,verticalAlignment)'}});
// Overview holds the charts only; Data holds their series and stays hidden; the audits follow in date order.
const layout = [
    {updateSheetProperties: {properties: {sheetId: sheets[CHARTS_TAB].sheetId, index: 0, gridProperties: {frozenRowCount: 0, frozenColumnCount: 0}}, fields: 'index,gridProperties(frozenRowCount,frozenColumnCount)'}},
    ...tables.flatMap(([tab, rows], i) => {
    const {sheetId, merges} = sheets[tab];
    const requests = [
        {updateSheetProperties: {properties: {sheetId, index: i + 1, hidden: tab === 'Data', gridProperties: {frozenRowCount: headerRows(tab), frozenColumnCount: frozenColumns(tab)}}, fields: 'index,hidden,gridProperties(frozenRowCount,frozenColumnCount)'}},
        bold(sheetId, {endRowIndex: headerRows(tab)})
    ];
    if (tab === 'Data') requests.push(bold(sheetId, {endRowIndex: 1, startColumnIndex: PIE_COLUMN, endColumnIndex: PIE_COLUMN + 2}));

    const wanted = wantedMerges(tab, rows, sheetId);
    const current = merges.filter(m => m.startRowIndex === 0 && m.endRowIndex === 1);
    if (current.map(span).sort().join() === wanted.map(span).sort().join()) return requests;
    return [...requests, ...current.map(range => ({unmergeCells: {range}})), ...wanted.map(range => ({mergeCells: {mergeType: 'MERGE_ALL', range}}))];
    }),
];

// A chart is created once, then its spec is refreshed on every run so the ranges follow the history as it grows.
const charts = overview ? chartSpecs(sheets.Data.sheetId).map(({key, legacy, anchor, spec}) => {
    const existing = sheets[CHARTS_TAB].charts.find(c => [key, legacy].some(k => k && c.spec?.title?.startsWith(k)));
    return existing ?
        {updateChartSpec: {chartId: existing.chartId, spec}} :
        {addChart: {chart: {spec, position: {overlayPosition: {anchorCell: {sheetId: sheets[CHARTS_TAB].sheetId, ...anchor}, widthPixels: 600, heightPixels: 370}}}}};
}) : [];

await api(':batchUpdate', 'POST', {requests: [...layout, ...charts]});

const foreign = Object.keys(sheets).filter(tab => !owned.includes(tab));
console.log(`Pushed ${tables.map(([tab, rows]) => `${tab} (${dataRows(tab, rows)})`).join(', ')}${missing.length ? `, created ${missing.join(', ')}` : ''}; charts: ${charts.filter(c => c.addChart).length} created, ${charts.filter(c => c.updateChartSpec).length} refreshed`);
if (foreign.length) console.log(`Left untouched (not produced by a11y-csv.mjs, delete by hand if obsolete): ${foreign.join(', ')}`);
console.log(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
