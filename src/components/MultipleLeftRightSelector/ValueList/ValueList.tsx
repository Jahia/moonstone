import React, {useState} from 'react';
import {ListItem, Typography, Input} from '~/components';
import {ChevronRight, Close, HandleDrag} from '~/icons';
import styles from './ValueList.scss';
import cslx from 'clsx';
import {FAKE_VALUE} from '../MultipleLeftRightSelector';
import {ValueListProps, Value} from './ValueList.types';

export const ValueList: React.FC<ValueListProps> = ({
    values,
    onMove,
    orientation,
    draggedId,
    iconStartProps,
    listItemProps = () => ({})
}) => {
    const [filter, setFilter] = useState(null);

    const iconProp = (v: Value) => {
        if (orientation === 'left') {
            return {
                iconEnd: (
                    <div className={styles.iconContainer}>
                        <ChevronRight className={styles.displayNone}
                                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onMove([v.value]);
                                           }}/>
                    </div>
                ),
                iconStart: iconStartProps && (
                    <div className={styles.iconContainer} {...iconStartProps(v)}>
                        <HandleDrag/>
                    </div>
                )
            };
        }

        return {
            iconEnd: (
                <div className={styles.iconContainer}>
                    <Close className={styles.displayNone}
                           onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onMove([v.value]);
                    }}/>
                </div>
            ),
            iconStart: iconStartProps && (
                <div className={styles.iconContainer} {...iconStartProps(v)}>
                    <HandleDrag/>
                </div>
            )
        };
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.listHolder}>
                <Input variant="search"
                       onChange={e => setFilter(e.target.value.trim())}
                />
                <ul className={styles.valueList}>
                    {values.filter(v => ((!filter || filter === '') || v.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1)).map((v, index) => {
                        let className;

                        if (v.value === FAKE_VALUE) {
                            className = cslx(styles.valueListItem, styles.noHoveEffect, styles.noOpacity);
                        } else {
                            className = draggedId && draggedId !== v.value ? cslx(styles.valueListItem, styles.noHoveEffect) : cslx(styles.valueListItem);
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
            <div className={styles.captionContainer}>
                {orientation === 'right' &&
                    <Typography variant="caption" weight="semiBold">
                        {values.length > 0 && `Selected ${values.length} items`}
                    </Typography>}
            </div>
        </div>
    );
};

ValueList.displayName = 'ValueList';
