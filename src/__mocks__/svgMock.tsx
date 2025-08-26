import React from 'react';
import clsx from 'clsx';

type SvgProps = {
    readonly size?: 'small'| 'default' | 'big',
    readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray',
    readonly className?: string
};

const Svg : React.FC<SvgProps> = ({className = '', color, size = 'default', ...props}) => {
    return (
        <svg
            className={clsx(
                className,
                `moonstone-icon moonstone-icon_${size}`,
                color && `moonstone-icon_${color}`
            )}
            {...props}/>
    );
};

export default Svg;
