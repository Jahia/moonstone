import React from 'react';
import clsx from 'clsx';
import styles from './LayoutApp.module.scss';
import {LayoutAppProps} from './LayoutApp.types';
import {Loader} from '~/components/Loader';
import {layout} from '~/globals/css-utils.js';

export const LayoutApp = React.forwardRef(({
    navigation = null,
    content = null,
    isLoading = false
}: LayoutAppProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const classNameProps = clsx(
        'moonstone-layoutApp_content',
        ['flexFluid', layout.flexFluid],
        isLoading ? ['flexCol_center', layout.flexCol_center, 'alignCenter', layout.alignCenter] : ['flexRow_nowrap', layout.flexRow_nowrap]
    );

    return (
        <div
            ref={ref}
            className={clsx(
                ['moonstone-layoutApp', styles['moonstone-layoutApp']],
                ['flexRow_center', layout.flexRow_center],
                ['flexRow_nowrap', layout.flexRow_nowrap]
            )}
        >
            <div className={clsx(['moonstone-layoutApp_navigation', styles['moonstone-layoutApp_navigation']])}>
                {navigation}
            </div>
            <div className={classNameProps}>
                {isLoading ? <Loader size="big"/> : content}
            </div>
        </div>
    );
});

LayoutApp.displayName = 'LayoutApp';
