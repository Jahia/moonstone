import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Tab } from './index';
import { TabItem } from './TabItem';

const renderTab = () => {
    const onFirst = vi.fn();
    const onSecond = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Tab>
                <TabItem isSelected label="First" onClick={onFirst}/>
                <TabItem label="Second" onClick={onSecond}/>
                <TabItem isDisabled label="Disabled"/>
                <TabItem label="Last"/>
            </Tab>
            <button type="button">after</button>
        </>,
    );
    return { onFirst, onSecond };
};

const tab = (name: string) => screen.getByRole('tab', { name });

describe('Tab keyboard', () => {
    it('exposes items with role tab and aria-selected inside a tablist', () => {
        renderTab();
        expect(screen.getByRole('tablist')).toBeVisible();
        expect(tab('First')).toHaveAttribute('aria-selected', 'true');
        expect(tab('Second')).toHaveAttribute('aria-selected', 'false');
    });

    it.fails('keeps only the selected tab in the Tab sequence', () => {
        renderTab();
        expect(tab('First')).toHaveAttribute('tabindex', '0');
        expect(tab('Second')).toHaveAttribute('tabindex', '-1');
        expect(tab('Last')).toHaveAttribute('tabindex', '-1');
    });

    it.fails('leaves the tablist with a single Tab from the selected tab', async () => {
        renderTab();
        tab('First').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('moves focus to the next tab with ArrowRight', async () => {
        renderTab();
        tab('First').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(tab('Second')).toHaveFocus();
    });

    it('moves focus to the previous tab with ArrowLeft', async () => {
        renderTab();
        tab('Second').focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(tab('First')).toHaveFocus();
    });

    it.fails('skips disabled tabs when moving with the arrow keys', async () => {
        renderTab();
        tab('Second').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(tab('Last')).toHaveFocus();
    });

    it.fails('wraps focus from the last tab to the first with ArrowRight', async () => {
        renderTab();
        tab('Last').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(tab('First')).toHaveFocus();
    });

    it.fails('wraps focus from the first tab to the last with ArrowLeft', async () => {
        renderTab();
        tab('First').focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(tab('Last')).toHaveFocus();
    });

    it.fails('moves focus to the first and last tabs with Home and End', async () => {
        renderTab();
        tab('Second').focus();
        await userEvent.keyboard('{End}');
        expect(tab('Last')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(tab('First')).toHaveFocus();
    });

    it('activates the focused tab with Enter', async () => {
        const { onSecond } = renderTab();
        tab('Second').focus();
        await userEvent.keyboard('{Enter}');
        expect(onSecond).toHaveBeenCalledTimes(1);
    });

    it('activates the focused tab with Space', async () => {
        const { onSecond } = renderTab();
        tab('Second').focus();
        await userEvent.keyboard(' ');
        expect(onSecond).toHaveBeenCalledTimes(1);
    });
});
