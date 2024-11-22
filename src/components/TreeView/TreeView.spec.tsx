import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {TreeView} from './TreeView';
import {Love, Cloud} from '~/icons';
import {toIconComponent} from '~/icons';

import type {TreeViewData} from './TreeView.types';

const tree: TreeViewData[] = [
    {
        id: 'A',
        label: 'A level1',
        iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
        iconEnd: <Cloud data-testid="test-iconEnd"/>,
        children: [
            {id: 'A1', label: 'A-1 level2', iconStart: <Love data-testid="test-iconStart"/>}
        ]
    }
];

describe('TreeView', () => {
    it('should not display TreeView when data is empty', () => {
        render(<TreeView data-testid="moonstone-treeView" data={[]}/>);
        expect(screen.queryByTestId('moonstone-treeView')).not.toBeInTheDocument();
    });

    it('should display TreeView', () => {
        render(<TreeView data={tree}/>);
        expect(screen.getByRole('treeitem')).toBeInTheDocument();
    });

    it('should not display chevron for items without children', () => {
        const {container} = render(<TreeView data={[{id: 'A', label: 'A level1'}]}/>);
        expect(container.querySelector('.moonstone-treeView_itemToggle')).not.toBeInTheDocument();
    });

    it('should open node set in openItems', () => {
        render(<TreeView openedItems={['A']} data={tree}/>);

        expect(screen.getByRole('treeitem', {expanded: true})).toHaveTextContent('A level1');
    });

    it('should display end icon of treeView_item', () => {
        render(<TreeView data={tree}/>);
        expect(screen.getByTestId('test-iconEnd')).toBeInTheDocument();
    });

    it('should display start icon of treeView_item', () => {
        render(<TreeView data={[{...tree[0], iconStart: <Love data-testid="test-iconStart"/>}]}/>);
        expect(screen.getByTestId('test-iconStart')).toBeInTheDocument();
    });

    it('should display loading icon if node is loading', () => {
        render(<TreeView data={[{...tree[0], isLoading: true}]}/>);
        expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-busy', 'true');
    });

    it('should not display iconEnd if node is loading', () => {
        render(<TreeView data={[{...tree[0], isLoading: true}]}/>);
        expect(screen.queryByTestId('test-iconEnd')).not.toBeInTheDocument();
    });

    it('should add specific class if TreeView is reversed', () => {
        const {container} = render(<TreeView isReversed data={tree}/>);
        expect(container.getElementsByClassName('reversed')).toBeTruthy();
    });

    it('should have aria-level attribute', () => {
        render(<TreeView openedItems={['A']} data={tree}/>);

        expect(screen.getAllByRole('treeitem').length).toBe(2);
        expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-level', '0');
        expect(screen.getAllByRole('treeitem')[1]).toHaveAttribute('aria-level', '1');
    });

    it('should select item set with selectedItems', () => {
        render(<TreeView data={tree} selectedItems={['A']}/>);
        expect(screen.getByRole('treeitem', {selected: true})).toHaveTextContent('A level1');
    });

    it('should call onClick when clicking on an item', async () => {
        const user = userEvent.setup();
        const clickHandler = jest.fn();

        render(<TreeView data={tree} onClickItem={clickHandler}/>);
        await user.click(screen.getByText('A level1'));

        expect(clickHandler).toHaveBeenCalled();
    });

    it('should not call onClick when clicking on an disabled item', async () => {
        const user = userEvent.setup();
        const clickHandler = jest.fn();

        render(<TreeView data={[{...tree[0], isDisabled: true}]} onClickItem={clickHandler}/>);
        await user.click(screen.getByText('A level1'));

        expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should not call onClick when clicking on an readonly item', async () => {
        const user = userEvent.setup();
        const clickHandler = jest.fn();

        render(<TreeView data={[{...tree[0], isReadonly: true}]} onClickItem={clickHandler}/>);
        await user.click(screen.getByText('A level1'));

        expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should call onOpenItem when the node opens', async () => {
        const user = userEvent.setup();
        const openHandler = jest.fn();
        const closeHandler = jest.fn();
        const {container} = render(<TreeView data={tree} onOpenItem={openHandler} onCloseItem={closeHandler}/>);

        await user.click(container.querySelector('.moonstone-treeView_itemToggle'));

        expect(closeHandler).not.toHaveBeenCalled();
        expect(openHandler).toHaveBeenCalled();
    });

    it('should call onCloseItem when the node closes', async () => {
        const user = userEvent.setup();
        const openHandler = jest.fn();
        const closeHandler = jest.fn();
        const {container} = render(<TreeView data={tree} openedItems={['A']} onOpenItem={openHandler} onCloseItem={closeHandler}/>);

        await user.click(container.querySelector('.moonstone-treeView_itemToggle'));

        expect(closeHandler).toHaveBeenCalled();
        expect(openHandler).not.toHaveBeenCalled();
    });

    it('should add extra attribute', () => {
        render(<TreeView data={tree} data-testid="moonstone-treeView" data-custom="test"/>);
        expect(screen.getByTestId('moonstone-treeView')).toHaveAttribute('data-custom', 'test');
    });

    it('should highlight the item set with highltedItem', () => {
        render(<TreeView highlightedItems={['A']} data={tree}/>);

        expect(screen.getByRole('treeitem', {current: 'page'})).toBeInTheDocument();
    });

    it('should not highlight the item when it is already selected', () => {
        render(<TreeView highlightedItems={['A']} selectedItems={['A']} data={tree}/>);

        expect(screen.queryByRole('treeitem', {current: 'page'})).not.toBeInTheDocument();
    });

    it('should display checkboxes when showCheckbox is set', () => {
        render(<TreeView showCheckbox data={tree}/>);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should checked the checkbox when the item is selected with `showCheckbox`', () => {
        render(<TreeView showCheckbox selectedItems={['A']} data={tree}/>);

        expect(screen.getByRole('treeitem', {selected: true})).toContainElement(screen.getByRole('checkbox', {checked: true}));
    });
});

