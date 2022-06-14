import React from 'react';
import clsx from 'clsx';
import {LayoutModuleProps} from './LayoutModule.types';
import './LayoutModule.scss';
import {Loader} from '~/components/Loader';

export const LayoutModule: React.FC<LayoutModuleProps> = ({
    navigation,
    content,
    component = 'main',
    isLoading = false,
}) => {

    const classNameProps = clsx(
        'flexFluid',
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol'
    );

    return (
        <>
            { navigation && (
                <aside className='flexCol'>
                    {navigation}
                </aside>
            )}

            { React.createElement(
                    component,
                    {
                        className: clsx('moonstone-layoutModule_main', 'flexCol', 'flexFluid'),
                    },
                    (
                        <div className={classNameProps} role-busy={isLoading ? 'true' : undefined}>
                            {isLoading ? <Loader size="big"/> : content}
                        </div>
                    )
                )
            }
        </>
    );
};

LayoutModule.displayName = 'LayoutModule';
