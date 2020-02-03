import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNav.scss';
import {ResizableBox} from '~/components/ResizableBox';

export const SecondaryNav = ({header, className, children}) => {
    return (
        <ResizableBox
            className={classnames(className, 'flexCol_nowrap', styles.secondaryNav)}
            enable={['right']}
            minWidth="120"
            maxWidth="450"
            defaultSize={{
                width: 245
            }}
        >
            <header className={classnames(styles.secondaryNav_header, 'flexRow_center', 'alignCenter')}>
                {header}
            </header>
            <div className={classnames('flexFluid', 'flexCol')}>
                {children}
            </div>
        </ResizableBox>
    );
};

SecondaryNav.propTypes = {
    /**
     * Header of the secondary navigation
     */
    header: PropTypes.node.isRequired,

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classname
     */
    className: PropTypes.string
};
