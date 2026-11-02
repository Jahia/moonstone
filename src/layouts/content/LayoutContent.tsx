import clsx from 'clsx';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { Loader } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { LayoutContentProps } from './LayoutContent.types';
import type { ForwardedRef } from 'react';

import styles from './LayoutContent.module.scss';

// The elements Tab reaches
const FOCUSABLE = ':is(a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]):not(:disabled, [tabindex="-1"])';

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
    // A Tab stop only while the area holds no focusable element: otherwise a click inside it would move the focus to the area,
    // and the next Tab would start from its top
    const [isTabStop, setIsTabStop] = useState(true);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) {
            return;
        }

        const update = () => setIsTabStop(!section.querySelector(FOCUSABLE));
        update();
        const observer = new MutationObserver(update);
        observer.observe(section, {
            childList: true,
            subtree: true,
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
                // Lets the keyboard scroll the area when it holds no focusable element (axe scrollable-region-focusable)
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
