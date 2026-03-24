import React, {MutableRefObject, useEffect, useRef} from 'react';
import clsx from 'clsx';
import styles from './Collapsible.module.scss';
import type {ControlledCollapsibleProps} from './Collapsible.types';
import {Typography} from '~/components';
import {ChevronRight} from '~/icons/components';
import {layout} from '~/globals/css-utils.js';

const ControlledCollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ControlledCollapsibleProps> = ({
    label,
    className,
    children,
    onClick,
    id = null,
    isExpanded = false,
    ...other
}, ref) => {
    const classNameProps = clsx(
        ['moonstone-collapsible', styles['moonstone-collapsible']],
        className
    );

    const topDivRef: MutableRefObject<HTMLDivElement> = useRef();
    const buttonRef: MutableRefObject<HTMLButtonElement> = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (buttonRef.current) {
                if (entries[0].intersectionRatio === 0) {
                    buttonRef.current.classList.add('moonstone-collapsible_button_sticky', styles['moonstone-collapsible_button_sticky']);
                } else if (entries[0].intersectionRatio === 1) {
                    buttonRef.current.classList.remove('moonstone-collapsible_button_sticky', styles['moonstone-collapsible_button_sticky']);
                }
            }
        }, {threshold: [0, 1]});

        if (isExpanded) {
            const htmlDivElement = topDivRef.current;
            observer.observe(htmlDivElement);
            return () => {
                if (buttonRef.current) {
                    buttonRef.current.classList.remove('moonstone-collapsible_button_sticky', styles['moonstone-collapsible_button_sticky']);
                }

                observer.unobserve(htmlDivElement);
            };
        }
    }, [isExpanded]);

    return (
        <div
            ref={ref}
            className={classNameProps}
            {...other}
        >
            <div ref={topDivRef} className={clsx('moonstone-collapsible_topdiv', styles['moonstone-collapsible_topdiv'])}/>
            <button
                ref={buttonRef}
                type="button"
                className={clsx(
                    ['moonstone-collapsible_button', styles['moonstone-collapsible_button']],
                    isExpanded && ['moonstone-collapsible_button_expanded', styles['moonstone-collapsible_button_expanded']],
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter]
                )}
                aria-expanded={isExpanded}
                aria-controls={id}
                onClick={e => onClick(e)}
            >
                <ChevronRight
                    className={clsx(
                        ['moonstone-collapsible_icon', styles['moonstone-collapsible_icon']],
                        isExpanded && ['moonstone-collapsible_icon_expanded', styles['moonstone-collapsible_icon_expanded']]
                    )}
                    size="big"
                />
                <Typography
                    isNowrap
                    isUpperCase
                    component="span"
                    variant="heading"
                >
                    {label}
                </Typography>
            </button>
            <div id={id}
                 className={clsx(
                    isExpanded ?
                        ['moonstone-collapsible_content_expanded', styles['moonstone-collapsible_content_expanded']] :
                        ['moonstone-collapsible_content_collapsed', styles['moonstone-collapsible_content_collapsed']])}
                 hidden={!isExpanded}
            >
                {children}
            </div>
        </div>
    );
};

export const ControlledCollapsible = React.forwardRef(ControlledCollapsibleForwardRef);

ControlledCollapsible.displayName = 'ControlledCollapsible';
