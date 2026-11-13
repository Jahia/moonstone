export type SortIndicatorProps = {
    /**
     * Whether to render the sort indicator ascending/up arrow or descending/down arrow
     * @default 'descending'
     */
    direction?: 'ascending' | 'descending';

    /**
     * Define if the column is currently sorted
     * @default false
     */
    isSorted?: boolean;

    /**
     * Additional classname
     */
    className?: string;
};
