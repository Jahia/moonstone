import React, {useState} from 'react';
import clsx from 'clsx';
import './SecondaryNav.scss';
import {SecondaryNavProps} from './SecondaryNav.types';
import {ResizableBox} from '~/components/ResizableBox';
import {ChevronDoubleRight, ChevronDoubleLeft} from '~/icons';

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
                    'flexFluid',
                    'flexCol_nowrap',
                    'moonstone-secondaryNav',
                    {
                        'moonstone-reversed': isReversed,
                        'moonstone-secondaryNav_hidden': !isVisible
                    }
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
            <button type="button"
                    className={clsx(
                        'moonstone-secondaryNav_buttonToggle',
                        {'moonstone-secondaryNav_buttonToggle_reversed': isReversed}
                    )}
                    onClick={handleToggle}
            >
                {isVisible &&
                    <ChevronDoubleLeft/>}
                {!isVisible &&
                    <ChevronDoubleRight/>}
            </button>

            <div className={clsx('moonstone-secondaryNav_wrapper', 'flexFluid', 'flexCol_nowrap')}>
                {header}
                <div className={clsx('flexFluid', 'flexCol_nowrap')}>
                    {children}
                </div>
            </div>
        </ResizableBox>
    );
};

SecondaryNav.displayName = 'SecondaryNav';
