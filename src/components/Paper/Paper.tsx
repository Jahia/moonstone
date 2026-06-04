import React from 'react';
import clsx from 'clsx';
import type {PaperProps} from './Paper.types';
import styles from './Paper.module.scss';

export const Paper = React.forwardRef<HTMLElement, PaperProps>(({
    children,
    hasPadding = true,
    className,
    ...props
}, ref) => {
    const classNameProps = clsx(
        ['moonstone-paper', styles['moonstone-paper']],
        hasPadding && ['moonstone-paper_padding', styles['moonstone-paper_padding']],
        className
    );

    if (!children) {
        return null;
    }

    return (
        <section ref={ref} className={classNameProps} {...props}>
            {children}
        </section>
    );
});

Paper.displayName = 'Paper';
