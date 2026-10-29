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
    i18n,
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
            <section
                aria-busy={isLoading ? 'true' : undefined}
                aria-label={i18n?.contentLabel || 'Page content'}
                className={classNameProps}
                // Lets the keyboard scroll the area when it holds no focusable element (axe scrollable-region-focusable)
                // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
            >
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
            </section>
        </div>
    );
});

LayoutContent.displayName = 'LayoutContent';