describe('Uncontrolled TreeView', () => {
    it('should have all nodes closed by default (uncontrolled)', () => {
        render(<TreeView data={tree}/>);

        expect(screen.queryAllByRole('treeitem', {expanded: true})).toHaveLength(0);
    });

    it('should open node set in defaultOpenedItems', () => {
        render(<TreeView defaultOpenedItems={['A']} data={tree}/>);

        expect(screen.getByRole('treeitem', {expanded: true})).toHaveTextContent('A level1');
    });

    it('should open a node by clicking on arrow icon when onClickItem function is provided', async () => {
        const user = userEvent.setup();
        const clickHandler = jest.fn();
        const {container} = render(<TreeView data={tree} onClickItem={clickHandler}/>);

        await user.click(container.querySelector('.moonstone-treeView_itemToggle'));

        expect(screen.queryByRole('treeitem', {expanded: true})).toBeInTheDocument();
    });

    it('should open a node by clicking on the item when no onClickItem function is provided', async () => {
        const user = userEvent.setup();
        render(<TreeView data={tree}/>);

        await user.click(screen.getByText('A level1'));

        expect(screen.getByRole('treeitem', {expanded: true})).toBeInTheDocument();
    });

    it('should close a node by clicking on arrow icon when onClickItem function is provided', async () => {
        const user = userEvent.setup();
        const clickHandler = jest.fn();
        const {container} = render(<TreeView data={tree} defaultOpenedItems={['A']} onClickItem={clickHandler}/>);

        await user.click(container.querySelector('.moonstone-treeView_itemToggle'));

        expect(screen.queryByRole('treeitem', {expanded: true})).not.toBeInTheDocument();
    });

    it('should close a node by clicking on the item when no onClickItem function is provided', async () => {
        const user = userEvent.setup();
        render(<TreeView defaultOpenedItems={['A']} data={tree}/>);

        await user.click(screen.getByText('A level1'));

        expect(screen.queryByRole('treeitem', {expanded: true})).not.toBeInTheDocument();
    });

    it('should call onCloseItem when the node closes', async () => {
        const user = userEvent.setup();
        const openHandler = jest.fn();
        const closeHandler = jest.fn();
        const {container} = render(<TreeView data={tree} defaultOpenedItems={['A']} onOpenItem={openHandler} onCloseItem={closeHandler}/>);

        await user.click(container.querySelector('.moonstone-treeView_itemToggle'));

        expect(closeHandler).toHaveBeenCalled();
        expect(openHandler).not.toHaveBeenCalled();
    });
});
