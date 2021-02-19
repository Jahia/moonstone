import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './SecondaryNavHeader.scss';
import {Typography} from '../../Typography';

const SecondaryNavHeader = ({children}) => (
    <Typography component="header"
                className={clsx('moonstone-secondaryNavHeader', 'flexCol_center', 'alignCenter')}
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
