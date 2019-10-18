import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PrimaryNav.scss';

export const PrimaryNav = ({headerLogo, top, bottom, headerCaption}) => {
    console.log({headerLogo, top, bottom, headerCaption});
    const [isExpanded, setExpanded] = useState(false);

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    return (
        <div className={classnames(
            styles.primaryNav,
            {[styles.expanded]: isExpanded},
        )}
        >
            <button type="button" onClick={toggleExpand}>Toggle</button>
            <ul>
                {top}
            </ul>
            <ul>
                {bottom}
            </ul>
        </div>
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
