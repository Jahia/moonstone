export type SortIndicatorProps = {
    /**
     * Whether to render the sort indicator ascending/up arrow or descending/down arrow
     */
    direction?: 'ascending' | 'descending';

    /**
     * Define if the column is currently sorted
     */
    isSorted?: boolean;

    /**
     * Additional classname
     */
    className?: string;
};
