import {useCallback, useRef} from 'react';
import './useStickyCollapsible.scss';

export const useStickyCollapsible = () => {
    const container: React.MutableRefObject<HTMLElement> = useRef();
    const collapsibles: React.MutableRefObject<HTMLElement[]> = useRef([]);
    const stickyCollapsible: React.MutableRefObject<HTMLElement> = useRef();

    const sectionRef = (ref: HTMLElement) => {
        if (ref && collapsibles.current.indexOf(ref) === -1) {
            collapsibles.current.push(ref);
        }
    };

    const containerRef = (ref: HTMLElement) => {
        if (ref) {
            container.current = ref;
            ref.style.setProperty('--sticky-top', ref.offsetTop + 'px');
            ref.style.setProperty('--sticky-width', ref.offsetWidth + 'px');
            ref.style.setProperty('--sticky-diff', '0px');
        }
    };

    const onChange = useCallback(() => {
        let collapsible: HTMLElement;
        let diff = 0;
        collapsibles.current.forEach(ref => {
            const d = ref.offsetTop - container.current.scrollTop;
            if (ref !== collapsible && d < 0 && (!collapsible || ref.offsetTop > collapsible?.offsetTop)) {
                collapsible = ref.querySelector('.moonstone-collapsible_content_expanded') ? ref : null;
            } else if (d >= 0 && d < 48) {
                diff = 48 - d;
            }
        });
        container.current.style.setProperty('--sticky-diff', diff + 'px');

        if (collapsible !== stickyCollapsible.current) {
            if (stickyCollapsible.current) {
                stickyCollapsible.current.classList.remove('moonstone-collapsible_sticky');
                stickyCollapsible.current.classList.remove('moonstone-collapsible_stickyover');
            }

            if (collapsible) {
                collapsible.classList.add('moonstone-collapsible_sticky');
            }

            stickyCollapsible.current = collapsible;
        }

        if (collapsible) {
            if (diff === 0) {
                collapsible.classList.add('moonstone-collapsible_stickyover');
            } else {
                collapsible.classList.remove('moonstone-collapsible_stickyover');
            }
        }
    }, []);

    return {onChange, containerRef, sectionRef};
};

