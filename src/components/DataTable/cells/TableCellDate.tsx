import {TableCellWrapper} from './TableCellWrapper';

export const TableCellDate = ({value, locale}: { value: string | number | Date, locale?: string }) => {
    if (!value) {
        return <TableCellWrapper>-</TableCellWrapper>;
    }

    return (
        <TableCellWrapper>
            {new Date(value as string).toLocaleDateString(locale)}
        </TableCellWrapper>
    );
};
