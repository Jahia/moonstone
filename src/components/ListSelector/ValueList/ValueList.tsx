import React, {useState} from 'react';
import {ListItem, Typography, SearchInput, FAKE_VALUE} from '~/components';
import {ChevronRight, Close, HandleDrag} from '~/icons';
import cslx from 'clsx';
import {ValueListProps, Value} from './ValueList.types';
import './ValueList.scss';
import clsx from 'clsx';

export const ValueList: React.FC<ValueListProps> = ({
    label = {
        selected: 'Selected',
        items: 'items'
    },
    values,
    onMove,
    orientation,
    draggedId,
    isReadOnly,
    iconStartProps = () => ({}),
    listItemProps = () => ({})
}) => {
    const [filter, setFilter] = useState(null);

    const iconProp = (v: Value) => {
        const filterProp = filter ? {} : iconStartProps(v);

        if (orientation === 'left') {
            return {
                iconEnd: isReadOnly ? null : (
                    <div className="moonstone-iconContainer">
                        <ChevronRight className="moonstone-displayNone"/>
                    </div>
                ),
                iconStart: isReadOnly ? null : (
                    <div className="moonstone-iconContainer" {...filterProp}>
                        {!filter && <HandleDrag/>}
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
                    {!filter && <HandleDrag/>}
                </div>
            )
        };
    };

    return (
        <div className={cslx('flexCol', 'moonstone-wrapper')}>
            <div className={clsx('flexCol', 'moonstone-listHolder')}>
                <SearchInput onChange={e => setFilter(e.target.value.trim())}/>
                <ul className="valueList">
                    {values.filter(v => ((!filter || filter === '') || v.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1)).map((v, index) => {
                        let className;

                        if (v.value === FAKE_VALUE) {
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
            <div className="captionContainer">
                {orientation === 'right' &&
                    <Typography variant="caption" weight="semiBold">
                        {values.length > 0 && `${label.selected} ${values.length} ${label.items}`}
                    </Typography>}
            </div>
        </div>
    );
};

ValueList.displayName = 'ValueList';
