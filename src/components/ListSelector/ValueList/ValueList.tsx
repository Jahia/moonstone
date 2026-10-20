import clsx from 'clsx';
import React from 'react';

import { ListItem, SearchInput } from '~/components';
import { WithoutField } from '~/components/Field/Field.context';
import { layout } from '~/globals/css-utils.js';
import { onAccessibleClick } from '~/hooks';
import { HandleDrag } from '~/icons';

import type { ValueListProps } from './ValueList.types';

import styles from './ValueList.module.scss';

export const ValueList: React.FC<ValueListProps> = ({
    values,
    setFilter,
    iconEnd,
    draggedId,
    isReadOnly,
    listClasses = [],
    listLabel,
    side,
    onClick,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
}) => {
    return (
        <div
            className={clsx(
                ['flexCol_nowrap', layout.flexCol_nowrap],
                ['moonstone-valueList_wrapper', styles['moonstone-valueList_wrapper']],
                isReadOnly && ['moonstone-valueList_wrapper_readOnly', styles['moonstone-valueList_wrapper_readOnly']],
            )}
        >
            <WithoutField>
                <SearchInput onChange={e => setFilter(e.target.value.trim())}/>
            </WithoutField>
            <ul
                aria-label={listLabel}
                className={clsx('moonstone-valueList', styles['moonstone-valueList'], ...listClasses)}
                data-list={side}
                onDragOver={e => onDragOver(e, null)}
                onDrop={e => onDrop(e, null)}
            >
                {values.map((v) => {
                    const classNames = ['moonstone-valueListItem', styles['moonstone-valueListItem']];
                    if (draggedId === v.value && v.tempItem) {
                        classNames.push('moonstone-noHoveEffect', styles['moonstone-noHoveEffect'], 'moonstone-noOpacity', styles['moonstone-noOpacity']);
                    } else if (draggedId && draggedId !== v.value) {
                        classNames.push('moonstone-noHoveEffect', styles['moonstone-noHoveEffect']);
                    } else if (draggedId && draggedId === v.value) {
                        classNames.push('moonstone-valueListItem', styles['moonstone-valueListItem'], 'moonstone-dragging', styles['moonstone-dragging']);
                    }

                    return (
                        <ListItem
                            className={clsx(...classNames)}
                            iconEnd={!isReadOnly && (side === 'left'
                                ? (
                                        <div className={clsx('moonstone-iconContainer', styles['moonstone-iconContainer'])}>
                                            { iconEnd }
                                        </div>
                                    )
                                : (
                                        <div className={clsx('moonstone-iconContainer', styles['moonstone-iconContainer'])} onClick={(e: React.MouseEvent) => onClick(e, v)}>
                                            { iconEnd }
                                        </div>
                                    ))}
                            iconStart={!isReadOnly && (
                                <div
                                    className={clsx('moonstone-iconContainer', styles['moonstone-iconContainer'])}
                                    draggable="true"
                                    onDragEnd={e => onDragEnd(e, v)}
                                    onDragStart={e => onDragStart(e, v)}
                                >
                                    <HandleDrag className={clsx('moonstone-dragHandle', styles['moonstone-dragHandle'])}/>
                                </div>
                            )}
                            key={v.label}
                            label={v.label}
                            typographyVariant="body"
                            {...onAccessibleClick({
                                onClick: (e: React.MouseEvent) => {
                                    if (!isReadOnly && side === 'left') {
                                        onClick(e, v);
                                    }
                                },
                                disabled: isReadOnly,
                                role: 'listitem',
                            })}
                            onDragOver={(e: React.DragEvent) => {
                                if (!isReadOnly) {
                                    onDragOver(e, v);
                                }
                            }}
                            onDrop={(e: React.DragEvent) => {
                                if (!isReadOnly) {
                                    onDrop(e, v);
                                }
                            }}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

ValueList.displayName = 'ValueList';
