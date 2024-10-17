type AsProp<C extends React.ElementType> = {
    /**
     * The HTML tag used to render the component
     */
    component?: C;
  };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<
    // Element type
    C extends React.ElementType,
    // Component props
    Props
> = React.PropsWithChildren<Props & AsProp<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentWithRefProps<
    // Element type
    C extends React.ElementType,
    // Component props
    Props
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
