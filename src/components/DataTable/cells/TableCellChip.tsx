import {TableCellWrapper} from './TableCellWrapper';
import {Badge} from '~/index';

type Props = {
    value: string;
};

export const TableCellChips = ({value}: Props) => {
    if (!value) {
        return <TableCellWrapper>-</TableCellWrapper>;
    }

    return (
        <TableCellWrapper>
            <Badge
                label={value}
                color="accent" // By default, can be customized later
            />
        </TableCellWrapper>
    );
};
