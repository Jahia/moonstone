import React from 'react';
import clsx from 'clsx';
import type {LayoutModuleProps} from './LayoutModule.types';
import {Loader} from '~/components/Loader';
import {layout} from '~/globals/css-utils.js';

export const LayoutModule = React.forwardRef(({
    navigation,
    content,
    component = 'main',
    isLoading = false
}: LayoutModuleProps, ref: React.ForwardedRef<unknown>) => {
    const classNameProps = clsx(
        ['flexFluid', layout.flexFluid],
        isLoading ? ['flexCol_center', layout.flexCol_center, 'alignCenter', layout.alignCenter] : ['flexCol', layout.flexCol]
    );

    return (
        <>
            { navigation && (
                <aside className={clsx('flexCol', layout.flexCol)}>
                    {navigation}
                </aside>
            )}

            { React.createElement(
                component,
                {
                    className: clsx('moonstone-layoutModule_main', 'flexCol_nowrap', layout.flexCol_nowrap, 'flexFluid', layout.flexFluid),
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
