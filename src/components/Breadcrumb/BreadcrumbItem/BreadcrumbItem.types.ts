import type { ButtonProps } from '~/components/Button/Button.types';

export type BreadcrumbItemProps = Omit<ButtonProps, 'variant' | 'size' | 'label' | 'color'> & {
    /**
     * Text shown for this navigation step
     */
    label?: string;
};
