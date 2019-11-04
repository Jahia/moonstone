import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './PrimaryNav.scss';

// TODO implement the component !
export const PrimaryNav = ({headerLogo, top, bottom, headerCaption}) => {
    console.log({headerLogo, top, bottom, headerCaption});
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <>
            <nav className={classnames(
                styles.primaryNav,
                {[styles.expanded]: isExpanded},
                'flexCol',
            )}
            >
                <button type="button" onClick={toggleExpand}>Toggle</button>
                <ul className={classnames('flexFluid')}>
                    {top}
                </ul>
                <ul>
                    {bottom}
                </ul>
            </nav>
            {isExpanded && <div className={(styles.overlay)} onClick={toggleExpand}/>}
        </>
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
