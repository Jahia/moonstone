import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { TreeView } from './TreeView';

import type { TreeViewData } from './TreeView.types';

const data: TreeViewData[] = [
    {
        id: 'A',
        label: 'Root A',
        children: [
            { id: 'A1', label: 'Child A1' },
            { id: 'A2', label: 'Child A2', children: [{ id: 'A21', label: 'Grandchild A21' }] },
        ],
    },
    { id: 'B', label: 'Root B', children: [{ id: 'B1', label: 'Child B1' }] },
    { id: 'C', label: 'Root C' },
];

const renderTree = (props = {}) => {
    const onClickItem = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <TreeView data={data} defaultOpenedItems={['A']} onClickItem={onClickItem} {...props}/>
            <button type="button">after</button>
        </>,
    );
    return { onClickItem };
};

const node = (label: string) => screen.getByRole('treeitem', { name: new RegExp(`^${label}`) });

describe('TreeView keyboard', () => {
    it.fails('exposes a single Tab stop: Tab enters the tree and the next Tab leaves it', async () => {
        renderTree();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(node('Root A')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('exposes aria-expanded on parent nodes only', () => {
        renderTree();
        expect(node('Root A')).toHaveAttribute('aria-expanded', 'true');
        expect(node('Root B')).toHaveAttribute('aria-expanded', 'false');
        expect(node('Root C')).not.toHaveAttribute('aria-expanded');
    });

    it('moves focus to the next visible node with ArrowDown', async () => {
        renderTree();
        node('Root A').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(node('Child A1')).toHaveFocus();
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowDown}');
        expect(node('Root B')).toHaveFocus();
    });

    it('moves focus to the previous visible node with ArrowUp', async () => {
        renderTree();
        node('Root B').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(node('Child A2')).toHaveFocus();
    });

    it('expands a closed node with ArrowRight and keeps focus on it', async () => {
        renderTree();
        node('Root B').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(node('Root B')).toHaveAttribute('aria-expanded', 'true');
        expect(await screen.findByText('Child B1')).toBeVisible();
        expect(node('Root B')).toHaveFocus();
    });

    it.fails('moves focus to the first child with ArrowRight on an open node', async () => {
        renderTree();
        node('Root A').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(node('Root A')).toHaveAttribute('aria-expanded', 'true');
        expect(node('Child A1')).toHaveFocus();
    });

    it('collapses an open node with ArrowLeft and keeps focus on it', async () => {
        renderTree();
        node('Root A').focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(node('Root A')).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByText('Child A1')).not.toBeInTheDocument();
        expect(node('Root A')).toHaveFocus();
    });

    it.fails('moves focus to the parent with ArrowLeft on a child node', async () => {
        renderTree();
        node('Child A1').focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(node('Root A')).toHaveFocus();
        expect(node('Root A')).toHaveAttribute('aria-expanded', 'true');
    });

    it('selects the focused node with Enter', async () => {
        const { onClickItem } = renderTree();
        node('Child A1').focus();
        await userEvent.keyboard('{Enter}');
        expect(onClickItem).toHaveBeenCalledTimes(1);
        expect(onClickItem.mock.calls[0][0]).toMatchObject({ id: 'A1' });
    });

    it.fails('selects the focused node with Space', async () => {
        const { onClickItem } = renderTree();
        node('Child A1').focus();
        await userEvent.keyboard(' ');
        expect(onClickItem).toHaveBeenCalledTimes(1);
        expect(onClickItem.mock.calls[0][0]).toMatchObject({ id: 'A1' });
    });

    it.fails('moves focus to the first and last visible nodes with Home and End', async () => {
        renderTree();
        node('Child A1').focus();
        await userEvent.keyboard('{End}');
        expect(node('Root C')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(node('Root A')).toHaveFocus();
    });

    it.fails('expands all sibling nodes with *', async () => {
        renderTree();
        node('Root C').focus();
        await userEvent.keyboard('*');
        expect(node('Root A')).toHaveAttribute('aria-expanded', 'true');
        expect(node('Root B')).toHaveAttribute('aria-expanded', 'true');
        expect(await screen.findByText('Child B1')).toBeVisible();
        expect(node('Root C')).toHaveFocus();
    });
});
