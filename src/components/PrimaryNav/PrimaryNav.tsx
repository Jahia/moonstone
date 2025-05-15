import React, {useState} from 'react';
import clsx from 'clsx';
import './PrimaryNav.scss';
import type {PrimaryNavButtonProps, PrimaryNavHeaderProps, PrimaryNavProps} from './PrimaryNav.types';
import {PrimaryNavContext} from './PrimaryNav.context';
import {MenuIcon, ArrowLeft} from '~/icons';

const NavButton: React.FC<PrimaryNavButtonProps> = ({isExpanded, toggleExpand, modeIcon}) => {
    return (
        <>
            {!isExpanded && modeIcon && (
                <modeIcon.type
                    {...modeIcon.props}
                    className={clsx(modeIcon.props.className, 'moonstone-primaryNav_modeIcon')}
                />
            )}
            <button
                className={clsx('moonstone-primaryNav_button')}
                type="button"
                data-testid="primaryNavMenuButton"
                aria-label="Toggle primary navigation"
                onClick={toggleExpand}
            >
                {isExpanded ? <ArrowLeft size="big"/> : <MenuIcon size="big"/>}
            </button>
        </>
    )
}

const NavHeader: React.FC<PrimaryNavHeaderProps> = ({headerCaption, modeIcon, headerLogo}) => {
    return (
        <>
            {headerLogo}
            <div className={clsx('flexRow_nowrap', 'alignCenter', 'moonstone-primaryNav_headerCaption')}>
                {modeIcon && (
                    <modeIcon.type
                        {...modeIcon.props}
                        className={clsx(modeIcon.props.className, 'moonstone-primaryNav_modeIconHeader')}
                    />
                )}
                {headerCaption}
            </div>
        </>
    );
};

export const PrimaryNav: React.FC<PrimaryNavProps> = ({
    headerLogo = '',
    top = null,
    bottom = null,
    headerCaption = '',
    modeIcon,
    ...props
}) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    return (
        <PrimaryNavContext.Provider value={{isExpanded, collapse: () => setExpanded(false)}}>
            <nav
                {...props}
                aria-expanded={isExpanded}
                className={clsx(
                    'moonstone-primaryNav',
                    {'moonstone-expanded': isExpanded},
                    'flexCol_nowrap'
                )}
            >
                <div className={clsx('flexRow_nowrap', 'moonstone-primaryNav_header')}>
                    <div className={clsx('moonstone-primaryNav_buttonContainer', 'flexRow_center', 'alignCenter')}>
                        <NavButton isExpanded={isExpanded} toggleExpand={toggleExpand} modeIcon={modeIcon}/>
                    </div>
                    <div
                        className={clsx(
                            'flexCol_center',
                            'alignCenter',
                            'flexFluid',
                            'moonstone-primaryNav_logoCaptionGroup'
                        )}
                    >
                        <NavHeader headerCaption={headerCaption} modeIcon={modeIcon} headerLogo={headerLogo}/>
                    </div>
                </div>

                <ul className={clsx('flexCol_nowrap', 'flexFluid', 'moonstone-primaryNav_top')}>
                    {top}
                </ul>

                <ul>
                    {bottom}
                </ul>
            </nav>
            {isExpanded && <div className="moonstone-primaryNav_overlay" onClick={toggleExpand}/>}
        </PrimaryNavContext.Provider>
    );
};

PrimaryNav.displayName = 'PrimaryNav';
