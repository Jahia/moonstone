import React from 'react';
import clsx from 'clsx';
import type {LayoutModuleProps} from './LayoutModule.types';
import './LayoutModule.scss';
import {Loader} from '~/components/Loader';

export const LayoutModule = React.forwardRef(({
    navigation,
    content,
    component = 'main',
    isLoading = false
}: LayoutModuleProps, ref: React.ForwardedRef<unknown>) => {
    const classNameProps = clsx(
        'flexFluid',
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol'
    );

    return (
        <>
            { navigation && (
                <aside className="flexCol">
                    {navigation}
                </aside>
            )}

            { React.createElement(
                component,
                {
                    className: clsx('moonstone-layoutModule_main', 'flexCol_nowrap', 'flexFluid'),
                    ref
                },
                (
                    <div className={classNameProps} aria-busy={isLoading ? 'true' : undefined}>
                        {isLoading ? <Loader size="big"/> : content}
                    </div>
                )
            )}
        </>
    );
});

LayoutModule.displayName = 'LayoutModule';
