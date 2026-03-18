import React, {useContext} from 'react';
import clsx from 'clsx';
import styles from './PrimaryNavItemsGroup.module.scss';
import {PrimaryNavItemsGroupProps} from './PrimaryNavItemsGroup.types';
import {PrimaryNavContext} from '../PrimaryNav.context';
import {Separator} from '~/components/Separator';

export const PrimaryNavItemsGroup: React.FC<PrimaryNavItemsGroupProps> = ({
    isDisplayedWhenCollapsed = true,
    children,
    ...props
}) => {
    const primaryNavContext = useContext(PrimaryNavContext);

    if (!primaryNavContext.isExpanded && !isDisplayedWhenCollapsed) {
        return null;
    }

    return (
        <>
            <li className={clsx('moonstone-primaryNavItemsGroup', styles.primaryNavItemsGroup)}>
            </li>
            <li className={clsx('moonstone-primaryNavItemsGroup', styles.primaryNavItemsGroup)} {...props}>
                <ul>
                    {children}
                </ul>
            </li>
        </>
    );
};

PrimaryNavItemsGroup.displayName = 'PrimaryNavItemsGroup';
