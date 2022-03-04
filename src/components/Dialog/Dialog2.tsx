import React from 'react';
import {Dialog as ReachDialog, DialogOverlay, DialogContent} from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./Dialog.scss"
import {DialogProps} from "./Dialog.types";
import {animated, AnimationResult, config, useTransition} from 'react-spring';

export const Dialog2: React.FC<DialogProps> = ({
                                                   isOpen,
                                                   onClose,
                                                   header,
                                                   footer,
                                                   children
                                               }) => {

    const AnimatedDialogOverlay = animated(DialogOverlay);
    const AnimatedDialogContent = animated(DialogContent);

    const transitions = useTransition(isOpen, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.default,
        onRest: (res: AnimationResult) => {
            /* tslint:disable-next-line */
            console.log('ended', res)
        },
    });

    return transitions((styles, item) => item && (
        <AnimatedDialogOverlay style={styles} onDismiss={onClose}>
            <AnimatedDialogContent style={styles} className="moonstone-dialog">
                <div className="flexRow alignCenter moonstone-dialog_header">
                    {header}
                </div>
                <div className="flexRow moonstone-dialog_content">
                    {children}
                </div>
                <div className="flexRow_reverse alignCenter moonstone-dialog_footer">
                    {footer}
                </div>
            </AnimatedDialogContent>
        </AnimatedDialogOverlay>
    ));
}
