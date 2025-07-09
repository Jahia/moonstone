import {ReactNode} from 'react';

export type BannerProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Title of the Banner
     */
    title: string;

    /**
     * Variant of the Banner
     */
    variant?: 'neutral' | 'info' | 'warning' | 'danger';

    /**
     * Children of the Banner
     */
    children: ReactNode;

    /**
     * Title icon of the Banner
     */
    iconStart?: React.ReactElement;

    /**
     * Additional classname
     */
    className?: string;
}
