import {FunctionComponent} from 'react';
import styles from './Paper.module.scss';
import clsx from 'clsx';
import {PaperProps} from './Paper.types';
import {reset} from '~/globals/css-utils.js';

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
