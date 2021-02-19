import React from 'react';
import clsx from 'clsx';
import './LayoutApp.scss';
import {LayoutAppProps} from './LayoutApp.types';

export const LayoutApp: React.FC<LayoutAppProps> = ({navigation = null, content = null}) => {
    return (
        <div className={clsx('moonstone-layoutApp', 'flexRow_center', 'flexRow_nowrap')}>
            <div className={clsx('moonstone-slotNavigation')}>
                {navigation}
            </div>
            <div className={clsx('flexFluid', 'flexRow_nowrap')}>
                {content}
            </div>
        </div>
    );
};

LayoutApp.displayName = 'LayoutApp';
