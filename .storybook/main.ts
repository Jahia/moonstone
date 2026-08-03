import { defineMain } from "@storybook/react-vite/node";

const config = defineMain({
    framework: "@storybook/react-vite",
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "storybook-addon-tag-badges",
        "@storybook/addon-mcp",
        "@storybook/addon-vitest",
    ],
    features: {
        experimentalReactComponentMeta: true,
    },
});

export default config;
