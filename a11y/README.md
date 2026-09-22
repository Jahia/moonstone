# Accessibility audit

Measures the WCAG 2.2 AA state of every component and tracks the series in a Google Sheet.
One audit = three measurements:

| Measurement | Command | Report |
|---|---|---|
| axe on every story, light and dark theme | `yarn test:a11y` | `reports/a11y/light.json`, `dark.json` |
| keyboard tests (`describe('X keyboard')` in the specs) | `yarn test --reporter=json --outputFile=reports/a11y/unit.json` | `reports/a11y/unit.json` |
| jsx-a11y rules of oxlint | run by `scripts/a11y-report.mjs` itself | part of `reports/a11y/audit.json` |

`reports/` is gitignored. The two test runs are expected to exit non-zero: the failures are the measurement.

## Flow

```
                              ┌─▶ reports/a11y/audit.json     the full audit, uploaded as a workflow artefact
reports/a11y/*.json ──a11y-report.mjs──┤
                              └─▶ Google Sheet, tab History    append, one row per component
                                            │
                                    tab Overview                pivots and charts reading History, built by hand
```

The script computes the figures and appends rows; the Sheet owns the presentation and is the source of truth.
Nothing is committed: the history lives in the Sheet.

### Tab `History`

One row per audit x component, the audits stacked under each other. `date` and `sha` identify the audit.

```
date | sha | component | total | critical | serious | A | AA | Color | Structure | Attribute | Forms | Keyboard | Other | Lint
```

- `total` = axe violations (deduplicated between the two themes) + keyboard gaps. Lint is not included.
- `critical`, `serious` = axe severity. `A`, `AA` = WCAG level.
- Families, from the axe `cat.*` tags, add up to `total`: `Color` = `cat.color`, `Structure` = `cat.structure`,
  `Attribute` = `cat.aria` + `cat.name-role-value`, `Forms` = `cat.forms`, `Keyboard` = `cat.keyboard` + keyboard gaps,
  `Other` = any other category.
- `Lint` = jsx-a11y warnings of the component. Warnings in stories or specs land on the row `other`.

### Tab `Overview`

Built by hand, once, with pivot tables and charts bound to the whole columns of `History`, so it follows the
history as it grows: indicators of the latest audit, trend of `total` per audit, family split and most affected
components of the latest audit. Two audits on the same day share a `date`: group by `sha` when it matters.

## Run it locally

```bash
yarn a11y:report
```

Runs the two test suites, then `node scripts/a11y-report.mjs`, which lints, writes `reports/a11y/audit.json`
and appends the rows to the Sheet. Without `A11Y_SHEET_ID` and credentials (`GOOGLE_SHEETS_SA_KEY`, the JSON
itself, or `GOOGLE_APPLICATION_CREDENTIALS`, a path) the script prints the rows instead of pushing them, as
does `node scripts/a11y-report.mjs --dry-run`.

## In CI

`.github/workflows/a11y-kpi.yml` runs on every push to `main` that touches `src/`, `.storybook/`, the lint config
or the dependencies, and can be started by hand (Actions, "A11y KPI", "Run workflow"). One audit per commit: when
the `sha` is already in `History`, the run appends nothing. `reports/a11y/` is uploaded as the `a11y-reports`
artefact.

## Setup, once

1. Share the spreadsheet as an editor with the service account's email.
2. Repository secrets `A11Y_SHEET_ID` (the spreadsheet id) and `GOOGLE_SHEETS_SA_KEY` (the service account JSON key).
3. The script creates the `History` tab with its header on the first run; build `Overview` on top of it.
