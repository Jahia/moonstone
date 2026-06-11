---
description: "Use when writing, adding, creating, or updating documentation for a component. Covers .md prose files and .mdx Storybook Docs pages for any component in src/components/."
applyTo: "src/components/**/*.{md,mdx}"
---
# Component Documentation

**Always delegate to the `component-doc-writer` agent** for any task that involves writing or updating component documentation.

This includes:
- Creating a new `<Component>.md` prose file
- Creating a new `<Component>.mdx` Storybook Docs page
- Updating existing `.md` or `.mdx` doc files under `src/components/`
- Auditing docs against the style guide

Never write component docs directly. Use `runSubagent` with `agentName: "component-doc-writer"` instead.
