import {TableCellWrapper} from './TableCellWrapper';
import {Button, MoreVert} from '~/index';

export const TableCellActions = () => {
    return (
        <TableCellWrapper>
            <Button variant="ghost" icon={<MoreVert/>}/>
        </TableCellWrapper>
    );
};
