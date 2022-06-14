import React, {FunctionComponent} from 'react';
import './Paper.scss';
import clsx from 'clsx';
import {PaperProps} from './Paper.types';

export const Paper: FunctionComponent<PaperProps> = ({
    children,
    hasPadding = true,
    className,
    ...props
}) => {
    const classNameProps = clsx(
        'moonstone-paper',
        {'moonstone-paper_padding': hasPadding},
        className
    );

    if (!children) {
        return null
    }

    return (
        <section className={classNameProps} {...props}>
            {children}
        </section>
    );
};

Paper.displayName = 'Paper';
