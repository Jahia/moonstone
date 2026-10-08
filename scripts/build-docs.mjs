#!/usr/bin/env node
// Generates the agent-readable documentation shipped in the npm package (dist/docs/), then reports what it lacks.
//
//   node scripts/build-docs.mjs [--strict]
//
// Inputs: the Storybook component manifest (storybook-static/manifests/components.json, from `yarn build:storybook`),
// the public exports (dist/index.d.ts, from `yarn build:lib`), the token stylesheets, and the hand-written guides of
// src/__docs__/. A component page holds its description, its props and the examples a consumer can copy; examples that
// rely on Storybook-only code are left out and reported. --strict exits 1 when the report is not empty.
import { cpSync, globSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import ts from 'typescript';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'dist/docs');
const strict = process.argv.includes('--strict');
const { version } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const manifest = JSON.parse(readFileSync(join(root, 'storybook-static/manifests/components.json'), 'utf8')).components;
const read = file => readFileSync(join(root, file), 'utf8');

// ---------- public exports, from the built typings ----------
// The stories under `dir` import from that entry point first: DataTable has its own Table, TableRow...
const entryPoints = {
    '@jahia/moonstone': 'dist/index.d.ts',
    '@jahia/moonstone/DataTable': 'dist/components/DataTable/index.d.ts',
};
const entryPointDirs = { '@jahia/moonstone/DataTable': './src/components/DataTable/' };
const program = ts.createProgram(Object.values(entryPoints).map(file => join(root, file)), {
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
    noEmit: true,
});
const checker = program.getTypeChecker();
const valueExportsOf = file => checker.getExportsOfModule(checker.getSymbolAtLocation(program.getSourceFile(join(root, file)))).flatMap((symbol) => {
    const target = symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
    return target.flags & ts.SymbolFlags.Value
        ? [{
                name: symbol.name,
                file: target.declarations?.[0]?.getSourceFile().fileName ?? '',
            }]
        : [];
});
const icons = [];
const components = [];
const otherExports = [];
const entryPointOf = new Map(); // Export name -> the first entry point that exports it
const exportsByEntryPoint = {}; // Entry point -> export name -> declaration file
const clashes = [];
for (const [entryPoint, file] of Object.entries(entryPoints)) {
    exportsByEntryPoint[entryPoint] = new Map();
    for (const { name, file: declaration } of valueExportsOf(file)) {
        exportsByEntryPoint[entryPoint].set(name, declaration);
        if (entryPointOf.has(name)) {
            const first = entryPointOf.get(name);
            if (exportsByEntryPoint[first].get(name) !== declaration) clashes.push(`${name}: ${first} and ${entryPoint} export different components`);
            continue;
        }
        entryPointOf.set(name, entryPoint);
        if (declaration.includes('/icons/components/')) icons.push(name);
        else if (/^[A-Z]/.test(name) && name !== 'Temporal') components.push(name);
        else otherExports.push(name);
    }
}
const exported = new Set(entryPointOf.keys());
icons.sort((a, b) => a.localeCompare(b));

// ---------- the report, printed at the end ----------
/** @type {Record<string, string[]>} */
const report = {
    clashes: [],
    notExported: [],
    undocumented: [],
    noDescription: [],
    manifestErrors: [],
    droppedExamples: [],
    noExamples: [],
    propsWithoutDescription: [],
};

// ---------- helpers ----------
const cell = text => String(text ?? '').replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();
const typeOf = (prop) => {
    const type = prop.type?.raw ?? prop.type?.name ?? '';
    return type.length > 160 ? `${type.slice(0, 157)}...` : type;
};
const descriptionOf = entry => (entry.reactComponentMeta?.description || entry.description || '').trim();
const nameOf = entry => entry.reactComponentMeta?.exportName || entry.name;
const usedExports = snippet => [...exported].filter(name => new RegExp(`<${name}[\\s/>]|\\b${name}[.(]`).test(snippet)).sort((a, b) => a.localeCompare(b));
const preferredEntryPoint = path => Object.keys(entryPointDirs).find(entryPoint => path?.startsWith(entryPointDirs[entryPoint])) ?? '@jahia/moonstone';
const resolveEntryPoint = (name, preferred) => exportsByEntryPoint[preferred].has(name) ? preferred : entryPointOf.get(name);
const importLines = (names, preferred = '@jahia/moonstone') => Object.keys(entryPoints)
    .map(entryPoint => [entryPoint, names.filter(name => resolveEntryPoint(name, preferred) === entryPoint)])
    .filter(([, list]) => list.length)
    .map(([entryPoint, list]) => `import {${list.join(', ')}} from '${entryPoint}';`)
    .join('\n');

