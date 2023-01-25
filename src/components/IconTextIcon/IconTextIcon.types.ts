import React from 'react';

import type {PolymorphicComponentProp} from '~/types/Polymorphic.types';
import type {TypoProps} from '~/components/Typography/Typography.types';

type Props = {
    /**
     * The HTML tag used to render the root node
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
    typographyProps?: TypoProps;

    /**
     * Any additional class name(s) to render
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

export type IconTextIconProps<C extends React.ElementType> = PolymorphicComponentProp<C, Props>;
