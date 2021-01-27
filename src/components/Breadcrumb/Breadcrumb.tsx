import React, {Fragment} from 'react';
import classnames from 'clsx';
import './Breadcrumb.scss';
import {BreadcrumbProps} from './Breadcrumb.types';
import {ChevronRight} from '~/icons';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({children, className, ...props}: BreadcrumbProps) => {
    const classNames = classnames(className);

    const allItems = React.Children.toArray(children);

    if (!children || allItems.length < 1) {
        return null;
    }

    return (
        <nav className={classNames} aria-label="breadcrumb" {...props}>
            <ol className={classnames('flexRow_nowrap', 'alignCenter')}>
                {
                    allItems.map((item: React.ReactElement, index) => (
                        <Fragment key={item.key}>
                            {item}

                            {index < allItems.length - 1 && (
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
                                </li>
                            )}
                        </Fragment>
                    ))
                }
            </ol>
        </nav>
    );
};

Breadcrumb.displayName = 'Breadcrumb';