// The stories' sample data (src/data/), which the examples use without defining it
const sampleData = new Set(globSync('src/data/**/*.{ts,tsx,js,jsx}', { cwd: root }).flatMap(file => [...read(file).matchAll(/^export (?:const|function) (\w+)/gm)].map(m => m[1])));
const sampleDataNote = (snippet) => {
    const used = [...sampleData].filter(name => new RegExp(`\\b${name}\\b`).test(snippet));
    return used.length ? `// ${used.join(', ')}: sample data of Moonstone's stories, replace with your own\n` : '';
};

// Why a story snippet cannot be copied into a consumer's code, or null when it can
function whyNotCopyable(snippet) {
    if (/className="[^"]*\bstory/.test(snippet)) return 'uses a Storybook-only class';
    const defined = new Set([...snippet.matchAll(/\b(?:const|function|class)\s+([A-Z]\w*)/g)].map(m => m[1]));
    const missing = [...new Set([...snippet.matchAll(/(?<![\w.])<([A-Z]\w*)/g)].map(m => m[1]))].filter(n => !exported.has(n) && !defined.has(n));
    if (missing.length) return `renders ${missing.join(', ')}, not exported by Moonstone`;
    if (/\bargs\b/.test(snippet)) return 'depends on Storybook args';
    if (/\bglobals\b/.test(snippet)) return 'depends on Storybook globals';
    return null;
}

function propsTable(entry, owner) {
    const props = Object.values(entry.reactComponentMeta?.props ?? {});
    if (!props.length) return '_No documented props._\n';
    const rows = props.map((prop) => {
        if (!prop.description) report.propsWithoutDescription.push(`${owner}.${prop.name}`);
        return `| \`${prop.name}\`${prop.required ? ' (required)' : ''} | \`${cell(typeOf(prop))}\` | ${prop.defaultValue ? `\`${cell(prop.defaultValue.value)}\`` : ''} | ${cell(prop.description)} |`;
    });
    return ['| Prop | Type | Default | Description |', '|---|---|---|---|', ...rows, ''].join('\n');
}

// ---------- component pages ----------
const sections = {
    components: [],
    layouts: [],
    utilities: [],
};
const documented = new Set();
const skipped = [];
const ownPages = new Set(Object.values(manifest).filter(entry => entry.reactComponentMeta).map(nameOf));
rmSync(out, {
    recursive: true,
    force: true,
});
mkdirSync(join(out, 'components'), { recursive: true });

for (const [id, entry] of Object.entries(manifest)) {
    const section = sections[id.split('-')[0]] ? id.split('-')[0] : 'components';
    if (entry.error) report.manifestErrors.push(`${id}: ${entry.error.name}`);
    if (!entry.reactComponentMeta) {
        skipped.push(id); // Tokens, demos and broken entries: replaced by guides or reported
        continue;
    }

    const name = nameOf(entry);
    const description = descriptionOf(entry);
    if (!exported.has(name)) {
        report.notExported.push(`${name} (${id})`);
        continue;
    }
    documented.add(name);
    if (!description) report.noDescription.push(name);

    const preferred = preferredEntryPoint(entry.path);
    const examples = [];
    for (const story of entry.stories) {
        const reason = whyNotCopyable(story.snippet);
        if (reason) {
            report.droppedExamples.push(`${name} / ${story.name}: ${reason}`);
            continue;
        }
        const imports = usedExports(story.snippet);
        examples.push(`### ${story.name}\n\n\`\`\`jsx\n${imports.length ? `${importLines(imports, preferred)}\n\n` : ''}${sampleDataNote(story.snippet)}${story.snippet}\n\`\`\`\n`);
    }
    if (!examples.length) report.noExamples.push(name);

    const subcomponents = Object.values(entry.subcomponents ?? {}).map((sub) => {
        if (ownPages.has(nameOf(sub))) return `## ${nameOf(sub)}\n\nSee [${nameOf(sub)}](${nameOf(sub)}.md).\n`;
        documented.add(nameOf(sub));
        if (!descriptionOf(sub)) report.noDescription.push(nameOf(sub));
        return `## ${nameOf(sub)}\n\n${descriptionOf(sub) || '_No description yet._'}\n\n\`\`\`jsx\n${importLines([nameOf(sub)], preferred)}\n\`\`\`\n\n${propsTable(sub, nameOf(sub))}`;
    });

    writeFileSync(join(out, 'components', `${name}.md`), [
        `# ${name}\n`,
        `${description || '_No description yet._'}\n`,
        `\`\`\`jsx\n${importLines([name], preferred)}\n\`\`\`\n`,
        `## Props\n\n${propsTable(entry, name)}`,
        ...subcomponents,
        `## Examples\n\n${examples.join('\n') || '_No example yet._\n'}`,
    ].join('\n'));
    sections[section].push({
        name,
        description,
        subcomponents: Object.values(entry.subcomponents ?? {}).map(nameOf),
    });
}

