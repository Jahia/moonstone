import type { ComponentType } from 'react';

type PropValuesProps<P extends object, C extends keyof P, R extends keyof P> = {
    /** The component, rendered once for each value */
    readonly component: ComponentType<P>;
    /** The args of the story, given to each render */
    readonly args: P;
    /** The prop whose values are the columns */
    readonly prop: C;
    readonly values: readonly P[C][];
    /** A second prop, whose values are the rows */
    readonly rowProp?: R;
    readonly rowValues?: readonly P[R][];
};

/**
 * Renders a component once for each value of a prop, side by side, with the name of each value.
 * With a second prop, renders a table: one row for each value of `rowProp`.
 */
export const PropValues = <P extends object, C extends keyof P, R extends keyof P = never>({
    component: Component, args, prop, values, rowProp, rowValues = [],
}: PropValuesProps<P, C, R>) => {
    const rows = rowProp ? rowValues : [undefined];
    return (
        <table className="storyPropValues">
            <thead>
                <tr>
                    {rowProp && <th scope="col">{String(rowProp)}</th>}
                    {values.map(value => <th key={String(value)} scope="col">{String(value)}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr key={String(row)}>
                        {rowProp && <th scope="row">{String(row)}</th>}
                        {values.map((value) => {
                            const props = {
                                ...args,
                                ...(rowProp && { [rowProp]: row }),
                                [prop]: value,
                            } as P;
                            return <td key={String(value)}><Component {...props}/></td>;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
