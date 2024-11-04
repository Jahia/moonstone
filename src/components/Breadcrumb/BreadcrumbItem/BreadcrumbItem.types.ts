import type {ButtonProps} from '~/components/Button/Button.types';

export type BreadcrumbItemProps = Omit<ButtonProps, 'variant' | 'size' | 'label'> & {
    /**
     * Label of the BreadcrumbItem
     */
    label?: string;
}

