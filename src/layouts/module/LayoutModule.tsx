import React from 'react';
import clsx from 'clsx';
import {LayoutModuleProps} from './LayoutModule.types';
import {Loader} from '~/components/Loader';

export const LayoutModule: React.FC<LayoutModuleProps> = ({
    navigation = null,
    content = null,
    isLoading = false,
    component = 'main'
}) => {

    const classNameProps = clsx(
        'flexFluid',
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol'
    );

    return (
        <>
            <div className={clsx('flexCol')}>
                {navigation}
            </div>
            {
                React.createElement(
                    component,
                    {className: clsx(classNameProps), 'role-busy': isLoading},
                    isLoading ? <Loader size="big"/> : content
                )
            }
        </>
    );
};

LayoutModule.displayName = 'LayoutModule';
