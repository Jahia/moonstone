type AsProp<C extends React.ElementType> = {
    /**
     * The HTML tag used to render the component
     */
    component?: C;
  };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProp<
    // Element type
    C extends React.ElementType,
    // Component props
    Props
> = React.PropsWithChildren<Props & AsProp<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropWithRef<
    // Element type
    C extends React.ElementType,
    // Component props
    Props
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// -----
// Type HTMLTagsAllowed<C extends React.ElementType, T> = C extends T ? C : never;

// type AsProp<C extends React.ElementType, T> = {
//     /**
//      * The HTML tag used to render the component
//      */
//     component?: HTMLTagsAllowed<C, T>;
//   };

// type PropsToOmit<C extends React.ElementType, P, T> = keyof (AsProp<C, T> & P);
// type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// export type PolymorphicComponentProp<
//     // Element type
//     C extends React.ElementType,
//     // Component props
//     Props,
//     T
// > = React.PropsWithChildren<Props & AsProp<C, T>> &
//     Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props, T>>;

// export type PolymorphicComponentPropWithRef<
//     // Element type
//     C extends React.ElementType,
//     // Component props
//     Props,
//     // Allowed HTMl Tags (div, span, h1, ...)
//     T = React.ElementType
// > = PolymorphicComponentProp<C, Props, T> & { ref?: PolymorphicRef<C> };
