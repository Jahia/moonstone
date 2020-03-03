import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNavHeader.scss';

const SecondaryNavHeader = ({children}) => (
    <header className={classnames(styles.secondaryNavHeader, 'flexRow_center', 'alignCenter')}>
        {children}
    </header>
);

SecondaryNavHeader.propTypes = {

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired
};

SecondaryNavHeader.displayName = 'SecondaryNavHeader';

export {SecondaryNavHeader};
