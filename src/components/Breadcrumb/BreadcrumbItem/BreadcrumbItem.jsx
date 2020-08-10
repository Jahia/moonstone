import React from 'react';
import PropTypes from 'prop-types';
import './BreadcrumbItem.scss';
import classnames from 'clsx';
import {Button} from '~/components/Button';

export const BreadcrumbItem = ({className, ...props}) => (
    <li className={classnames('moonstone-breadcrumbItem', 'flexRow_center')}>
        <Button {...props}
                variant="ghost"
                size="small"
                className={classnames(className)}
        />
    </li>
);

BreadcrumbItem.propTypes = {
    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Additional classname
     */
    label: PropTypes.string,

    /**
     * Icon name, if it's empty the item has no icon
     */
    icon: PropTypes.element,

    /**
     * Function trigger on click
     */
    onClick: PropTypes.func.isRequired
};

BreadcrumbItem.displayName = 'BreadcrumbItem';
