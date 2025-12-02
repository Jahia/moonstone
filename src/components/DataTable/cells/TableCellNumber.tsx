import {TableCellWrapper} from './TableCellWrapper';

export const TableCellNumber = ({value, locale}: { value: string | number, locale?: string }) => {
    if (value === null || value === undefined) {
        return <TableCellWrapper>-</TableCellWrapper>;
    }

    return (
        <TableCellWrapper>
            <span className="moonstone-font-tabular">
                {value.toLocaleString(locale)}
            </span>
        </TableCellWrapper>
    );
};
