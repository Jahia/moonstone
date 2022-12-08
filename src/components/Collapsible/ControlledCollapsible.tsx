import React, {MutableRefObject, useEffect, useRef} from 'react';
import clsx from 'clsx';
import './Collapsible.scss';
import {CollapsibleProps} from './Collapsible.types';
import {Typography} from '~/components';
import {ChevronRight} from '~/icons/components';

const ControlledCollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CollapsibleProps> = ({
    label,
    className,
    children,
    onClick = () => undefined,
    id = null,
    isExpanded = false,
    ...other
}, ref) => {
    const classNameProps = clsx(
        'moonstone-collapsible',
        className
    );

    const topDivRef: MutableRefObject<HTMLDivElement> = useRef();
    const buttonRef: MutableRefObject<HTMLButtonElement> = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (buttonRef.current) {
                if (entries[0].intersectionRatio === 0) {
                    buttonRef.current.classList.add('moonstone-collapsible_button_sticky');
                } else if (entries[0].intersectionRatio === 1) {
                    buttonRef.current.classList.remove('moonstone-collapsible_button_sticky');
                }
            }
        }, {threshold: [0, 1]});

        if (isExpanded) {
            const htmlDivElement = topDivRef.current;
            observer.observe(htmlDivElement);
            return () => {
                if (buttonRef.current) {
                    buttonRef.current.classList.remove('moonstone-collapsible_button_sticky');
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
            <div ref={topDivRef} className="moonstone-collapsible_topdiv"/>
            <button
                ref={buttonRef}
                type="button"
                className={clsx('moonstone-collapsible_button', {'moonstone-collapsible_button_expanded': isExpanded}, 'flexRow', 'alignCenter')}
                aria-expanded={isExpanded}
                aria-controls={id}
                onClick={e => onClick(e)}
            >
                <ChevronRight className={clsx('moonstone-collapsible_icon', {'moonstone-collapsible_icon_expanded': isExpanded})} size="big"/>
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
                 className={clsx([isExpanded ? 'moonstone-collapsible_content_expanded' : 'moonstone-collapsible_content_collapsed'])}
                 hidden={!isExpanded}
            >
                {children}
            </div>
        </div>
    );
};

export const ControlledCollapsible = React.forwardRef(ControlledCollapsibleForwardRef);

ControlledCollapsible.displayName = 'ControlledCollapsible';
