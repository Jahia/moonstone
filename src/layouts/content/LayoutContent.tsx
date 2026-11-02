import clsx from 'clsx';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { Loader } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { FOCUSABLE } from '~/utils/helpers';

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
    const sectionRef = useRef<HTMLElement>(null);
    const [isTabStop, setIsTabStop] = useState(true);

    useLayoutEffect(() => {
        const section = sectionRef.current!;
        const update = () => setIsTabStop(!section.querySelector(FOCUSABLE));
        update();
        const observer = new MutationObserver(update);
        observer.observe(section, {
            childList: true,
            subtree: true,
            attributeFilter: ['disabled'],
        });
        return () => observer.disconnect();
    }, []);

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
                ref={sectionRef}
                // A Tab stop only while nothing inside is focusable (axe scrollable-region-focusable): otherwise a click inside
                // focuses the area and the next Tab restarts from its top
                // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={isTabStop ? 0 : undefined}
            >
                {
                    isLoading
                        ? <Loader i18n={{ loadingLabel: i18n?.loadingLabel }} size="big"/>
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