report.clashes = clashes;
report.undocumented = components.filter(name => !documented.has(name)).sort((a, b) => a.localeCompare(b));

// ---------- guides ----------
mkdirSync(join(out, 'guides'), { recursive: true });
cpSync(join(root, 'src/__docs__/setup.md'), join(out, 'guides/setup.md'));
cpSync(join(root, 'src/components/GlobalStyle/GlobalStyle_layout.md'), join(out, 'guides/layout-classes.md'));
cpSync(join(root, 'src/components/DataTable/MIGRATION.md'), join(out, 'guides/datatable-migration.md'));

// Tokens: every --moon-* custom property, with its value once the Sass variables are substituted
const sassVariables = Object.fromEntries([...read('src/tokens/colors/colors.scss').matchAll(/^\$([\w-]+):\s*([^;]+);/gm)].map(m => [m[1], m[2]]));
const tokenTable = (file) => {
    const rows = [...read(file).matchAll(/^\s*(--moon-[\w-]+):\s*([^;]+);/gm)].map(([, token, value]) => {
        const resolved = value.replace(/#\{(.+?)\}/g, '$1').replace(/\$([\w-]+)/g, (raw, v) => sassVariables[v] ?? raw);
        return `| \`${token}\` | \`${cell(resolved)}\` |`;
    });
    return ['| Variable | Value |', '|---|---|', ...rows, ''].join('\n');
};
writeFileSync(join(out, 'guides/tokens.md'), [
    read('src/__docs__/tokens.md'),
    `## Colors\n\n${tokenTable('src/tokens/colors/colors.scss')}`,
    `## Spacings\n\n${tokenTable('src/tokens/spacings/spacings.scss')}`,
    `## Radii\n\n${tokenTable('src/tokens/borders/borders.scss')}`,
    `## Other variables\n\n${tokenTable('src/globals/_variables.scss')}`,
].join('\n'));

writeFileSync(join(out, 'guides/icons.md'), `${read('src/__docs__/icons.md')}\n## All icons (${icons.length})\n\n${icons.map(i => `\`${i}\``).join(', ')}\n`);

// ---------- index ----------
const indexLines = list => list.sort((a, b) => a.name.localeCompare(b.name)).map(({ name, description, subcomponents }) => {
    const summary = description ? description.split(/\n\s*\n/)[0].replace(/\s+/g, ' ') : '_No description yet._';
    return `- [${name}](components/${name}.md)${subcomponents.length ? ` (with ${subcomponents.join(', ')})` : ''}: ${summary}`;
});
writeFileSync(join(out, 'README.md'), `# Moonstone ${version}

Moonstone is Jahia's design system: the React components of the Jahia administration UI (jContent, administration
screens, UI extensions). It is not meant for the pages of a website.

Read [setup](guides/setup.md) first. Before building any UI element, look for it in this index and read its page:
props are listed there, do not guess them.

## Guides

- [Setup](guides/setup.md): install, imports, styles, dates
- [Design tokens](guides/tokens.md): the \`--moon-*\` CSS variables for colors, spacings and radii
- [Icons](guides/icons.md): the ${icons.length} icon components and their props
- [Layout classes](guides/layout-classes.md): flexbox utility classes
- [DataTable migration](guides/datatable-migration.md): from the \`renderRow\` API to the row context

## Components

${indexLines(sections.components).join('\n')}

## Layouts

${indexLines(sections.layouts).join('\n')}

## Utilities

${indexLines(sections.utilities).join('\n')}
${otherExports.length ? `\nOther exports: ${otherExports.sort((a, b) => a.localeCompare(b)).map(e => `\`${e}\``).join(', ')}\n` : ''}`);

// ---------- report ----------
const titles = {
    clashes: 'Names exported by two entry points for different components',
    notExported: 'Documented in Storybook, but not exported (no page written)',
    undocumented: 'Exported components without a Storybook entry',
    noDescription: 'Components without a description (add a JSDoc comment on the component)',
    manifestErrors: 'Manifest entries in error',
    noExamples: 'Components without a copyable example',
    droppedExamples: 'Examples left out',
    propsWithoutDescription: 'Props without a description',
};
let gaps = 0;
console.log(`Wrote ${documented.size} components, ${icons.length} icons and 5 guides to ${out}`);
for (const [key, items] of Object.entries(report)) {
    if (!items.length) continue;
    gaps += items.length;
    console.log(`\n${titles[key]} (${items.length}):`);
    for (const item of items) console.log(`  - ${item}`);
}
if (strict && gaps) process.exit(1);
