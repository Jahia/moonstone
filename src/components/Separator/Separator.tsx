import React from 'react';
import clsx from 'clsx';
import styles from './Separator.module.scss';
import type {SeparatorProps} from './Separator.types';

export const Separator: React.FC<SeparatorProps> = ({
    size = 'full',
    spacing = 'small',
    variant = 'horizontal',
    invisible = null,
    className,
    ...props
}) => {
    return (
        <hr {...props}
            className={clsx(
                ['moonstone-separator', styles['moonstone-separator']],
                [`moonstone-separator_${variant}`, styles[`moonstone-separator_${variant}`]],
                [`moonstone-size_${size}`, styles[`moonstone-size_${size}`]],
                [`moonstone-spacing_${spacing}`, styles[`moonstone-spacing_${spacing}`]],
                invisible && [`moonstone-invisible_${invisible}`, styles[`moonstone-invisible_${invisible}`]],
                className
            )}
        />
    );
};

Separator.displayName = 'Separator';
