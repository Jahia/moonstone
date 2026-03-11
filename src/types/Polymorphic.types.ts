type AsProp<C extends React.ElementType> = {
    /**
     * The HTML tag used to render the component
     */
    component?: C;
  };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

/**
 * Props for a polymorphic component (without ref).
 */
export type PolymorphicProps<
    C extends React.ElementType,
    Props
> = React.PropsWithChildren<Props & AsProp<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/**
 * Props for a polymorphic component including ref support.
 * Use this to define your component's props type (e.g., `TypographyProps<C>`).
 */
export type PolymorphicPropsWithRef<
    C extends React.ElementType,
    Props
> = PolymorphicProps<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * Type for polymorphic components with forwardRef that preserves generic signature.
 * Cast your React.forwardRef exports to this type to enable proper TypeScript autocomplete.
 *
 * @example
 * export const MyComponent = React.forwardRef(...) as unknown as PolymorphicComponent<'div', MyProps>
 */
export type PolymorphicComponent<
    DefaultElement extends React.ElementType,
    Props
> = (<C extends React.ElementType = DefaultElement>(
    props: PolymorphicPropsWithRef<C, Props>
) => React.ReactElement | null) & {
    displayName?: string;
};
