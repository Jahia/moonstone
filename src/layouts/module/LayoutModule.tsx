import React from 'react';
import clsx from 'clsx';
import {LayoutModuleProps} from './LayoutModule.types';
import './LayoutModule.scss';
import {Loader} from '~/components/Loader';

export const LayoutModule: React.FC<LayoutModuleProps> = ({
    navigation = null,
    header = null,
    content = null,
    component = 'main',
    isLoading = false,
    isCentered = false,
    hasPadding = true
}) => {

    const classNameProps = clsx(
        'flexFluid',
        'moonstone-layoutModule_content',
        {'moonstone-layoutModule_content_withNoPadding': !hasPadding},
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
                        <>
                            {header}
                            <div className={clsx(classNameProps)} role-busy={isLoading ? 'true' : undefined}>
                                <div className={clsx({'moonstone-layoutModule_content_centered': isCentered})}>
                                    {isLoading ? <Loader size="big"/> : content}
                                </div>
                            </div>
                        </>
                    )
                )
            }
        </>
    );
};

LayoutModule.displayName = 'LayoutModule';
