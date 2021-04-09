import React from 'react';
import clsx from 'clsx';
import {LayoutModuleProps} from './LayoutModule.types';
import './LayoutModule.scss';
import {Loader} from '~/components/Loader';

export const LayoutModule: React.FC<LayoutModuleProps> = ({
    navigation = null,
    content = null,
    component = 'main',
    isLoading = false,
}) => {

    const classNameProps = clsx(
        'flexFluid',
        // 'moonstone-layoutModule_content',
        // {'moonstone-layoutModule_content_withNoPadding': !hasPadding},
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
                    {
                        className: clsx('moonstone-layoutModule_main', 'flexCol', 'flexFluid'),
                    },
                    (
                        <div className={clsx(classNameProps)} role-busy={isLoading ? 'true' : undefined}>
                            {isLoading ? <Loader size="big"/> : content}
                        </div>
                    )
                )
            }
        </>
    );
};

LayoutModule.displayName = 'LayoutModule';
