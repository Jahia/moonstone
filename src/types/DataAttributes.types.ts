/** Allows `data-*` attributes (e.g. `data-testid`). */
export type DataAttributes = {
    [key: `data-${string}`]: string | number | boolean | undefined;
};
