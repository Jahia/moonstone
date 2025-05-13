import React from 'react';
import {ListItem, SearchInput} from '~/components';
import {HandleDrag} from '~/icons';
import clsx from 'clsx';
import {ValueListProps} from './ValueList.types';
import './ValueList.scss';
import {onAccessibleClick} from '~/hooks/useAccessibleClick';

export const ValueList: React.FC<ValueListProps> = ({
    values,
    setFilter,
    iconEnd,
    draggedId,
    isReadOnly,
    listClasses = [],
    role,
    onClick,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop
}) => {
    return (
        <div className="flexCol_nowrap moonstone-valueList_wrapper">
            <SearchInput onChange={e => setFilter(e.target.value.trim())}/>
            <ul className={clsx('moonstone-valueList', ...listClasses)} onDragOver={e => onDragOver(e, null)} onDrop={e => onDrop(e, null)}>
                {values.map(v => {
                        const classNames = ['moonstone-valueListItem'];
                        if (draggedId === v.value && v.tempItem) {
                            classNames.push('moonstone-noHoveEffect', 'moonstone-noOpacity');
                        } else if (draggedId && draggedId !== v.value) {
                            classNames.push('moonstone-noHoveEffect');
                        } else if (draggedId && draggedId === v.value) {
                            classNames.push('moonstone-valueListItem', 'moonstone-dragging');
                        }

                        return (
                            <ListItem key={v.label}
                                      role={role}
                                      iconStart={!isReadOnly && (
                                          <div className="moonstone-iconContainer"
                                               draggable="true"
                                               onDragStart={e => onDragStart(e, v)}
                                               onDragEnd={e => onDragEnd(e, v)}
                                          >
                                              <HandleDrag className="moonstone-dragHandle"/>
                                          </div>
                                      )}
                                      iconEnd={!isReadOnly && (role === 'left-list' ? (
                                          <div className="moonstone-iconContainer">
                                              { iconEnd }
                                          </div>
                                      ) : (
                                          <div className="moonstone-iconContainer" onClick={(e:React.MouseEvent) => onClick(e, v)}>
                                              { iconEnd }
                                          </div>
                                      ))}
                                      className={clsx(...classNames)}
                                      typographyVariant="body"
                                      label={v.label}
                                      {...onAccessibleClick((e:React.MouseEvent) => {
                                        if (!isReadOnly && role === 'left-list') {
                                            onClick(e, v);
                                        }
                                    }, isReadOnly, role)}
                                      onDragOver={(e:React.DragEvent) => {
                                          if (!isReadOnly) {
                                              onDragOver(e, v);
                                          }
                                      }}
                                      onDrop={(e:React.DragEvent) => {
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
