import type { ButtonProps } from '~/components/Button/Button.types';

export type BreadcrumbItemProps = Omit<ButtonProps, 'variant' | 'size' | 'label' | 'color'> & {
    /**
     * Name of the page or section the item leads to.
     */
    label?: string;
};
