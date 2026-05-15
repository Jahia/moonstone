/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

declare module '*.md' {
    const content: string;
    export default content;
}
