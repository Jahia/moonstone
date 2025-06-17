import React, {Fragment} from 'react';
import clsx from 'clsx';
import './Breadcrumb.scss';
import {BreadcrumbProps} from './Breadcrumb.types';
import {ChevronRight} from '~/icons';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({children, className, ...props}) => {
    const allItems = React.Children.toArray(children);

    if (!children || allItems.length < 1) {
        return null;
    }

    return (
        <nav className={clsx('moonstone-breadcrumb', className)} aria-label="breadcrumb" {...props}>
            <ol className={clsx('flexRow_nowrap', 'alignCenter')}>
                {allItems.map((item: React.ReactElement, index) => (
                            index < allItems.length - 1 ? (
                                <Fragment key={item.key}>

                                    {item}

                                    <li
                                    className={
                                        clsx(
                                            'moonstone-breadcrumb_separator',
                                            'flexRow_center',
                                            'alignCenter'
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
