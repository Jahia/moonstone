import React from 'react';
import * as Icons from '~/icons/components';

type IconWrapperProps = {
    readonly iconName: keyof typeof Icons,
    readonly size?: 'small' | 'default' | 'big',
    readonly className?: string
};

// Create a component to display in storybook
export const IconWrapper : React.FC<IconWrapperProps> = ({iconName, size, className}) => {
    return React.createElement(Icons[iconName], {size, className});
};

export default IconWrapper;
