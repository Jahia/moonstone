import React, {Fragment} from 'react';
import clsx from 'clsx';
import styles from './Breadcrumb.module.scss';
import {BreadcrumbProps} from './Breadcrumb.types';
import {ChevronRight} from '~/icons';
import {layout, reset} from '~/globals/css-utils.js';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({children, className, ...props}) => {
    const allItems = React.Children.toArray(children);

    if (!children || allItems.length < 1) {
        return null;
    }

    return (
        <nav className={clsx(reset, 'moonstone-breadcrumb', styles['moonstone-breadcrumb'], className)} aria-label="breadcrumb" {...props}>
            <ol className={clsx('flexRow_nowrap', layout.flexRow_nowrap, 'alignCenter', layout.alignCenter)}>
                {allItems.map((item: React.ReactElement, index) => (
                            index < allItems.length - 1 ? (
                                <Fragment key={item.key}>

                                    {item}

                                    <li
                                    className={
                                        clsx(
                                            ['moonstone-breadcrumb_separator', styles['moonstone-breadcrumb_separator']],
                                            ['flexRow_center', layout.flexRow_center],
                                            ['alignCenter', layout.alignCenter]
                                        )
                                    }
                                    >
                                        <ChevronRight aria-hidden/>
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment key={item.key}>
                                    {React.cloneElement(item, {'aria-current': 'page'})}
                                </Fragment>
                            )
                ))}

            </ol>
        </nav>
    );
};

Breadcrumb.displayName = 'Breadcrumb';
