import {TableCell} from './TableCell';
import type {TableCellProps} from './TableCell.types';

type Props = TableCellProps & {
    readonly value: number | null | undefined;
    readonly locale?: string;
};

export const TableCellNumber = ({value, className, locale, ...props}: Props) => {
    const formattedValue = value !== null && value !== undefined ?
        value.toLocaleString(locale) :
        '-';

    return (
        <TableCell className={className} {...props}>
            {formattedValue}
        </TableCell>
    );
};
