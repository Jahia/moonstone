import React from 'react';

type BasicCollapsibleProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children' | 'onClick'> & {
    /**
     * Label of collapse section
     */
    label: string;

    /**
     * Identifies the element for accessibility purpose
     */
    id?: string;

    /**
     * Content of the collapsible
     */
    children: React.ReactNode;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;
}

type ControlledProps = {
    /**
     * The controlled open state of the collapsible. Must be used in conjunction with onClick. Define the component as controlled when it set
     */
    isExpanded: boolean;
};


type UncontrolledProps = {
    /**
     * The expanded state of the collapsible when it is initially rendered. (uncontrolled)
     */
    isDefaultExpanded?: boolean;
};

export type CollapsibleProps = BasicCollapsibleProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledCollapsibleProps = BasicCollapsibleProps & ControlledProps;
export type UncontrolledCollapsibleProps = BasicCollapsibleProps & UncontrolledProps;
