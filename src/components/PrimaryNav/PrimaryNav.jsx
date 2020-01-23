import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './PrimaryNav.scss';
import {PrimaryNavContext} from './PrimaryNav.context';
import ArrowLeft from '~/tokens/icons/asset/ArrowLeft.svg';
import Menu from '~/tokens/icons/asset/Menu.svg';

const NavButton = ({isExpanded, toggleExpand, modeIcon}) => {
    if (isExpanded) {
        return (
            <button type="button" onClick={toggleExpand}>
                <ArrowLeft/>
            </button>
        );
    }

    let icon;

    if (modeIcon) {
        icon = React.cloneElement(modeIcon, {
            className: classnames(styles.modeIcon)
        });
    }

    return (
        <>
            {icon}
            <button type="button" onClick={toggleExpand}>
                <Menu/>
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
            className: classnames(styles.modeIconHeader)
        });
    }

    return (
        <>
            {headerLogo}
            <div className={classnames('flexRow_nowrap', 'alignCenter', styles.headerCaption)}>
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

export const PrimaryNav = ({headerLogo, top, bottom, headerCaption, modeIcon}) => {
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <PrimaryNavContext.Provider value={{isExpanded: isExpanded}}>
            <nav className={classnames(
                styles.primaryNav,
                {[styles.expanded]: isExpanded},
                'flexCol_nowrap'
            )}
            >
                <div className={classnames('flexRow_nowrap', styles.navHeader)}>
                    <div className={classnames(styles.navButtonContainer, 'flexRow', 'flexRow_center')}>
                        <NavButton isExpanded={isExpanded} toggleExpand={toggleExpand} modeIcon={modeIcon}/>
                    </div>
                    <div
                        className={classnames('flexCol', 'flexCol_center', 'alignCenter', 'flexFluid', styles.logoCaptionGroup)}
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
            {isExpanded && <div className={(styles.overlay)} onClick={toggleExpand}/>}
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
