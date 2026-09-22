// The layout of the KPI spreadsheet, shared by a11y-xlsx.mjs (the file) and a11y-sheet.mjs (the Google Sheet),
// so both always agree. The CSVs written by a11y-csv.mjs hold the values; the layout lives here.
import {readFileSync, readdirSync} from 'node:fs';
import {join} from 'node:path';

// overview.csv -> Overview, general.csv -> General, <date>.csv -> one tab per audit, named after its date.
export const FIXED = {'overview.csv': 'Overview', 'general.csv': 'General'};
export const isAuditTab = tab => /^\d{4}-\d{2}-\d{2}$/.test(tab);
export const tabOf = file => FIXED[file] || file.replace(/\.csv$/, '');
export const headerRows = tab => isAuditTab(tab) ? 2 : 1;
export const frozenColumns = tab => tab === 'Overview' ? 1 : 2;
export const dataRows = (tab, rows) => rows.length - headerRows(tab);

// RFC 4180 reader: a11y-csv.mjs quotes any field holding a comma, a quote or a newline.
export const parseCsv = text => {
    const rows = [[]];
    let field = '';
    let quoted = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (quoted) {
            if (c === '"' && text[i + 1] === '"') { field += '"'; i++; } else if (c === '"') { quoted = false; } else { field += c; }
        } else if (c === '"') {
            quoted = true;
        } else if (c === ',') {
            rows.at(-1).push(field); field = '';
        } else if (c === '\n') {
            rows.at(-1).push(field); field = ''; rows.push([]);
        } else if (c !== '\r') {
            field += c;
        }
    }
    if (field || rows.at(-1).length) rows.at(-1).push(field);
    return rows.filter(r => r.length);
};

// Overview and General first, then the audit tabs in date order. Each entry is [tab, rows].
const rank = file => file in FIXED ? Object.keys(FIXED).indexOf(file) : Object.keys(FIXED).length;
export const loadTables = csvDir => {
    const tables = readdirSync(csvDir)
        .filter(f => f in FIXED || /^\d{4}-\d{2}-\d{2}\.csv$/.test(f))
        .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
        .map(file => [tabOf(file), parseCsv(readFileSync(join(csvDir, file), 'utf8'))]);
    if (!tables.length) throw new Error(`No CSV found in ${csvDir}. Run node scripts/a11y-csv.mjs first.`);
    return tables;
};

// A merge lives in the spreadsheet, never in the data file. A group label sits on the first cell of its
// span and spans up to the next label: along row 1 for an audit tab, down column A for General.
// Ranges are zero-based and half-open, the convention of the Google Sheets API.
const groupsOf = (cells, size) => {
    const groups = cells.map((label, i) => ({label, start: i})).filter(g => g.label);
    groups.forEach((g, i) => { g.end = groups[i + 1] ? groups[i + 1].start : size; });
    return groups.filter(g => g.end - g.start > 1);
};

export const wantedMerges = (tab, rows) => {
    if (isAuditTab(tab)) {
        return groupsOf(rows[0], rows[1].length)
            .map(g => ({startRowIndex: 0, endRowIndex: 1, startColumnIndex: g.start, endColumnIndex: g.end}));
    }

    if (tab === 'General') {
        return groupsOf(rows.map(r => r[0]), rows.length)
            .map(g => ({startRowIndex: g.start, endRowIndex: g.end, startColumnIndex: 0, endColumnIndex: 1}));
    }

    return [];
};

// D1:E1 style reference, for logs and for the XLSX.
export const columnLetter = i => (i >= 26 ? columnLetter(Math.floor(i / 26) - 1) : '') + String.fromCharCode(65 + (i % 26));
export const a1 = m => `${columnLetter(m.startColumnIndex)}${m.startRowIndex + 1}:${columnLetter(m.endColumnIndex - 1)}${m.endRowIndex}`;
