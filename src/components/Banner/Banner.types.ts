import type { ReactNode } from 'react';

export type BannerProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Title of the Banner
     */
    title: string;

    /**
     * Variant of the Banner. `warning` and `danger` banners are announced right away (`role="alert"`),
     * `neutral` and `info` politely (`role="status"`), which screen readers may skip when the banner
     * appears with its text: pass `role="alert"` when it must be read.
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
};
