import {TableCell} from './TableCell';
import {Chip} from '~/index';

type Props = {
    readonly value: string[];
    readonly className?: string;
};

export const TableCellChips = ({value, className}: Props) => {
    return (
        <TableCell className={className}>
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
