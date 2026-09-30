import clsx from 'clsx';
import React from 'react';

import { Loader } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { LayoutContentProps } from './LayoutContent.types';
import type { ForwardedRef } from 'react';

import styles from './LayoutContent.module.scss';

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
        ['flexFluid', layout.flexFluid],
        ['moonstone-layoutContent', styles['moonstone-layoutContent']],
        hasPadding && ['moonstone-layoutContent_withPadding', styles['moonstone-layoutContent_withPadding']],
        isLoading ? ['flexCol_center', layout.flexCol_center, 'alignCenter', layout.alignCenter] : ['flexCol_nowrap', layout.flexCol_nowrap],
    );

    return (
        <div
            className={clsx(
                ['flexCol', layout.flexCol],
                ['flexFluid', layout.flexFluid],
                ['moonstone-layoutContent_wrapper', styles['moonstone-layoutContent_wrapper']],
                className,
            )}
            ref={ref}
            {...props}
        >
            {header}
            <div aria-busy={isLoading ? 'true' : undefined} className={classNameProps}>
                {
                    isLoading
                        ? <Loader size="big"/>
                        : (
                                isCentered
                                    ? (
                                            <div className={clsx(
                                                ['flexCol_nowrap', layout.flexCol_nowrap],
                                                ['flexFluid', layout.flexFluid],
                                                ['moonstone-layoutContent_centered', styles['moonstone-layoutContent_centered']])}
                                            >
                                                {children ?? content}
                                            </div>
                                        )
                                    : children ?? content
                            )
                }
            </div>
        </div>
    );
});

LayoutContent.displayName = 'LayoutContent';
