import React from 'react';

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

type BasicProps = React.ComponentPropsWithRef<'div'> & {
    /**
     * Label of the section
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
     * Additional classnames
     */
    className?: string;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;
}

export type CollapsibleProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledCollapsibleProps = BasicProps & ControlledProps;

export type UncontrolledCollapsibleProps = BasicProps & UncontrolledProps;
