import React from 'react';
import {ListItem, SearchInput} from '~/components';
import {ChevronRight, Close, HandleDrag} from '~/icons';
import cslx from 'clsx';
import {ValueListProps, Value} from './ValueList.types';
import './ValueList.scss';
import clsx from 'clsx';

export const ValueList: React.FC<ValueListProps> = ({
    values,
    filter,
    setFilter,
    onMove,
    orientation,
    draggedId,
    isReadOnly,
    iconStartProps = () => ({}),
    listItemProps = () => ({}),
    listProps = () => ({})
}) => {
    const iconProp = (v: Value) => {
        const filterProp = iconStartProps(v);

        if (orientation === 'left') {
            return {
                iconEnd: isReadOnly ? null : (
                    <div className="moonstone-iconContainer">
                        <ChevronRight className="moonstone-displayNone"/>
                    </div>
                ),
                iconStart: isReadOnly ? null : (
                    <div className="moonstone-iconContainer" {...filterProp}>
                        <HandleDrag className="moonstone-dragHandle"/>
                    </div>
                )
            };
        }

        return {
            iconEnd: isReadOnly ? null : (
                <div className="moonstone-iconContainer">
                    <Close className="moonstone-displayNone"
                           onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onMove([v.value]);
                    }}/>
                </div>
            ),
            iconStart: isReadOnly ? null : (
                <div className="moonstone-iconContainer" {...filterProp}>
                    {!filter && <HandleDrag className="moonstone-dragHandle"/>}
                </div>
            )
        };
    };

    return (
        <div className={cslx('flexCol', 'moonstone-wrapper')}>
            <div className={clsx('flexCol', 'moonstone-listHolder')}>
                <SearchInput onChange={e => setFilter(e.target.value.trim())}/>
                <ul className={values?.find(v => v.tempItem) ? clsx('moonstone-valueList', 'moonstone-draggedOver') : 'moonstone-valueList'} {...listProps(values)}>
                    {values.map((v, index) => {
                        let className;

                        if (v.tempItem) {
                            className = cslx('moonstone-valueListItem', 'moonstone-noHoveEffect', 'moonstone-noOpacity');
                        } else {
                            className = draggedId && draggedId !== v.value ? cslx('moonstone-valueListItem', 'moonstone-noHoveEffect') : cslx('moonstone-valueListItem');
                        }

                        return (
                            <ListItem key={v.label}
                                      className={className}
                                      typographyVariant="body"
                                      label={v.label}
                                      {...iconProp({...v, index: index})}
                                      {...listItemProps({...v, index: index})}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

ValueList.displayName = 'ValueList';
