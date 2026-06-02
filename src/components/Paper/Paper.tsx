import {FunctionComponent} from 'react';
import clsx from 'clsx';
import type {PaperProps} from './Paper.types';
import {reset} from '~/globals/css-utils.js';
import styles from './Paper.module.scss';

export const Paper: FunctionComponent<PaperProps> = ({
    children,
    hasPadding = true,
    className,
    ...props
}) => {
    const classNameProps = clsx(
        reset,
        ['moonstone-paper', styles['moonstone-paper']],
        hasPadding && ['moonstone-paper_padding', styles['moonstone-paper_padding']],
        className
    );

    if (!children) {
        return null;
    }

    return (
        <section className={classNameProps} {...props}>
            {children}
        </section>
    );
};

Paper.displayName = 'Paper';
