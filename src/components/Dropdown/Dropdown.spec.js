import React from 'react';
import {queryByText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dropdown} from './index';
import {dropdownData, dropdownDataGrouped} from '~/data';
import {Love} from '~/icons/index';

describe('Dropdown', () => {
    it('should display', () => {
        render(<Dropdown data={dropdownData} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
    });

    it('should display icon', () => {
        render(<Dropdown data={dropdownData} icon={<Love data-testid="dropdown-icon"/>}/>);
        expect(screen.queryByTestId('dropdown-icon')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(
            <Dropdown className={testClassName} data={dropdownData} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveClass(testClassName);
    });

    it('should add additional attributes', () => {
        render(
            <Dropdown data-custom="test" data={dropdownData} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveAttribute('data-custom', 'test');
    });

    it('should add dropdown-disabled class if the dropdown is disabled', () => {
        render(
            <Dropdown isDisabled data={dropdownData} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.getByTestId('moonstone-dropdown').firstChild).toHaveClass('moonstone-disabled');
    });

    it('should not display the menu dropdown by default', () => {
        render(
            <Dropdown data={dropdownDataGrouped} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should display the menu dropdown when I click on the dropdown', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown data={dropdownDataGrouped} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );

        await user.click(screen.getByRole('dropdown'));
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should update searchbar when I click on the dropdown and start typing', async () => {
        const user = userEvent.setup();
        render(<Dropdown hasSearch data={dropdownDataGrouped} onChange={() => 'testing'}/>);

        await user.click(screen.getByRole('dropdown'));
        await user.type(screen.getByRole('search'), 'test');
        expect(screen.getByRole('search')).toHaveValue('test');
    });

    it('should call onChange when I select a value', async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();
        render(<Dropdown hasSearch label="select something" data={dropdownDataGrouped} values={['4']} onChange={onChange}/>);

        await user.click(screen.getByRole('dropdown'));
        await user.click(screen.getByText(/1/));
        expect(onChange).toHaveBeenCalled();
    });

    it('should close the menu dropdown when I click on an option', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown data={dropdownDataGrouped} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );

        await user.click(screen.getByRole('dropdown'));
        await user.click(screen.getAllByRole('option')[1]);
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should display nothing if data is not an array', () => {
        render(<Dropdown data="not an array" data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.queryByTestId('moonstone-dropdown')).not.toBeInTheDocument();
    });

    it('should add "dropdown-disabled" class if data is empty', () => {
        render(<Dropdown data={[]} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.queryByTestId('moonstone-dropdown').firstChild).toHaveClass('moonstone-disabled');
    });

    it('should not add "dropdown-disabled" class if data is empty when "isDisabled=false" ', () => {
        render(<Dropdown data={[]} isDisabled={false} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.queryByTestId('moonstone-dropdown').firstChild).not.toHaveClass('moonstone-disabled');
    });

    it('should display the value', () => {
        render(
            <Dropdown data={dropdownData} value="4"/>
        );
        expect(queryByText(document.querySelector('.moonstone-typography'), 'option 4')).toBeInTheDocument();
    });

    it('should display the images as small', async () => {
        const user = userEvent.setup();

        render(<Dropdown data={dropdownData} imageSize="small"/>);
        await user.click(screen.getByRole('dropdown'));
        expect(screen.getByRole('listbox')).toHaveStyle('max-width: 264px');
    });

    it('should display the images as big', async () => {
        const user = userEvent.setup();

        render(<Dropdown data={dropdownData} imageSize="big"/>);
        await user.click(screen.getByRole('dropdown'));
        expect(screen.getByRole('listbox')).toHaveStyle('max-width: 400px');
    });

    it('should display tags for multiple values', () => {
        render(
            <Dropdown data={dropdownData} values={['4']}/>
        );
        expect(queryByText(document.querySelector('.moonstone-tag'), 'option 4')).toBeInTheDocument();
    });

    it('should show checkboxes for multiple select', async () => {
        const user = userEvent.setup();
        render(
            <Dropdown data={dropdownData} values={['4']}/>
        );

        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryAllByRole('checkbox')).not.toHaveLength(0);
    });

    it('should display the reset button', () => {
        const onClear = jest.fn();
        render(<Dropdown data={dropdownData} values={['4']} onClear={onClear}/>);
        expect(screen.getByRole('button', {name: /reset/i})).toHaveAttribute('aria-label', 'Reset');
    });

    it('should call onClear when the reset button is clicked', async () => {
        const user = userEvent.setup();
        const onClear = jest.fn();
        render(<Dropdown data={dropdownData} values={['4']} onClear={onClear}/>);
        await user.click(screen.getByRole('button', {name: /reset/i}));
        expect(onClear).toHaveBeenCalled();
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds limit', async () => {
        const user = userEvent.setup();
        let dData = dropdownData;

        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown"/>
        );

        expect(dropdownData.length).toBeGreaterThan(7); // Triggers auto-adding search input
        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when autoSearch is enabled (hasSearch=undefined) and does not exceed limit', async () => {
        const user = userEvent.setup();
        let dData = dropdownData.slice(0, 7);

        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown"/>
        );

        expect(dData.length).toBeLessThanOrEqual(7); // Does not trigger auto-adding search input
        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds specified limit', async () => {
        const user = userEvent.setup();
        let limit = 4;
        let dData = dropdownData.slice(0, limit + 1);

        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown" autoAddSearchLimit={limit}/>
        );

        expect(dropdownData.length).toBeGreaterThan(limit); // Triggers auto-adding search input
        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should show search input when hasSearch is enabled', async () => {
        const user = userEvent.setup();
        let dData = dropdownData.slice(0, 3);

        render(
            <Dropdown hasSearch data={dData} data-testid="moonstone-dropdown"/>
        );

        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when hasSearch is disabled', async () => {
        const user = userEvent.setup();
        let dData = dropdownData;

        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown" hasSearch={false}/>
        );

        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show auto-add search for grouped data', async () => {
        const user = userEvent.setup();
        let dData = dropdownDataGrouped;

        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown" autoAddSearchLimit={3}/>
        );
        await user.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });
});
