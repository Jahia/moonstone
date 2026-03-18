import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import './TableCellStatus.scss';
import type {TableCellStatusProps} from './TableCellStatus.types';

export const TableCellStatus: React.FC<TableCellStatusProps> = ({
    color,
    iconStart = null,
    text,
    className,
    ...props
}) => (
    <div
        className={clsx('moonstone-tableCellStatus', `moonstone-tableCellStatus_${color}`, className)}
        {...props}
    >
        <span className="moonstone-tableCellStatus_trigger"/>
        <span className="moonstone-tableCellStatus_strip"/>
        <div className="moonstone-tableCellStatus_overlay">
            {iconStart && <span className="moonstone-tableCellStatus_icon">{iconStart}</span>}
            <Typography
                isNowrap
                component="span"
                variant="caption"
                weight="semiBold"
                className="moonstone-tableCellStatus_text"
            >
                {text}
            </Typography>
        </div>
    </div>
);

TableCellStatus.displayName = 'TableCellStatus';
