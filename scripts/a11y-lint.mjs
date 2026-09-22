#!/usr/bin/env node
// Runs oxlint and keeps its jsx-a11y findings as reports/a11y/lint.json, the file a11y-kpi.mjs reads.
//   node scripts/a11y-lint.mjs [--out reports/a11y/lint.json]
// Exit code is always 0: the findings are the measurement, not a gate.
import {execSync} from 'node:child_process';
import {mkdirSync, writeFileSync} from 'node:fs';
import {dirname} from 'node:path';

const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const outFile = arg('--out', 'reports/a11y/lint.json');

// oxlint exits non-zero when it reports errors; the JSON is on stdout either way.
const run = cmd => { try { return execSync(cmd, {encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024}); } catch (e) { return e.stdout || ''; } };
const raw = run('yarn oxlint . --format json');
const report = JSON.parse(raw.slice(raw.indexOf('{')));
const findings = report.diagnostics.filter(d => /^jsx[-_]a11y\(/.test(d.code || ''));

const kindOf = file => /\.stories\./.test(file) ? 'stories' : /\.spec\./.test(file) ? 'specs' : 'components';
const componentOf = file => (file.replace(/\\/g, '/').match(/src\/components\/([^/]+)/) || [, 'other'])[1];
const count = (list, key) => list.reduce((acc, x) => { const k = key(x); acc[k] = (acc[k] || 0) + 1; return acc; }, {});
const messages = findings.map(d => ({
    file: d.filename.replace(/\\/g, '/'),
    rule: d.code.replace(/^jsx[-_]a11y\((.*)\)$/, '$1'),
    line: d.labels?.[0]?.span?.line ?? null,
    message: d.message,
}));

const lint = {
    linter: 'oxlint',
    total: messages.length,
    files: new Set(messages.map(m => m.file)).size,
    byRule: count(messages, m => m.rule),
    byKind: count(messages, m => kindOf(m.file)),
    byComponent: count(messages.filter(m => kindOf(m.file) === 'components'), m => componentOf(m.file)),
    messages,
};
mkdirSync(dirname(outFile), {recursive: true});
writeFileSync(outFile, JSON.stringify(lint, null, 2) + '\n');
console.log(`${lint.total} jsx-a11y finding(s) in ${lint.files} file(s), ${Object.keys(lint.byRule).length} rule(s). Details: ${outFile}`);
