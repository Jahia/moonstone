import React from 'react';
import clsx from 'clsx';
import './Separator.scss';
import {SeparatorProps, SeparatorSizes, SeparatorSpacings, SeparatorVariants} from './Separator.types';

export const Separator: React.FC<SeparatorProps> = ({
    size = SeparatorSizes.Full,
    spacing = SeparatorSpacings.Small,
    variant = SeparatorVariants.Horizontal,
    invisible = null,
    className,
    ...props
}) => {
    return (
        <hr {...props}
            className={clsx(
                'moonstone-separator',
                `moonstone-separator_${variant}`,
                `moonstone-size_${size}`,
                `moonstone-spacing_${spacing}`,
                invisible && `moonstone-invisible_${invisible}`,
                className
            )}
        />
    );
};

Separator.displayName = 'Separator';
