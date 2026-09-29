# Accessibility audit

Tracks the WCAG 2.2 AA state of every Moonstone component over time in a Google Sheet.
Part of the [accessibility epic](https://github.com/Jahia/moonstone/issues/1421).

## What it tracks

`scripts/a11y-report.mjs` runs three measurements and appends one row per component to the sheet:

- **axe** on every story, light and dark themes
- **keyboard** gaps — `describe('<Component> keyboard')` specs marked `it.fails`
- **jsx-a11y** lint (oxlint)

The measurements are expected to report failures — those failures are the data.

## Flow

```
node scripts/a11y-report.mjs ──▶ measures everything in a temp dir, then discards it
                              ├─▶ reports/audit-a11y.csv   the pushed rows (workflow artefact, gitignored)
                              └─▶ Google Sheet             the source of truth (one audit per commit)
```

Runs on every push to `main` via `.github/workflows/a11y-kpi.yml`, or locally with `yarn a11y:report`.
Without credentials (or with `--dry-run`) it just prints the rows instead of pushing.

## Setup (once)

1. Share the spreadsheet as an editor with the service account's email.
2. Set repository secrets `A11Y_SHEET_ID` (the spreadsheet id) and `GOOGLE_SHEETS_SA_KEY` (the service account JSON key).
3. The first run creates the `History` tab; build the `Overview` (charts) on top of it by hand.
