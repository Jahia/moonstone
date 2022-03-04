import * as React from 'react';
import {ReactNode} from "react";

export type DialogProps = {
    isOpen: boolean;
    header?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
    onClose: () => void;
}

