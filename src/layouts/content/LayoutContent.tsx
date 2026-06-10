import React, {ForwardedRef} from 'react';
import clsx from 'clsx';
import type {LayoutContentProps} from './LayoutContent.types';

import {Loader} from '~/components';
import {layout} from '~/globals/css-utils.js';
import styles from './LayoutContent.module.scss';

export const LayoutContent = React.forwardRef(({
    header,
    content,
    drawer,
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
        isLoading ? ['flexCol_center', layout.flexCol_center, 'alignCenter', layout.alignCenter] : ['flexCol_nowrap', layout.flexCol_nowrap]
    );

    const mainContent = (
        <div className={classNameProps} aria-busy={isLoading ? 'true' : undefined}>
            {isLoading ? (
                <Loader size="big"/>
            ) : isCentered ? (
                <div className={clsx(
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                    ['flexFluid', layout.flexFluid],
                    ['moonstone-layoutContent_centered', styles['moonstone-layoutContent_centered']]
                )}
                >
                    {children ?? content}
                </div>
            ) : children ?? content}
        </div>
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
            {drawer ? (
                <div className={clsx(
                    ['flexRow_nowrap', layout.flexRow_nowrap],
                    ['flexFluid', layout.flexFluid],
                    styles['moonstone-layoutContent_body']
                )}
                >
                    {mainContent}
                    {drawer}
                </div>
            ) : mainContent}
        </div>
    );
});

LayoutContent.displayName = 'LayoutContent';
