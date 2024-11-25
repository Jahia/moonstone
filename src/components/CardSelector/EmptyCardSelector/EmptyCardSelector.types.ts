import React, {HTMLAttributes} from 'react';

export type EmptyCardSelectorProps = {
    /**
    * Required id
    */
    id?: string;

    /**
    * Additional classname
    */
    className?: string;

    /**
    * EmptyCardSelector label
    */
    label?: string;

    /**
    * EmptyCardSelector buttonLabel
    */
    buttonLabel?: string;

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
