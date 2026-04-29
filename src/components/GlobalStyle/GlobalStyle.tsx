/**
 * @deprecated This component does not do anything; there are two ways to import CSS in moonstone:
 * - import anything from `@jahia/moonstone` and let your bundler do the rest
 * - import `@jahia/moonstone/scoped` to get CSS classes with a CSS module hash to avoid conflicts
*/
export const GlobalStyle = () => {
    return <>{}</>;
};

GlobalStyle.displayName = 'GlobalStyle';
