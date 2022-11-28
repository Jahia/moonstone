import React from 'react';

type ConditionalWrapperProps = {
    children: JSX.Element|JSX.Element[];
    condition: boolean;
    wrapper: (children: React.ReactElement) => JSX.Element;
};

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({condition, wrapper, children}) =>
    condition ? wrapper(<>{children}</>) : <>{children}</>;
