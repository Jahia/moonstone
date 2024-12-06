import React, {HTMLAttributes} from 'react';

export type EmptyCardSelectorProps = {
    /**
    * Id of the component
    */
    id: string;

    /**
    * Additional classname
    */
    className?: string;

    /**
    * EmptyCardSelector label
    */
    label?: string;

    /**
    * EmptyCardSelector iconStart
    */
    iconStart?: React.ReactElement;

    /**
    * Disabled state
    */
    isDisabled?: boolean;

    /**
    * ReadOnly state
    */
    isReadOnly?: boolean;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

} & HTMLAttributes<HTMLButtonElement>
