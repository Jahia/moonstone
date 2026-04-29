import React, {ForwardedRef} from 'react';
import clsx from 'clsx';
import type {LayoutContentProps} from './LayoutContent.types';
import styles from './LayoutContent.module.scss';

import {Loader} from '~/components/Loader';
import {layout, reset} from '~/globals/css-utils.js';

export const LayoutContent = React.forwardRef(({
    header,
    content,
    hasPadding = true,
    isLoading = false,
    isCentered = false,
    className,
    children,
    ...props
}: LayoutContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const classNameProps = clsx(
        reset,
        ['flexFluid', layout.flexFluid],
        ['moonstone-layoutContent', styles['moonstone-layoutContent']],
        hasPadding && ['moonstone-layoutContent_withPadding', styles['moonstone-layoutContent_withPadding']],
        isLoading ? ['flexCol_center', layout.flexCol_center, 'alignCenter', layout.alignCenter] : ['flexCol_nowrap', layout.flexCol_nowrap]
    );

    return (
        <div
            ref={ref}
            className={clsx(
                ['flexCol', layout.flexCol],
                ['flexFluid', layout.flexFluid],
                ['moonstone-layoutContent_wrapper', styles['moonstone-layoutContent_wrapper']],
                className
            )}
            {...props}
        >
            {header}
            <div className={classNameProps} aria-busy={isLoading ? 'true' : undefined}>
                {
                    isLoading ?
                        <Loader size="big"/> :
                    (
                        isCentered ?
                        (
                            <div className={clsx(
                                ['flexCol_nowrap', layout.flexCol_nowrap],
                                ['flexFluid', layout.flexFluid],
                                ['moonstone-layoutContent_centered', styles['moonstone-layoutContent_centered']])}
                            >
                                {children ?? content}
                            </div>
                        ) :
                        children ?? content
                      )
                }
            </div>
        </div>
    );
});

LayoutContent.displayName = 'LayoutContent';
