import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PrimaryNav.scss';
import l from '../../styles/_layout.scss';

// TODO implement the component !
export const PrimaryNav = ({headerLogo, top, bottom, headerCaption}) => {
    console.log({headerLogo, top, bottom, headerCaption});
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    useEffect(() => {
        setExpanded(isExpanded);
    }, [isExpanded]);

    return (
        <>
            <nav className={classnames(
                styles.primaryNav,
                {[styles.expanded]: isExpanded},
                l.flexCol,
            )}
            >
                <button type="button" onClick={toggleExpand}>Toggle</button>
                <ul className={classnames(l.flexFluid)}>
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
    top: PropTypes.arrayOf(PropTypes.element),

    /**
     * Primary nav groups displayed at the bottom
     */
    bottom: PropTypes.arrayOf(PropTypes.element)
};
