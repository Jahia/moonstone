import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNavHeader.scss';
import {Typography} from '../../Typography';

const SecondaryNavHeader = ({children}) => (
    <Typography component="header"
                className={classnames(styles.secondaryNavHeader, 'flexCol_center', 'alignCenter')}
                variant="heading"
    >
        {children}
    </Typography>
);

SecondaryNavHeader.propTypes = {

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired
};

SecondaryNavHeader.displayName = 'SecondaryNavHeader';

export {SecondaryNavHeader};
