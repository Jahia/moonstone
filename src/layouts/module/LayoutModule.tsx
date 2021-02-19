import React from 'react';
import classnames from 'clsx';
import {LayoutModuleProps} from './LayoutModule.types';
import {Loader} from '~/components/Loader';

export const LayoutModule: React.FC<LayoutModuleProps> = ({
    navigation = null,
    content = null,
    isLoading = false,
    component = 'main'
}) => {

    const classNameProps = classnames(
        'flexFluid',
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol'
    );

    return (
        <>
            <div className={classnames('flexCol')}>
                {navigation}
            </div>
            {
                React.createElement(
                    component,
                    {className: classnames(classNameProps), 'role-busy': isLoading},
                    isLoading ? <Loader size="big"/> : content
                )
            }
        </>
    );
};

LayoutModule.displayName = 'LayoutModule';
