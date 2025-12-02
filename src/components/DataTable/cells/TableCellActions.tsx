import {TableCellWrapper} from './TableCellWrapper';
import {Button, MoreVert} from '~/index';

export const TableCellActions = () => {
    return (
        <TableCellWrapper align="right">
            <Button variant="ghost" icon={<MoreVert/>}/>
        </TableCellWrapper>
    );
};
