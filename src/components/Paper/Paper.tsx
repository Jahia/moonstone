import {FunctionComponent} from 'react';
import styles from './Paper.module.scss';
import clsx from 'clsx';
import {PaperProps} from './Paper.types';

export const Paper: FunctionComponent<PaperProps> = ({
    children,
    hasPadding = true,
    className,
    ...props
}) => {
    const classNameProps = clsx(
        'moonstone-paper', styles.paper,
        {'moonstone-paper_padding': hasPadding, [styles.paper_padding]: hasPadding},
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
