import {TableCellWrapper} from './TableCellWrapper';

export const TableCellNumber = ({value, locale}: { value: string | number, locale?: string }) => {
    if (value === null || value === undefined) {
        return <TableCellWrapper align="right">-</TableCellWrapper>;
    }

    return (
        <TableCellWrapper align="right">
            <span className="moonstone-font-tabular">
                {value.toLocaleString(locale)}
            </span>
        </TableCellWrapper>
    );
};
