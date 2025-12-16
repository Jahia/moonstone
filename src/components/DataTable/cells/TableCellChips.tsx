import {TableCell} from './TableCell';
import type {TableCellProps} from './TableCell.types';
import {Chip} from '~/index';

type Props = TableCellProps & {
    readonly value: string[];
};

export const TableCellChips = ({value, className, ...props}: Props) => {
    return (
        <TableCell className={className} {...props}>
            {value && value.length > 0 ? value.map((chip, index) => (
                <Chip
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${chip}-${index}`}
                    label={chip}
                    color="accent"
                />
            )) : '-'}
        </TableCell>
    );
};
