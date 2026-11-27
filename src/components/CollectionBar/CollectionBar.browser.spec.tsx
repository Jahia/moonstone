import { render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { AddFilter, CollectionBar, FilterChip } from './index';
import { DateTimeInput, Drawer } from '~/components';

const renderBarContent = () => (
    <CollectionBar aria-label="Filters">
        <FilterChip filterKey="date" label="Date">
            <input aria-label="Date"/>
        </FilterChip>
        <FilterChip isAddable filterKey="user" label="User">
            <input aria-label="User"/>
        </FilterChip>
        <AddFilter/>
    </CollectionBar>
);

const renderBar = () => render(renderBarContent());

describe('CollectionBar keyboard', () => {
    it('closes a popup on Escape and gives the focus back to its chip', async () => {
        renderBar();
        await userEvent.click(screen.getByRole('button', { name: 'Date' }));
        await expect.poll(() => screen.getByRole('dialog', { name: 'Date' }).contains(document.activeElement)).toBe(true);

        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Date' })).toHaveFocus();
    });

    it('gives the focus to Add filter when an added chip closes with no value', async () => {
        renderBar();
        await userEvent.click(screen.getByRole('button', { name: 'Add filter' }));
        await userEvent.click(screen.getByText('User'));
        await expect.poll(() => screen.getByRole('dialog', { name: 'User' }).contains(document.activeElement)).toBe(true);

        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add filter' })).toHaveFocus();
    });
});

// The gap between a chip and its popup, which stays the same wherever the bar is
const popupGap = (chip: HTMLElement) => screen.getByRole('dialog').getBoundingClientRect().top - chip.getBoundingClientRect().bottom;

const DateFilter = () => {
    const [date, setDate] = useState('');
    return (
        <CollectionBar aria-label="Filters">
            <FilterChip filterKey="date" label="Date" valueLabel={date} onClear={() => setDate('')}>
                <DateTimeInput
                    aria-label="Date"
                    locale="en"
                    type="date"
                    value={date || null}
                    onChange={(_event, value) => setDate(value?.toString() ?? '')}
                />
            </FilterChip>
        </CollectionBar>
    );
};

describe('CollectionBar popup position', () => {
    // The animation of a Drawer keeps a transform, which would move a popup that is not in a portal
    it('stays below its chip in an open Drawer', async () => {
        render(<Drawer isOpen aria-label="Users">{renderBarContent()}</Drawer>);
        await Promise.all(document.getAnimations().map(animation => animation.finished));
        const chip = screen.getByRole('button', { name: 'Date' });

        await userEvent.click(chip);
        await waitFor(() => expect(popupGap(chip)).toBe(4));
    });

    it('follows its chip when the container scrolls', async () => {
        render(
            <div data-testid="scroller" style={{ height: 300, overflow: 'auto' }}>
                <div style={{ height: 40 }}/>
                {renderBarContent()}
                <div style={{ height: 600 }}/>
            </div>,
        );
        const chip = screen.getByRole('button', { name: 'Date' });

        await userEvent.click(chip);
        await waitFor(() => expect(popupGap(chip)).toBe(4));
        screen.getByTestId('scroller').scrollTop = 30;
        await waitFor(() => expect(popupGap(chip)).toBe(4));
    });

    it('stays open on a click in the calendar of a DateTimeInput', async () => {
        render(<DateFilter/>);
        await userEvent.click(screen.getByRole('button', { name: 'Date' }));
        await expect.poll(() => screen.getByRole('dialog', { name: 'Date' }).contains(document.activeElement)).toBe(true);

        await userEvent.keyboard(' ');
        await userEvent.click(await screen.findByRole('button', { name: 'Go to the next month' }));
        expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
    });
});

const FilledChip = ({ initialValue }: { initialValue: string }) => {
    const [value, setValue] = useState(initialValue);
    return (
        <div style={{ width: 260 }}>
            <CollectionBar aria-label="Filters">
                <FilterChip filterKey="path" label="Path" valueLabel={value} onClear={() => setValue('')}>
                    <input aria-label="Path"/>
                </FilterChip>
            </CollectionBar>
        </div>
    );
};

describe('FilterChip keyboard and tooltip', () => {
    it.each(['{Delete}', '{Backspace}'])('clears a filled chip with %s and keeps the focus on it', async (key) => {
        render(<FilledChip initialValue="/sites"/>);
        screen.getByRole('button', { name: 'Path: /sites' }).focus();

        await userEvent.keyboard(key);
        expect(screen.getByRole('button', { name: 'Path' })).toHaveFocus();
    });

    it('shows the full value in a tooltip when the chip cuts it', async () => {
        render(<FilledChip initialValue="/sites/digitall/home/a-very-long-path/that-the-chip-cannot-show"/>);
        await userEvent.hover(screen.getByRole('button', { name: /^Path:/ }));
        expect(await screen.findByRole('tooltip')).toHaveTextContent('Path: /sites/digitall/home/a-very-long-path/that-the-chip-cannot-show');
    });

    it('shows no tooltip when the chip shows the whole value', async () => {
        render(<FilledChip initialValue="/sites"/>);
        await userEvent.hover(screen.getByRole('button', { name: 'Path: /sites' }));
        await new Promise(resolve => setTimeout(resolve, 300));
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
});
