import React, {ForwardedRef} from 'react';
import clsx from 'clsx';
import type {LayoutContentProps} from './LayoutContent.types';
import './LayoutContent.scss';

import {Loader} from '~/components/Loader';

export const LayoutContent = React.forwardRef(({
    header,
    content,
    hasPadding = true,
    isLoading = false,
    isCentered = false,
    className,
    ...props
}: LayoutContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const classNameProps = clsx(
        'flexFluid',
        'moonstone-layoutContent',
        {'moonstone-layoutContent_withPadding': hasPadding},
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol_nowrap'
    );

    return (
        <div ref={ref} className={clsx('flexCol', 'flexFluid', 'moonstone-layoutContent_wrapper', className)} {...props}>
            {header}
            <div className={classNameProps} aria-busy={isLoading ? 'true' : undefined}>
                {
                    isLoading ?
                        <Loader size="big"/> :
                    (
                        isCentered ?
                        (
                            <div className="flexCol_nowrap flexFluid moonstone-layoutContent_centered">
                                {content}
                            </div>
                        ) :
                        content
                      )
                }
            </div>
        </div>
    );
});

LayoutContent.displayName = 'LayoutContent';
