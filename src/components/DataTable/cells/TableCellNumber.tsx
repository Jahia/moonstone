import {TableCell} from './TableCell';

type Props = {
    readonly value: number | null | undefined;
    readonly className?: string;
    readonly locale?: string;
};

export const TableCellNumber = ({value, className, locale}: Props) => {
    const formattedValue = value !== null && value !== undefined ?
        value.toLocaleString(locale) :
        '-';

    return (
        <TableCell className={className}>
            {formattedValue}
        </TableCell>
    );
};
