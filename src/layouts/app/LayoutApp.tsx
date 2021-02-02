import React from 'react';
import classnames from 'clsx';
import './LayoutApp.scss';
import {LayoutAppProps} from './LayoutApp.types';

export const LayoutApp: React.FC<LayoutAppProps> = ({navigation = null, content = null}) => {
    return (
        <div className={classnames('moonstone-layoutApp', 'flexRow_center', 'flexRow_nowrap')}>
            <div className={classnames('moonstone-slotNavigation')}>
                {navigation}
            </div>
            <div className={classnames('flexFluid', 'flexRow_nowrap')}>
                {content}
            </div>
        </div>
    );
};

LayoutApp.displayName = 'LayoutApp';
