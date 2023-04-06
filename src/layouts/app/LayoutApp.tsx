import React, {ForwardedRef} from 'react';
import clsx from 'clsx';
import './LayoutApp.scss';
import {LayoutAppProps} from './LayoutApp.types';
import {Loader} from '~/components/Loader';

export const LayoutApp = React.forwardRef(({
    navigation = null,
    content = null,
    isLoading = false
}: LayoutAppProps, ref: ForwardedRef<HTMLDivElement>) => {
    const classNameProps = clsx(
        'moonstone-layoutApp_content',
        'flexFluid',
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexRow_nowrap'
    );

    return (
        <div ref={ref} className={clsx('moonstone-layoutApp', 'flexRow_center', 'flexRow_nowrap')}>
            <div className={clsx('moonstone-layoutApp_navigation')}>
                {navigation}
            </div>
            <div className={classNameProps}>
                {isLoading ? <Loader size="big"/> : content}
            </div>
        </div>
    );
});

LayoutApp.displayName = 'LayoutApp';
