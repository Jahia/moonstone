import {useEffect, useState} from 'react';

/**
 * Keeps a component present in the DOM while its exit animation plays.
 *
 * React removes an element as soon as you stop rendering it, so a CSS exit
 * animation never gets the chance to run. This hook delays the removal by
 * `exitDuration` ms after `isOpen` turns false, and exposes an `open`/`closed`
 * state to drive the enter/exit animation from CSS.
 *
 * Render the element while `isPresent` is true and spread `state` onto it as a
 * `data-state` attribute; let CSS animate `[data-state='open']` on enter and
 * `[data-state='closed']` on exit.
 *
 * @param isOpen - whether the component should be shown
 * @param exitDuration - exit animation duration in ms; keep in sync with the CSS
 * @returns `isPresent` (render the element while true) and `state` ('open' while shown, 'closed' while exiting)
 */
export const usePresence = (isOpen: boolean, exitDuration: number) => {
    const [isPresent, setIsPresent] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setIsPresent(true);
        } else if (isPresent) {
            const timer = setTimeout(() => setIsPresent(false), exitDuration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isPresent, exitDuration]);

    return {isPresent, state: isOpen ? 'open' : 'closed'};
};
