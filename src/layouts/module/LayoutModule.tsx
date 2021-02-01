import React from 'react';
import classnames from 'clsx';
import {LayoutModuleProps} from './LayoutModule.types';

export const LayoutModule: React.FC<LayoutModuleProps> = ({
    navigation = null,
    content = null,
    component = 'main'
}) => {
    return (
        <>
            <div className={classnames('flexCol')}>
                {navigation}
            </div>
            {
                React.createElement(
                    component,
                    {className: classnames('flexFluid', 'flexCol')},
                    content
                )
            }
        </>
    );
};

LayoutModule.displayName = 'LayoutModule';
