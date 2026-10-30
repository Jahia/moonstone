import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        'storybook-addon-tag-badges',
        '@storybook/addon-mcp',
        '@storybook/addon-vitest',
    ],
    features: {
        experimentalReactComponentMeta: true,
    },
    // Stories tagged `internal` stay in `storybook dev` and in tests, but not in the published build.
    experimental_indexers: async (indexers = [], { configType }) =>
        configType !== 'PRODUCTION'
            ? indexers
            : indexers.map(indexer => ({
                    ...indexer,
                    createIndex: async (fileName, options) =>
                        (await indexer.createIndex(fileName, options)).filter(entry => !entry.tags?.includes('internal')),
                })),
};

export default config;
