import React from 'react';
import clsx from 'clsx';
import type {PolymorphicComponent} from '~/types/Polymorphic.types';
import type {BasicPaperProps, PaperProps} from './Paper.types';
import styles from './Paper.module.scss';

export const Paper = React.forwardRef(<C extends React.ElementType = 'section'>({
    children,
    hasPadding = true,
    className,
    component,
    ...props
}: PaperProps<C>,
    ref: React.Ref<Element>) => {
    const classNameProps = clsx(
        ['moonstone-paper', styles['moonstone-paper']],
        hasPadding && ['moonstone-paper_padding', styles['moonstone-paper_padding']],
        className
    );

    if (!children) {
        return null;
    }

    const Component = component ?? 'section';

    return (
        <Component ref={ref} className={classNameProps} {...props}>
            {children}
        </Component>
    );
}) as unknown as PolymorphicComponent<'section', BasicPaperProps>;

Paper.displayName = 'Paper';
