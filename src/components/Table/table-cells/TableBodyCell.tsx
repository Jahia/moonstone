import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import {IconTextIcon, Typography} from '~/components';
import {ChevronRight, ChevronDown} from '~/icons';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';
import spacings from '~/tokens/spacings/spacing.json';

export const TableBodyCell: React.FC<TableCellProps> = ({
    component = 'td',
    textAlign = 'left',
    verticalAlign = 'center',
    className,
    iconStart,
    iconEnd,
    isFirstColumn,
    canExpand,
    isExpanded,
    depth,
    getToggleRowExpandedProps,
    children,
    ...props
}) => {
    const paddingLeft = `${depth * 0.75}rem`;
    const marginLeft = spacings.spacingMedium;

    return (
        <Typography
            className={clsx(
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                className
            )}
            component={component}
            variant="body"
            {...props}
        >

            <TableCell style={isFirstColumn ? {marginLeft, paddingLeft} : {}}>

                {canExpand && isFirstColumn ? (
                    <div
                        {...getToggleRowExpandedProps({style: {paddingLeft}})}
                        className={clsx('flexRow', 'alignCenter')}
                        {...props}
                    >
                        {isExpanded ? <ChevronDown className="moonstone-marginRightNano"/> : <ChevronRight className="moonstone-marginRightNano"/>}
                        <IconTextIcon
                            component="div"
                            iconStart={iconStart}
                            typographyProps={{isNowrap: true}}
                        >
                            {children}
                        </IconTextIcon>
                    </div>

                // Render this if the row cannot expand
                ) : (
                        <IconTextIcon
                            component="div"
                            iconStart={iconStart}
                            typographyProps={{isNowrap: true}}
                            style={isFirstColumn ? {marginLeft: '20px', paddingLeft} : {}}>
                                {children}
                        </IconTextIcon>
                    )
                }

            </TableCell>

        </Typography>
    );
};

TableBodyCell.displayName = 'TableBodyCell';
