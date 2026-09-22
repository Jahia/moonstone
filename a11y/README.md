# Accessibility audit

Measures the WCAG 2.2 AA state of every component and keeps the series in this folder.
One audit = three measurements:

| Measurement | Command | Report |
|---|---|---|
| axe on every story, light and dark theme | `yarn test:a11y` | `reports/a11y/light.json`, `dark.json` |
| keyboard tests (`describe('X keyboard')` in the specs) | `yarn test --reporter=json --outputFile=reports/a11y/unit.json` | `reports/a11y/unit.json` |
| jsx-a11y rules of oxlint | `yarn lint:a11y` | `reports/a11y/lint.json` |

`reports/` is gitignored. The three runs are expected to exit non-zero: the failures are the measurement.

## Flow

```
reports/a11y/*.json  ──a11y-kpi.mjs──▶  a11y/history/<date>.json      one file per audit, the source of truth
                                              │
                                        a11y-csv.mjs                    reports/a11y/csv/*.csv (values only)
                                              │
                                        a11y-sheet.mjs                  Google Sheet (tabs, merges, charts)
```

`a11y-kpi.mjs` writes nothing when the figures equal the previous audit. To check the layout without Google,
`node scripts/a11y-xlsx.mjs` writes the same tables as an XLSX in `reports/a11y/` (same layout module, not kept in the repo).

## Run it locally

```bash
yarn a11y:report
```

Runs everything above, writes `a11y/history/<date>.json` when the figures changed, and pushes to the Google Sheet.
**Commit that JSON with your fix**: it is the record of the audit, and `main` is where the series lives.
Without Google credentials, stop before the push:

```bash
yarn test:a11y; yarn test --reporter=json --outputFile=reports/a11y/unit.json; yarn lint:a11y
node scripts/a11y-kpi.mjs && node scripts/a11y-csv.mjs
```

`node scripts/a11y-sheet.mjs --dry-run` prints what the push would do; `node scripts/a11y-xlsx.mjs` writes it as an XLSX.

## In CI

`.github/workflows/a11y-kpi.yml` runs on every push to `main` that touches `src/`, `.storybook/`, the lint config
or `a11y/history/`, and can be started by hand (Actions, "A11y KPI", "Run workflow"). It measures `main`, refreshes
the spreadsheet from the audits committed in `a11y/history/`, and never writes to git.

When the figures measured on `main` differ from the latest committed audit, the spreadsheet still gets today's
figures, and the run fails with the file to add: run `yarn a11y:report` on `main` and commit the JSON.

Setup, once: repository variable `A11Y_SHEET_ID`, repository secret `GOOGLE_SHEETS_SA_KEY` (a service account
JSON key), and the spreadsheet shared with the service account's email as an editor.

## Files

- `history/<date>.json`: the audit (axe deduplicated story x rule, keyboard gaps per component, lint).
