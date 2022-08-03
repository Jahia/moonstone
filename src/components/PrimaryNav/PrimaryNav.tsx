import React, {useState} from 'react';
import clsx from 'clsx';
import './PrimaryNav.scss';
import {NavButtonProps, NavHeaderProps, PrimaryNavProps} from './PrimaryNav.types';
import {PrimaryNavContext} from './PrimaryNav.context';
import {MenuIcon, ArrowLeft} from '~/icons';

const NavButton: React.FC<NavButtonProps> = ({isExpanded, toggleExpand, modeIcon}) => {
    if (isExpanded) {
        return (
            <button
                className={clsx('moonstone-primaryNav_button')}
                type="button"
                role="primary-nav-control"
                onClick={toggleExpand}
            >
                <ArrowLeft size="big"/>
            </button>
        );
    }

    let icon;

    if (modeIcon) {
        icon = React.cloneElement(modeIcon, {
            className: clsx('moonstone-primaryNav_modeIcon')
        });
    }

    return (
        <>
            {icon}
            <button
                className={clsx('moonstone-primaryNav_button')}
                type="button"
                role="primary-nav-control"
                onClick={toggleExpand}
            >
                <MenuIcon size="big"/>
            </button>
        </>
    );
};

const NavHeader: React.FC<NavHeaderProps> = ({headerCaption, modeIcon, headerLogo}) => {
    let icon;

    if (modeIcon) {
        icon = React.cloneElement(modeIcon, {
            className: clsx('moonstone-primaryNav_modeIconHeader')
        });
    }

    return (
        <>
            {headerLogo}
            <div className={clsx('flexRow_nowrap', 'alignCenter', 'moonstone-primaryNav_headerCaption')}>
                {icon}{headerCaption}
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

                <ul className={clsx('flexCol', 'flexFluid')}>
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
