import React from 'react';

export type TableCellWrapperProps = Omit<React.ComponentPropsWithoutRef<'td'>, 'className' | 'children'> & {
    /**
     * How to align content horizontally within the wrapper.
     * This applies a specific CSS class (e.g., .align-right).
     * @default 'left'
     */
     align?: 'left' | 'center' | 'right';

    /**
     * Additional classnames to apply to the <td> element.
     */
     className?: string;

    /**
     * The content to be rendered inside the cell wrapper.
     * Usually this is the specific cell content (Text, Badges, etc.).
     */
     children?: React.ReactNode;

    /**
     * Any inline styles to apply to the <td>.
     */
    style?: React.CSSProperties;
};
