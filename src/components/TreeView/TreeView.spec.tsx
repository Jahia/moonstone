import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { TreeView } from './TreeView';
import { Cloud, Love } from '~/icons';
import { toIconComponent } from '~/icons';

import type { TreeViewData } from './TreeView.types';

const tree: TreeViewData[] = [
    {
        id: 'A',
        label: 'A level1',
        iconStart: toIconComponent(
            'http://www.google.com/s2/favicons?domain=www.jahia.com',
        ),
        iconEnd: <Cloud data-testid="test-iconEnd"/>,
        children: [
            {
                id: 'A1',
                label: 'A-1 level2',
                iconStart: <Love data-testid="test-iconStart"/>,
            },
        ],
    },
];

describe('TreeView', () => {
    it('should not display TreeView when data is empty', () => {
        render(<TreeView data={[]} data-testid="moonstone-treeView"/>);
        expect(
            screen.queryByTestId('moonstone-treeView'),
        ).not.toBeInTheDocument();
    });

    it('should display TreeView', () => {
        render(<TreeView data={tree}/>);
        expect(screen.getByRole('treeitem')).toBeInTheDocument();
    });

    it('should not display chevron for items without children', () => {
        const { container } = render(
            <TreeView data={[{ id: 'A', label: 'A level1' }]}/>,
        );
        expect(
            container.querySelector('.moonstone-treeView_itemToggle'),
        ).not.toBeInTheDocument();
    });

    it('should open node set in openItems', () => {
        render(<TreeView data={tree} openedItems={['A']}/>);

        expect(
            screen.getByRole('treeitem', { expanded: true }),
        ).toHaveTextContent('A level1');
    });

    it('should display end icon of treeView_item', () => {
        render(<TreeView data={tree}/>);
        expect(screen.getByTestId('test-iconEnd')).toBeInTheDocument();
    });

    it('should display start icon of treeView_item', () => {
        render(
            <TreeView
                data={[
                    {
                        ...tree[0],
                        iconStart: <Love data-testid="test-iconStart"/>,
                    },
                ]}
            />,
        );
        expect(screen.getByTestId('test-iconStart')).toBeInTheDocument();
    });

    it('should display loading icon if node is loading', () => {
        render(<TreeView data={[{ ...tree[0], isLoading: true }]}/>);
        expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute(
            'aria-busy',
            'true',
        );
    });

    it('should add specific class if TreeView is reversed', () => {
        const { container } = render(<TreeView isReversed data={tree}/>);
        expect(container.getElementsByClassName('reversed')).toBeTruthy();
    });

    it('should have aria-level attribute', () => {
        render(<TreeView data={tree} openedItems={['A']}/>);

        expect(screen.getAllByRole('treeitem').length).toBe(2);
        expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-level', '1');
        expect(screen.getAllByRole('treeitem')[1]).toHaveAttribute('aria-level', '2');
    });

    it('should select item set with selectedItems', () => {
        render(<TreeView data={tree} selectedItems={['A']}/>);
        expect(
            screen.getByRole('treeitem', { selected: true }),
        ).toHaveTextContent('A level1');
    });

    it('should call onClick when clicking on an item', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();

        render(<TreeView data={tree} onClickItem={clickHandler}/>);
        await user.click(screen.getByText('A level1'));

        expect(clickHandler).toHaveBeenCalled();
    });

    it('should not call onClick when clicking on an disabled item', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();

        render(
            <TreeView
                data={[{ ...tree[0], isDisabled: true }]}
                onClickItem={clickHandler}
            />,
        );
        await user.click(screen.getByText('A level1'));

        expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should not select the item when clicking on the toggle icon', async () => {
        const user = userEvent.setup();

        // Create a wrapper component to use hooks
        const Wrapper = () => {
            const [selectedItems, setSelectedItems] = useState<string[]>([]);
            const handleClick = (node: TreeViewData) => {
                if (selectedItems.includes(node.id)) {
                    setSelectedItems(selectedItems.filter(item => item !== node.id));
                } else {
                    setSelectedItems([node.id]);
                }
            };

            return (
                <TreeView
                    data={tree}
                    openedItems={['A']}
                    selectedItems={selectedItems}
                    onClickItem={handleClick}
                />
            );
        };

        render(<Wrapper/>);

        await user.click(screen.getByTestId('treeitem-toggle-icon'));

        expect(screen.queryAllByRole('treeitem', { selected: true })).toHaveLength(0);
    });

    it('should not call onClick when clicking on an readonly item', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();

        render(
            <TreeView
                data={[{ ...tree[0], isReadonly: true }]}
                onClickItem={clickHandler}
            />,
        );
        await user.click(screen.getByText('A level1'));

        expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should call onOpenItem when the node opens', async () => {
        const user = userEvent.setup();
        const openHandler = vi.fn();
        const closeHandler = vi.fn();
        const { container } = render(
            <TreeView
                data={tree}
                onCloseItem={closeHandler}
                onOpenItem={openHandler}
            />,
        );

        await user.click(
            container.querySelector('.moonstone-treeView_itemToggle'),
        );

        expect(closeHandler).not.toHaveBeenCalled();
        expect(openHandler).toHaveBeenCalled();
    });

    it('should call onCloseItem when the node closes', async () => {
        const user = userEvent.setup();
        const openHandler = vi.fn();
        const closeHandler = vi.fn();
        const { container } = render(
            <TreeView
                data={tree}
                openedItems={['A']}
                onCloseItem={closeHandler}
                onOpenItem={openHandler}
            />,
        );

        await user.click(
            container.querySelector('.moonstone-treeView_itemToggle'),
        );

        expect(closeHandler).toHaveBeenCalled();
        expect(openHandler).not.toHaveBeenCalled();
    });

    it('should add extra attribute', () => {
        render(
            <TreeView
                data={tree}
                data-custom="test"
                data-testid="moonstone-treeView"
            />,
        );
        expect(screen.getByTestId('moonstone-treeView')).toHaveAttribute(
            'data-custom',
            'test',
        );
    });

    it('should highlight the item set with highltedItem', () => {
        render(<TreeView data={tree} highlightedItems={['A']}/>);

        expect(
            screen.getByRole('treeitem', { current: 'page' }),
        ).toBeInTheDocument();
    });

    it('should not highlight the item when it is already selected', () => {
        render(
            <TreeView
                data={tree}
                highlightedItems={['A']}
                selectedItems={['A']}
            />,
        );

        expect(
            screen.queryByRole('treeitem', { current: 'page' }),
        ).not.toBeInTheDocument();
    });

    it('should display checkboxes when showCheckbox is set', () => {
        render(<TreeView showCheckbox data={tree}/>);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should checked the checkbox when the item is selected with `showCheckbox`', () => {
        render(<TreeView showCheckbox data={tree} selectedItems={['A']}/>);

        expect(
            screen.getByRole('treeitem', { selected: true }),
        ).toContainElement(screen.getByRole('checkbox', { checked: true }));
    });
});

