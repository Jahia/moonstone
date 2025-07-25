import {queryByText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dropdown, DropdownMenu, TreeViewMenu} from './index';
import {dropdownData} from '~/data/dropdownData';
import {dropdownDataGrouped} from '~/data/dropdownDataGrouped';
import {dropdownDataTree} from '~/data/dropdownDataTree';
import {Love} from '~/icons/index';

describe('Dropdown', () => {
    it('should display', () => {
        render(
            <Dropdown
                data={dropdownData}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
    });

    it('should display icon', () => {
        render(
            <Dropdown
                data={dropdownData}
                icon={<Love data-testid="dropdown-icon"/>}
            />
        );
        expect(screen.queryByTestId('dropdown-icon')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(
            <Dropdown
                className={testClassName}
                data={dropdownData}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveClass(
            testClassName
        );
    });

    it('should add additional attributes', () => {
        render(
            <Dropdown
                data-custom="test"
                data={dropdownData}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveAttribute(
            'data-custom',
            'test'
        );
    });

    it('should add dropdown-disabled class if the dropdown is disabled', () => {
        render(
            <Dropdown
                isDisabled
                data={dropdownData}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(screen.getByTestId('moonstone-dropdown').firstChild).toHaveClass(
            'moonstone-disabled'
        );
    });

    it('should not display the menu dropdown by default', () => {
        render(
            <Dropdown
                data={dropdownDataGrouped}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should display the menu dropdown when I click on the dropdown', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown
                data={dropdownDataGrouped}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );

        await user.click(screen.getByRole('listbox'));
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the treeview menu dropdown when I click on the dropdown', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown
                treeData={dropdownDataTree}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );

        await user.click(screen.getByRole('listbox'));
        expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should update searchbar when I click on the dropdown and start typing', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown
                hasSearch
                data={dropdownDataGrouped}
                onChange={() => 'testing'}
            />
        );

        await user.click(screen.getByRole('listbox'));
        await user.type(screen.getByRole('searchbox'), 'test');
        expect(screen.getByRole('searchbox')).toHaveValue('test');
    });

    it('should call onChange when I select a value', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(
            <Dropdown
                hasSearch
                label="select something"
                data={dropdownDataGrouped}
                values={['4']}
                onChange={onChange}
            />
        );

        await user.click(screen.getByRole('listbox'));
        await user.click(screen.getByText(/1/));
        expect(onChange).toHaveBeenCalled();
    });

    it('should close the menu dropdown when I click on an option', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown
                data={dropdownDataGrouped}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );

        await user.click(screen.getByRole('listbox'));
        await user.click(screen.getAllByRole('option')[1]);
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should display nothing if data is not an array', () => {
        render(
            <Dropdown
                // @ts-expect-error testing invalid data
                data="not an array"
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(
            screen.queryByTestId('moonstone-dropdown')
        ).not.toBeInTheDocument();
    });

    it('should add "dropdown-disabled" class if data is empty', () => {
        render(
            <Dropdown
                data={[]}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(
            screen.queryByTestId('moonstone-dropdown').firstChild
        ).toHaveClass('moonstone-disabled');
    });

    it('should not add "dropdown-disabled" class if data is empty when "isDisabled=false" ', () => {
        render(
            <Dropdown
                data={[]}
                isDisabled={false}
                data-testid="moonstone-dropdown"
                onChange={() => 'testing'}
            />
        );
        expect(
            screen.queryByTestId('moonstone-dropdown').firstChild
        ).not.toHaveClass('moonstone-disabled');
    });

    it('should display the value', () => {
        render(<Dropdown data={dropdownData} value="4"/>);
        expect(
            queryByText(
                document.querySelector('.moonstone-typography'),
                'option 4'
            )
        ).toBeInTheDocument();
    });

    it('should display the images as small', async () => {
        const user = userEvent.setup();

        render(<Dropdown data={dropdownData} imageSize="small"/>);
        await user.click(screen.getByRole('listbox'));
        expect(screen.getByRole('list')).toHaveStyle('max-width: 264px');
    });

    it('should display the images as big', async () => {
        const user = userEvent.setup();

        render(<Dropdown data={dropdownData} imageSize="big"/>);
        await user.click(screen.getByRole('listbox'));
        expect(screen.getByRole('list')).toHaveStyle('max-width: 400px');
    });

    it('should display tags for multiple values', () => {
        render(<Dropdown data={dropdownData} values={['4']}/>);
        expect(
            queryByText(document.querySelector('.moonstone-tag'), 'option 4')
        ).toBeInTheDocument();
    });

    it('should show checkboxes for multiple select', async () => {
        const user = userEvent.setup();
        render(<Dropdown data={dropdownData} values={['4']}/>);

        await user.click(screen.getByRole('listbox'));
        expect(screen.queryAllByRole('checkbox')).not.toHaveLength(0);
    });

    it('should display the reset button', () => {
        const onClear = vi.fn();
        render(
            <Dropdown data={dropdownData} values={['4']} onClear={onClear}/>
        );
        expect(screen.getByRole('button', {name: /reset/i})).toHaveAttribute(
            'aria-label',
            'Reset'
        );
    });

    it('should call onClear when the reset button is clicked', async () => {
        const user = userEvent.setup();
        const onClear = vi.fn();
        render(
            <Dropdown data={dropdownData} values={['4']} onClear={onClear}/>
        );
        await user.click(screen.getByRole('button', {name: /reset/i}));
        expect(onClear).toHaveBeenCalled();
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds limit', async () => {
        const user = userEvent.setup();
        const dData = dropdownData;

        render(<Dropdown data={dData} data-testid="moonstone-dropdown"/>);

        expect(dropdownData.length).toBeGreaterThan(7); // Triggers auto-adding search input
        await user.click(screen.getByRole('listbox'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when autoSearch is enabled (hasSearch=undefined) and does not exceed limit', async () => {
        const user = userEvent.setup();
        const dData = dropdownData.slice(0, 7);

        render(<Dropdown data={dData} data-testid="moonstone-dropdown"/>);

        expect(dData.length).toBeLessThanOrEqual(7); // Does not trigger auto-adding search input
        await user.click(screen.getByRole('listbox'));
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds specified limit', async () => {
        const user = userEvent.setup();
        const limit = 4;
        const dData = dropdownData.slice(0, limit + 1);

        render(
            <Dropdown
                data={dData}
                data-testid="moonstone-dropdown"
                autoAddSearchLimit={limit}
            />
        );

        expect(dropdownData.length).toBeGreaterThan(limit); // Triggers auto-adding search input
        await user.click(screen.getByRole('listbox'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should show search input when hasSearch is enabled', async () => {
        const user = userEvent.setup();
        const dData = dropdownData.slice(0, 3);

        render(
            <Dropdown hasSearch data={dData} data-testid="moonstone-dropdown"/>
        );

        await user.click(screen.getByRole('listbox'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when hasSearch is disabled', async () => {
        const user = userEvent.setup();
        const dData = dropdownData;

        render(
            <Dropdown
                data={dData}
                data-testid="moonstone-dropdown"
                hasSearch={false}
            />
        );

        await user.click(screen.getByRole('listbox'));
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show auto-add search for grouped data', async () => {
        const user = userEvent.setup();
        const dData = dropdownDataGrouped;

        render(
            <Dropdown
                data={dData}
                data-testid="moonstone-dropdown"
                autoAddSearchLimit={3}
            />
        );
        await user.click(screen.getByRole('listbox'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });
});

describe('DropdownMenu', () => {
    it('should not display if there is no data', () => {
        render(
            // @ts-expect-error testing empty data
            <DropdownMenu
                isDisplayed
                data={[]}
                data-testid="moonstone-dropdownMenu"
            />
        );
        expect(
            screen.queryByTestId('moonstone-dropdownMenu')
        ).not.toBeInTheDocument();
    });
});

const TreeViewMenuSizes = ['minWidth', 'maxWidth', 'maxHeight'];

describe('TreeViewMenu', () => {
    const handleSelect = vi.fn();
    const onClose = vi.fn();

    it('should display', () => {
        render(<TreeViewMenu isDisplayed handleSelect={handleSelect} treeData={dropdownDataTree} onClose={onClose}/>);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should have a selected value', () => {
        render(
            <TreeViewMenu isDisplayed handleSelect={handleSelect} treeData={dropdownDataTree} value="a2" onClose={onClose}/>
        );
        expect(
            screen.getByRole('treeitem', {name: 'A-2 level1'})
        ).toHaveAttribute('aria-selected', 'true');
    });

    it('should have selected values', () => {
        render(
            <TreeViewMenu
                isDisplayed
                handleSelect={handleSelect}
                treeData={dropdownDataTree}
                values={['a2', 'a1']}
                onClose={onClose}
            />
        );
        expect(
            screen.getByRole('treeitem', {name: 'A-2 level1'})
        ).toHaveAttribute('aria-selected', 'true');
        expect(
            screen.getByRole('treeitem', {name: 'A-1 level1'})
        ).toHaveAttribute('aria-selected', 'true');
    });

    it('should have working search bar', async () => {
        const user = userEvent.setup();
        render(<TreeViewMenu isDisplayed hasSearch treeData={dropdownDataTree} handleSelect={handleSelect}/>);
        await user.type(screen.getByRole('searchbox'), 'test');
        expect(screen.getByRole('searchbox')).toHaveValue('test');
    });

    test.each(TreeViewMenuSizes)('should have the right size', size => {
        const props = {[size]: '50px'};
        render(
            <TreeViewMenu isDisplayed handleSelect={handleSelect} treeData={dropdownDataTree} onClose={onClose} {...props}/>
        );
        expect(screen.getByRole('list')).toHaveStyle(props);
    });
});
