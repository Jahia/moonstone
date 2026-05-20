import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './SecondaryNav.module.scss';
import type {SecondaryNavProps} from './SecondaryNav.types';
import {ResizableBox} from '~/components/ResizableBox';
import {ChevronDoubleRight, ChevronDoubleLeft} from '~/icons';
import {layout} from '~/globals/css-utils.js';

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

    const handleToggle = (e: React.MouseEvent) => {
        setIsVisible(prevState => !prevState);
        onToggled(e);
    };

    return (
        <ResizableBox
            aria-expanded={isVisible}
            className={
                clsx(
                    className,
                    ['flexFluid', layout.flexFluid],
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                    ['moonstone-secondaryNav', styles['moonstone-secondaryNav']],
                    isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                    !isVisible && ['moonstone-secondaryNav_hidden', styles['moonstone-secondaryNav_hidden']]
                )
            }
            enable={['right']}
            size={isVisible ? null : {height: '0%', width: 0}}
            minWidth={isVisible ? 300 : 0}
            maxWidth="900"
            defaultSize={{
                height: '0%',
                width: '300px'
            }}
            {...props}
        >
            <button
                    aria-controls="moonstone-secondaryNav_wrapper"
                    type="button"
                    aria-label="Toggle secondary navigation"
                    className={clsx(
                        ['moonstone-secondaryNav_buttonToggle', styles['moonstone-secondaryNav_buttonToggle']],
                        isReversed && ['moonstone-secondaryNav_buttonToggle_reversed', styles['moonstone-secondaryNav_buttonToggle_reversed']]
                    )}
                    onClick={handleToggle}
            >
                {isVisible &&
                    <ChevronDoubleLeft/>}
                {!isVisible &&
                    <ChevronDoubleRight/>}
            </button>

            <div
                id="moonstone-secondaryNav_wrapper"
                className={clsx(
                    ['moonstone-secondaryNav_wrapper', styles['moonstone-secondaryNav_wrapper']],
                    ['flexFluid', layout.flexFluid],
                    ['flexCol_nowrap', layout.flexCol_nowrap]
                )}
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
