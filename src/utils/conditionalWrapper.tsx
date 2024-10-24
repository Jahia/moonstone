import React from 'react';

type ConditionalWrapperProps = {
    readonly children: JSX.Element|JSX.Element[];
    readonly condition: boolean;
    readonly wrapper: (children: React.ReactElement) => JSX.Element;
};

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({condition, wrapper, children}) =>
    condition ? wrapper(<>{children}</>) : <>{children}</>;
