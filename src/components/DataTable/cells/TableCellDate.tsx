import {TableCell} from './TableCell';
import type {TableCellProps} from './TableCell.types';

type Props = TableCellProps & {
    readonly value: Date | string | null | undefined;
    readonly locale?: string;
};

export const TableCellDate = ({value, className, locale, ...props}: Props) => {
    const formatDate = () => {
        if (value === null || value === undefined) {
            return '-';
        }

        // If it's already a string, return as-is
        if (typeof value === 'string') {
            return value;
        }

        // If it's a Date object, format it
        return value.toLocaleDateString(locale);
    };

    return (
        <TableCell className={className} {...props}>
            {formatDate()}
        </TableCell>
    );
};
