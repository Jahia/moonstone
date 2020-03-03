import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNavHeader.scss';

const SecondaryNavHeader = ({children}) => {
    return (
        <div className={classnames('flexRow_center', 'alignCenter', styles.secondaryNavHeader)}>
            {children}
        </div>
    );
};

SecondaryNavHeader.propTypes = {

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired
};

SecondaryNavHeader.displayName = 'SecondaryNavHeader';

export {SecondaryNavHeader};
