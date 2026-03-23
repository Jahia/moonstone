import {React} from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {TableCell} from '../TableCell';
import './TableCellStatus.scss';
import type {TableCellStatusProps} from './TableCellStatus.types';

export const TableCellStatus: React.FC<TableCellStatusProps> = ({
    color,
    iconStart,
    text,
    className,
    ...props
}) => (
    <TableCell
        className={clsx(
            'moonstone-tableCellStatus',
            `moonstone-tableCellStatus_${color}`,
            className
        )}
        width="8px"
        {...props}
    >
        <div className='flexRow_nowrap alignCenter moonstone-tableCellStatus_panel'>
            {iconStart && <iconStart.type {...iconStart.props} size="default    "/>}
            <Typography
                isNowrap
                component="div"
                variant="caption"
                weight="semiBold"
                className="flexRow_nowrap alignCenter"
            >
                {text}
            </Typography>
        </div>
    </TableCell>
);

TableCellStatus.displayName = 'TableCellStatus';
