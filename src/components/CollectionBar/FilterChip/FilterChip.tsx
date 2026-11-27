import clsx from 'clsx';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { useCollectionBarContext } from '../CollectionBar.context';
import { CollectionPopover } from '../CollectionPopover/CollectionPopover';
import { Button } from '~/components/Button';
import { Tooltip } from '~/components/Tooltip';
import { shouldIgnoreKey } from '~/hooks';
import { ChevronDown, Close } from '~/icons';

import type { CollectionPopoverCloseReason } from '../CollectionPopover/CollectionPopover';
import type { FilterChipProps } from './FilterChip.types';

import styles from './FilterChip.module.scss';

export const FilterChip: React.FC<FilterChipProps> = ({
    filterKey,
    label,
    valueLabel,
    children,
    isAddable = false,
    iconStart,
    isDisabled: isChipDisabled = false,
    onClear,
    i18n,
    className,
    ...props
}) => {
    const {
        openFilterKey,
        setOpenFilterKey,
        upsert,
        remove,
        isDisabled: isBarDisabled,
        requestFocus,
        setChipButton,
        menuFilterKey,
        setAddFilterMenuOpen,
    } = useCollectionBarContext('FilterChip');
    const [button, setButton] = useState<HTMLButtonElement | null>(null);
    const hasValue = Boolean(valueLabel);
    const isOpen = openFilterKey === filterKey;
    const isDisabled = isBarDisabled || isChipDisabled;

    // The chip declares itself while it is mounted, even hidden, so that AddFilter lists it. A layout effect, so that
    // AddFilter shows in the first paint
    useLayoutEffect(() => upsert({
        filterKey,
        label,
        isAddable,
        hasValue,
        isDisabled,
        iconStart,
    }));
    useLayoutEffect(() => () => remove(filterKey), [filterKey, remove]);

    const buttonRef = useCallback((element: HTMLButtonElement | null) => {
        setButton(element);
        setChipButton(filterKey, element);
    }, [filterKey, setChipButton]);
    const clearRef = useRef<HTMLButtonElement>(null);

    // The tooltip shows the full text only when the value ends with an ellipsis. The text is compared to its room to a
    // fraction of a pixel: a text 0.02px too wide already shows the ellipsis
    const [isTruncated, setIsTruncated] = useState(false);
    useLayoutEffect(() => {
        const text = hasValue ? button?.querySelector('span') : null;
        if (!text) {
            return undefined;
        }

        const measure = () => {
            const range = document.createRange();
            range.selectNodeContents(text);
            // jsdom lays out nothing and has no width for a range: scrollWidth stands in there
            const textWidth = typeof range.getBoundingClientRect === 'function' ? range.getBoundingClientRect().width : text.scrollWidth;
            setIsTruncated(textWidth - text.getBoundingClientRect().width > 0.01);
        };

        measure();
        if (typeof ResizeObserver === 'undefined') {
            return undefined;
        }

        const observer = new ResizeObserver(measure);
        observer.observe(text);
        return () => observer.disconnect();
    }, [button, hasValue, label, valueLabel]);

    // An added chip shows while its popup is open or while it has a value, as soon as the AddFilter menu picks it
    const isFromMenu = menuFilterKey === filterKey;
    if (isAddable && !hasValue && !isOpen) {
        return null;
    }

    // A click outside or a Tab out leaves the focus where the user put it; every other close gives it back to the chip
    const close = (reason?: CollectionPopoverCloseReason) => {
        requestFocus(reason === 'outsidePress' || reason === 'focusOut' ? 'none' : { filterKey });
        setOpenFilterKey(null);
    };

    const name = hasValue ? <><strong>{label}:</strong> {valueLabel}</> : label;
    const clearLabel = i18n?.clear || `Clear the ${label} filter`;
    const hasClear = hasValue && Boolean(onClear);

    // A popup that the AddFilter menu opened leads back to the menu, as a step of the same path
    const goBack = isFromMenu
        ? () => {
                requestFocus('none');
                setOpenFilterKey(null);
                setAddFilterMenuOpen(true);
            }
        : undefined;

    const chipButton = (
        <Button
            isDisabled={isDisabled}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            className={styles.chipButton}
            iconEnd={<ChevronDown/>}
            label={name}
            ref={buttonRef}
            variant="outlined"
            onClick={() => (isOpen ? close() : setOpenFilterKey(filterKey))}
            onKeyDown={(e) => {
                // Delete and Backspace clear a filled chip, as on a Tag: a click on the clear button keeps onClear's MouseEvent
                const isClearKey = e.key === 'Delete' || e.key === 'Backspace';
                if (isClearKey && hasClear && !shouldIgnoreKey(e) && !e.repeat) {
                    e.preventDefault();
                    clearRef.current?.click();
                }
            }}
        />
    );

    const popover = isOpen && button && (
        <CollectionPopover
            anchor={button}
            backLabel={i18n?.back || 'Back to the filters'}
            title={label}
            onBack={goBack}
            onClose={close}
        >
            {typeof children === 'function' ? children({ close: () => close() }) : children}
        </CollectionPopover>
    );

    // The popup renders in a portal, next to the chip rather than inside it
    return (
        <>
            <span
                className={clsx(styles.filterChip, hasValue ? styles.filled : styles.empty, hasClear && styles.withClear, className)}
                {...props}
                data-moonstone="FilterChip"
            >
                {hasValue && isTruncated ? <Tooltip className={styles.tooltip} label={`${label}: ${valueLabel}`}>{chipButton}</Tooltip> : chipButton}
                {hasClear && (
                    <Tooltip className={styles.clearTooltip} label={clearLabel}>
                        <Button
                            isDisabled={isDisabled}
                            aria-label={clearLabel}
                            className={styles.clearButton}
                            icon={<Close/>}
                            ref={clearRef}
                            variant="outlined"
                            onClick={(event) => {
                                // The bar moves the focus once the clear is in the DOM: to the chip, or to AddFilter once an added chip leaves
                                requestFocus({ filterKey });
                                onClear?.(event);
                            }}
                        />
                    </Tooltip>
                )}
            </span>
            {popover}
        </>
    );
};

FilterChip.displayName = 'FilterChip';
