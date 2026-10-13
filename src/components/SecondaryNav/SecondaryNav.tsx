import clsx from 'clsx';
import React, { useId, useState } from 'react';

import { ResizableBox } from '~/components/ResizableBox';
import { layout } from '~/globals/css-utils.js';
import { ChevronDoubleLeft, ChevronDoubleRight } from '~/icons';

import type { SecondaryNavProps } from './SecondaryNav.types';

import styles from './SecondaryNav.module.scss';

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
    header,
    children,
    isDefaultVisible = true,
    isReversed = true,
    onToggled = () => undefined,
    className,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(isDefaultVisible);
    const wrapperId = useId();

    const handleToggle = (e: React.MouseEvent) => {
        setIsVisible(prevState => !prevState);
        onToggled(e);
    };

    return (
        <ResizableBox
            aria-label="Secondary navigation"
            className={
                clsx(
                    className,
                    ['flexFluid', layout.flexFluid],
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                    ['moonstone-secondaryNav', styles['moonstone-secondaryNav']],
                    isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                    !isVisible && ['moonstone-secondaryNav_hidden', styles['moonstone-secondaryNav_hidden']],
                )
            }
            defaultSize={{
                height: '0%',
                width: '300px',
            }}
            enable={['right']}
            maxWidth="900"
            minWidth={isVisible ? 300 : 0}
            size={isVisible
                ? null
                : {
                        height: '0%',
                        width: 0,
                    }}
            {...props}
        >
            <button
                aria-controls={wrapperId}
                aria-expanded={isVisible}
                aria-label="Toggle secondary navigation"
                className={clsx(
                    ['moonstone-secondaryNav_buttonToggle', styles['moonstone-secondaryNav_buttonToggle']],
                    isReversed && ['moonstone-secondaryNav_buttonToggle_reversed', styles['moonstone-secondaryNav_buttonToggle_reversed']],
                )}
                type="button"
                onClick={handleToggle}
            >
                {isVisible
                    && <ChevronDoubleLeft/>}
                {!isVisible
                    && <ChevronDoubleRight/>}
            </button>

            <div
                className={clsx(
                    ['moonstone-secondaryNav_wrapper', styles['moonstone-secondaryNav_wrapper']],
                    ['flexFluid', layout.flexFluid],
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                )}
                id={wrapperId}
            >
                {header}
                <div className={clsx('flexFluid', layout.flexFluid, 'flexCol_nowrap', layout.flexCol_nowrap)}>
                    {children}
                </div>
            </div>
        </ResizableBox>
    );
};

SecondaryNav.displayName = 'SecondaryNav';
