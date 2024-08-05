import React from 'react';
import type  {PolymorphicComponentProps} from '~/types/Polymorphic.types';
import type {BasicTypographyProps} from '~/components/Typography/Typography.types';

export type BasicIconTextIconProps = {
    /**
     * Which element to render as the root wrapping element
     */
    // component?: string;

    /**
     * Optional icon element to render on the left/before children
     */
    iconStart?: React.ReactElement;

    /**
     * Optional icon element to render on the right/after children
     */
    iconEnd?: React.ReactElement;

    /**
     * Which size of icon to render; is "default" by default ;)
     */
    iconSize?: 'small' | 'default' | 'big';

    /**
     * Any Typography props to pass to the Typography component within
     */
    typographyProps?: BasicTypographyProps;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Any styles to define inline on the component
     */
    style?: React.CSSProperties;

    /**
     * Children to render between the icons
     */
    children?: React.ReactNode;
};

export type IconTextIconProps<C extends React.ElementType> = PolymorphicComponentProps<C, BasicIconTextIconProps>;
