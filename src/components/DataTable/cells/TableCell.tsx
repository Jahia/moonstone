import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {ChevronDown, ChevronRight} from '~/icons';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';
import type {TableCellProps} from './TableCell.types';

const INDENT_PX = 20; // Pixels per depth level
const CHEVRON_SPACE_PX = 20; // Space reserved for chevron when not expandable

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children,
        align = 'left',
        verticalAlign = 'center',
        width,
        isScrollable,
        style,
        component = 'td',
        // Structured view props
        depth,
        isExpandable,
        isExpanded,
        onToggleExpand,
        ...props
    },
    ref
) => {
    const scrollableClass = isScrollable ? 'moonstone-tableCellContent' : '';
    const isStructured = typeof depth === 'number';
    const indentPx = isStructured ? depth * INDENT_PX : 0;

    // Render content with optional chevron for structured view
    const renderContent = () => {
        if (!isStructured) {
            return children ?? '-';
        }

        // Structured cell - render with indentation and optional chevron
        const marginLeft = isExpandable ? indentPx : indentPx + CHEVRON_SPACE_PX;

        return (
            <span
                className={clsx('flexRow_nowrap', 'alignCenter', {
                    'moonstone-tableCellExpandable': isExpandable
                })}
                style={{marginLeft: `${marginLeft}px`}}
            >
                {isExpandable && (
                    isExpanded ? (
                        <ChevronDown className="moonstone-marginRightNano"/>
                    ) : (
                        <ChevronRight className="moonstone-marginRightNano"/>
                    )
                )}
                {children ?? '-'}
            </span>
        );
    };

    return (
        <Typography
            ref={ref}
            component={component}
            variant="body"
            className={clsx(
                'moonstone-TableCell',
                align === 'left' ? 'justifyStart' : align === 'right' ? 'justifyEnd' : 'justifyCenter',
                'flexRow',
                'alignCenter',
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                {flexFluid: typeof width === 'undefined'},
                scrollableClass,
                className
            )}
            style={{
                width,
                cursor: isExpandable ? 'pointer' : undefined,
                ...style
            }}
            aria-expanded={isExpandable ? isExpanded : undefined}
            onClick={isExpandable ? onToggleExpand : undefined}
            {...props}
        >
            {renderContent()}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';

