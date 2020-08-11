import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import './PrimaryNav.scss';
import {PrimaryNavContext} from './PrimaryNav.context';
import {Menu, ArrowLeft} from '~/icons';

const NavButton = ({isExpanded, toggleExpand, modeIcon}) => {
    if (isExpanded) {
        return (
            <button
                className={classnames('moonstone-primaryNav_button')}
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
            className: classnames('moonstone-primaryNav_modeIcon')
        });
    }

    return (
        <>
            {icon}
            <button
                className={classnames('moonstone-primaryNav_button')}
                type="button"
                role="primary-nav-control"
                onClick={toggleExpand}
            >
                <Menu size="big"/>
            </button>
        </>
    );
};

NavButton.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    toggleExpand: PropTypes.func.isRequired,
    modeIcon: PropTypes.element
};

const NavHeader = ({headerCaption, modeIcon, headerLogo}) => {
    let icon;

    if (modeIcon) {
        icon = React.cloneElement(modeIcon, {
            className: classnames('moonstone-primaryNav_modeIconHeader')
        });
    }

    return (
        <>
            {headerLogo}
            <div className={classnames('flexRow_nowrap', 'alignCenter', 'moonstone-primaryNav_headerCaption')}>
                {icon}{headerCaption}
            </div>
        </>
    );
};

NavHeader.propTypes = {
    headerCaption: PropTypes.string.isRequired,
    modeIcon: PropTypes.element,
    headerLogo: PropTypes.node
};

export const PrimaryNav = ({headerLogo, top, bottom, headerCaption, modeIcon, ...props}) => {
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <PrimaryNavContext.Provider value={{isExpanded: isExpanded, collapse: () => setExpanded(false)}}>
            <nav {...props}
                 aria-expanded={isExpanded}
                 className={classnames(
                     'moonstone-primaryNav',
                     {expanded: isExpanded},
                    'flexCol_nowrap'
                )}
            >
                <div className={classnames('flexRow_nowrap', 'moonstone-primaryNav_header')}>
                    <div className={classnames('moonstone-primaryNav_buttonContainer', 'flexRow_center', 'alignCenter')}>
                        <NavButton isExpanded={isExpanded} toggleExpand={toggleExpand} modeIcon={modeIcon}/>
                    </div>
                    <div
                        className={classnames(
                            'flexCol_center',
                            'alignCenter',
                            'flexFluid',
                            'moonstone-primaryNav_logoCaptionGroup'
                        )}
                    >
                        <NavHeader headerCaption={headerCaption} modeIcon={modeIcon} headerLogo={headerLogo}/>
                    </div>
                </div>

                <ul className={classnames('flexCol', 'flexFluid')}>
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

PrimaryNav.defaultProps = {
    headerLogo: '',
    headerCaption: '',
    top: null,
    bottom: null
};

PrimaryNav.propTypes = {
    /**
     * Image of logo application
     */
    headerLogo: PropTypes.node,

    /**
     * Image for application mode
     */
    modeIcon: PropTypes.element,

    /**
     * Application's environment
     */
    headerCaption: PropTypes.string,

    /**
     * Primary nav groups displayed at the top
     */
    top: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),

    /**
     * Primary nav groups displayed at the bottom
     */
    bottom: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

PrimaryNav.displayName = 'PrimaryNav';
