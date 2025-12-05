import {TableCell} from './TableCell';

type Props = {
    readonly value: Date | string | null | undefined;
    readonly className?: string;
    readonly locale?: string;
};

export const TableCellDate = ({value, className, locale}: Props) => {
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
        <TableCell className={className}>
            {formatDate()}
        </TableCell>
    );
};