describe('Uncontrolled TreeView', () => {
    it('should have all nodes closed by default (uncontrolled)', () => {
        render(<TreeView data={tree}/>);

        expect(
            screen.queryAllByRole('treeitem', { expanded: true }),
        ).toHaveLength(0);
    });

    it('should open node set in defaultOpenedItems', () => {
        render(<TreeView data={tree} defaultOpenedItems={['A']}/>);

        expect(
            screen.getByRole('treeitem', { expanded: true }),
        ).toHaveTextContent('A level1');
    });

    it('should open a node by clicking on arrow icon when onClickItem function is provided', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();
        const { container } = render(
            <TreeView data={tree} onClickItem={clickHandler}/>,
        );

        await user.click(
            container.querySelector('.moonstone-treeView_itemToggle'),
        );

        expect(
            screen.getByRole('treeitem', { expanded: true }),
        ).toBeInTheDocument();
    });

    it('should open a node by clicking on the item when no onClickItem function is provided', async () => {
        const user = userEvent.setup();
        render(<TreeView data={tree}/>);

        await user.click(screen.getByText('A level1'));

        expect(
            screen.getByRole('treeitem', { expanded: true }),
        ).toBeInTheDocument();
    });

    it('should close a node by clicking on arrow icon when onClickItem function is provided', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();
        const { container } = render(
            <TreeView
                data={tree}
                defaultOpenedItems={['A']}
                onClickItem={clickHandler}
            />,
        );

        await user.click(
            container.querySelector('.moonstone-treeView_itemToggle'),
        );

        expect(
            screen.queryByRole('treeitem', { expanded: true }),
        ).not.toBeInTheDocument();
    });

    it('should close a node by clicking on the item when no onClickItem function is provided', async () => {
        const user = userEvent.setup();
        render(<TreeView data={tree} defaultOpenedItems={['A']}/>);

        await user.click(screen.getByText('A level1'));

        expect(
            screen.queryByRole('treeitem', { expanded: true }),
        ).not.toBeInTheDocument();
    });

    it('should call onCloseItem when the node closes', async () => {
        const user = userEvent.setup();
        const openHandler = vi.fn();
        const closeHandler = vi.fn();
        const { container } = render(
            <TreeView
                data={tree}
                defaultOpenedItems={['A']}
                onCloseItem={closeHandler}
                onOpenItem={openHandler}
            />,
        );

        await user.click(
            container.querySelector('.moonstone-treeView_itemToggle'),
        );

        expect(closeHandler).toHaveBeenCalled();
        expect(openHandler).not.toHaveBeenCalled();
    });
});

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

const node = (label: string) => screen.getByText(label).closest('li');

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
        await userEvent.keyboard('{ArrowDown}{ArrowDown}');
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
