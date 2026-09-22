#!/usr/bin/env node
// Writes the KPI spreadsheet as an XLSX file, with the same tabs, merges, frozen panes and bold headers
// that a11y-sheet.mjs applies to the Google Sheet: the file to open when checking the format.
//   node scripts/a11y-xlsx.mjs [--csv reports/a11y/csv] [--out-dir reports/a11y]
// Output: <out-dir>/moonstone-wcag-audit-<date>.xlsx, dated after the latest audit. A local check, not kept in the repo.
// No dependency: an XLSX is a zip of XML parts, both written here.
import {writeFileSync, mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {crc32} from 'node:zlib';
import {loadTables, wantedMerges, isAuditTab, headerRows, frozenColumns, columnLetter, a1} from './a11y-layout.mjs';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const csvDir = arg('--csv', 'reports/a11y/csv');
const outDir = arg('--out-dir', 'reports/a11y');

const tables = loadTables(csvDir);
const latest = tables.map(([tab]) => tab).filter(isAuditTab).sort().at(-1);
const outFile = join(outDir, `moonstone-wcag-audit-${latest}.xlsx`);
const xml = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const BOLD = 1; // index in cellXfs below

const sheetXml = (tab, rows) => {
    const headers = headerRows(tab);
    const cell = (v, r, c) => {
        if (v === '') return '';
        const ref = `${columnLetter(c)}${r + 1}`;
        const style = r < headers ? ` s="${BOLD}"` : '';
        return /^-?\d+(\.\d+)?$/.test(v) ? `<c r="${ref}"${style}><v>${v}</v></c>` : `<c r="${ref}" t="inlineStr"${style}><is><t>${xml(v)}</t></is></c>`;
    };
    const widths = rows[0].map((_, c) => Math.min(60, Math.max(8, ...rows.map(r => (r[c] || '').length + 2))));
    const merges = wantedMerges(tab, rows);
    const frozen = frozenColumns(tab);
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<sheetViews><sheetView workbookViewId="0"><pane xSplit="${frozen}" ySplit="${headers}" topLeftCell="${columnLetter(frozen)}${headers + 1}" activePane="bottomRight" state="frozen"/></sheetView></sheetViews>
<cols>${widths.map((w, c) => `<col min="${c + 1}" max="${c + 1}" width="${w}" customWidth="1"/>`).join('')}</cols>
<sheetData>${rows.map((row, r) => `<row r="${r + 1}">${row.map((v, c) => cell(v, r, c)).join('')}</row>`).join('')}</sheetData>
${merges.length ? `<mergeCells count="${merges.length}">${merges.map(m => `<mergeCell ref="${a1(m)}"/>`).join('')}</mergeCells>` : ''}
</worksheet>`;
};

const parts = {
    '[Content_Types].xml': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
${tables.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('\n')}
</Types>`,
    '_rels/.rels': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,
    'xl/workbook.xml': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>${tables.map(([tab], i) => `<sheet name="${xml(tab)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}</sheets>
</workbook>`,
    'xl/_rels/workbook.xml.rels': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${tables.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('\n')}
<Relationship Id="rId${tables.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`,
    'xl/styles.xml': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts>
<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf></cellXfs>
<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`,
    ...Object.fromEntries(tables.map(([tab, rows], i) => [`xl/worksheets/sheet${i + 1}.xml`, sheetXml(tab, rows)])),
};

// Zip container, entries stored uncompressed: the parts are small and every reader accepts it.
const zip = files => {
    const locals = [];
    const centrals = [];
    let offset = 0;
    const u16 = n => { const b = Buffer.alloc(2); b.writeUInt16LE(n); return b; };
    const u32 = n => { const b = Buffer.alloc(4); b.writeUInt32LE(n >>> 0); return b; };
    for (const [name, text] of Object.entries(files)) {
        const data = Buffer.from(text, 'utf8');
        const nameBuf = Buffer.from(name, 'utf8');
        const crc = crc32(data);
        const common = Buffer.concat([u16(20), u16(0), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBuf.length), u16(0)]);
        const local = Buffer.concat([u32(0x04034b50), common, nameBuf, data]);
        centrals.push(Buffer.concat([u32(0x02014b50), u16(20), common, u16(0), u16(0), u16(0), u32(0), u32(offset), nameBuf]));
        locals.push(local);
        offset += local.length;
    }
    const central = Buffer.concat(centrals);
    const end = Buffer.concat([u32(0x06054b50), u16(0), u16(0), u16(locals.length), u16(locals.length), u32(central.length), u32(offset), u16(0)]);
    return Buffer.concat([...locals, central, end]);
};

mkdirSync(outDir, {recursive: true});
writeFileSync(outFile, zip(parts));
console.log(`${outFile}: ${tables.map(([tab, rows]) => `${tab}${wantedMerges(tab, rows).length ? ` (merges ${wantedMerges(tab, rows).map(a1).join(' ')})` : ''}`).join(', ')}`);
