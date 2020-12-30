import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.scss';
import classnames from 'clsx';
import {ChevronRight} from '~/icons';

export const Breadcrumb = ({children, className, ...props}) => {
    const classNames = classnames(className);

    const allItems = React.Children.toArray(children);

    if (!children || allItems.length < 1) {
        return null;
    }

    return (
        <nav className={classNames} aria-label="breadcrumb" {...props}>
            <ol className={classnames('flexRow_nowrap', 'alignCenter')}>
                {
                    allItems.map((item, index) => (
                        <Fragment key={item.key}>
                            {item}

                            {index < allItems.length - 1 &&
                            <li
                                className={
                                    classnames(
                                        'moonstone-breadcrumb_separator',
                                        'flexRow_center',
                                        'alignCenter'
                                    )
                                }
                            >
                                <ChevronRight aria-hidden/>
                            </li>}
                        </Fragment>
                    ))
                }
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Content of the component
     */
    children: PropTypes.node
};

Breadcrumb.displayName = 'Breadcrumb';
