import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './PrimaryNav.scss';
import {PrimaryNavContext} from './PrimaryNav.context';
// TODO resolve this issue here
import Menu from '../../../dist/icons/Menu';
import ArrowLeft from '../../../dist/icons/ArrowLeft';

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

const NavHeader = ({isExpanded, headerCaption, modeIcon}) => {
    if (isExpanded) {
        let icon;

        if (modeIcon) {
            icon = React.cloneElement(modeIcon, {
                className: classnames(styles.modeIconHeader)
            });
        }

        return (
            <>
                <div>
                    JAHIA
                </div>
                <div className={classnames('flexRow_nowrap', 'alignCenter', styles.headerCaption)}>
                    {icon}{headerCaption}
                </div>
            </>
        );
    }

    return null;
};

NavHeader.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    headerCaption: PropTypes.string.isRequired,
    modeIcon: PropTypes.element
};

export const PrimaryNav = ({headerLogo, top, bottom, headerCaption, modeIcon}) => {
    console.log({headerLogo, top, bottom, headerCaption});
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <PrimaryNavContext.Provider value={{isExpanded: isExpanded}}>
            <nav className={classnames(
                styles.primaryNav,
                {[styles.expanded]: isExpanded},
                'flexCol',
            )}
            >
                <div className={classnames('flexRow_nowrap', styles.navHeader)}>
                    <div className={classnames(styles.navButtonContainer, 'flexRow', 'flexRow_center')}>
                        <NavButton isExpanded={isExpanded} toggleExpand={toggleExpand} modeIcon={modeIcon}/>
                    </div>
                    <div className={classnames('flexCol', 'flexCol_center', 'alignCenter', 'flexFluid')}>
                        <NavHeader headerCaption={headerCaption} isExpanded={isExpanded} modeIcon={modeIcon}/>
                    </div>
                </div>

                <ul className={classnames('flexFluid')}>
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
    top: [],
    bottom: []
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
    top: PropTypes.oneOf(PropTypes.arrayOf(PropTypes.element), PropTypes.objectOf(PropTypes.element)),

    /**
     * Primary nav groups displayed at the bottom
     */
    bottom: PropTypes.oneOf(PropTypes.arrayOf(PropTypes.element), PropTypes.objectOf(PropTypes.element))
};
