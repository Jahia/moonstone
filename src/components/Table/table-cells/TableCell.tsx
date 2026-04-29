import React from 'react';
import clsx from 'clsx';

import type {TableCellProps} from './TableCell.types';
import styles from './TableCell.module.scss';
import {icons, layout} from '~/globals/css-utils.js';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, TableCellProps> = (
    {
        iconStart,
        iconEnd,
        className,
        children,
        ...props
    }, ref) => {
    return (
        <div ref={ref}
             className={clsx(
                 ['moonstone-TableCell', styles['moonstone-TableCell']],
                 ['flexRow_nowrap', layout.flexRow_nowrap],
                 ['alignCenter', layout.alignCenter],
                 className
             )}
             {...props}
        >

            {iconStart && (
                <iconStart.type
                    {...iconStart.props}
                    className={clsx('moonstone-icon_default', icons['moonstone-icon_default'], iconStart.props.className)}
                />
            )}

            {children}

            {iconEnd && (
                <iconEnd.type
                    {...iconEnd.props}
                    className={clsx('moonstone-icon_default', icons['moonstone-icon_default'], iconEnd.props.className)}
                />
            )}

        </div>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'FoundationTableCell';
