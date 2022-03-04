import React from 'react';
import "@reach/dialog/styles.css";
import "./Dialog.scss"
import {DialogProps} from "./Dialog.types";
import * as RadixDialog from '@radix-ui/react-dialog';
import {animated, AnimationResult, config, useTransition} from 'react-spring';

export const Dialog: React.FC<DialogProps> = ({
                                                  isOpen,
                                                  onClose,
                                                  header,
                                                  footer,
                                                  children
                                              }) => {

    const transitions = useTransition(isOpen, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.default,
        onRest: (res:AnimationResult) => {
            /* tslint:disable-next-line */
            console.log('ended', res)
        },
    });

    return (
        <RadixDialog.Root open={isOpen} onOpenChange={(open => {
            if (!open) {
                onClose()
            }
        })}>
            <RadixDialog.Portal forceMount>
                {transitions((styles, item) =>
                    item ? (
                        <>
                            <RadixDialog.Overlay forceMount asChild className="moonstone-dialog_overlay">
                                <animated.div style={styles}/>
                            </RadixDialog.Overlay>
                            <RadixDialog.Content forceMount asChild className="moonstone-dialog">
                                <animated.div style={styles}>
                                    <div className="flexRow alignCenter moonstone-dialog_header">
                                        {header}
                                    </div>
                                    <div className="flexRow moonstone-dialog_content">
                                        {children}
                                    </div>
                                    <div className="flexRow_reverse alignCenter moonstone-dialog_footer">
                                        {footer}
                                    </div>
                                </animated.div>
                            </RadixDialog.Content>
                        </>
                    ) : null
                )}
            </RadixDialog.Portal>
        </RadixDialog.Root>
    );
}
