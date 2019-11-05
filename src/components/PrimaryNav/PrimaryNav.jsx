import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './PrimaryNav.scss';
import {PrimaryNavContext} from './PrimaryNav.context';
// TODO resolve this issue here
import Menu from '../../../dist/icons/Menu';
import ArrowLeft from '../../../dist/icons/ArrowLeft';

const NavButton = ({isExpanded, toggleExpand}) => {
    if (isExpanded) {
        return (
            <button type="button" onClick={toggleExpand}>
                <ArrowLeft/>
            </button>
        );
    }

    return (
        <button type="button" onClick={toggleExpand}>
            <Menu/>
        </button>
    );
};

NavButton.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    toggleExpand: PropTypes.func.isRequired
};

const NavHeader = ({isExpanded, headerCaption}) => {
    if (isExpanded) {
        return headerCaption;
    }

    return null;
};

NavHeader.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    headerCaption: PropTypes.string.isRequired
};

export const PrimaryNav = ({headerLogo, top, bottom, headerCaption}) => {
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
                        <NavButton isExpanded={isExpanded} toggleExpand={toggleExpand}/>
                    </div>
                    <div className={classnames('flexRow', 'flexRow_center', 'alignCenter', 'flexFluid')}>
                        <NavHeader headerCaption={headerCaption} isExpanded={isExpanded}/>
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
