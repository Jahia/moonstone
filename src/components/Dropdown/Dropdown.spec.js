import React from 'react';
import {queryByText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dropdown} from './index';
import {dropdownData, dropdownDataGrouped} from '~/data';

describe('Dropdown', () => {
    it('should display', () => {
        render(<Dropdown data={dropdownData} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
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

    it('should display the menu dropdown when I click on the dropdown', () => {
        render(
            <Dropdown data={dropdownDataGrouped} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );

        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should close the menu dropdown when I click on an option', () => {
        render(
            <Dropdown data={dropdownDataGrouped} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );

        userEvent.click(screen.getByRole('dropdown'));
        userEvent.click(screen.getAllByRole('option')[1]);
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

    it('should display tags for multiple values', () => {
        render(
            <Dropdown data={dropdownData} values={['4']}/>
        );
        expect(queryByText(document.querySelector('.moonstone-tag'), 'option 4')).toBeInTheDocument();
    });

    it('should show checkboxes for multiple select', () => {
        render(
            <Dropdown data={dropdownData} values={['4']}/>
        );

        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryAllByRole('checkbox')).not.toHaveLength(0);
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds limit', () => {
        let dData = dropdownData;
        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown"/>
        );
        expect(dropdownData.length).toBeGreaterThan(7); // Triggers auto-adding search input
        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when autoSearch is enabled (hasSearch=undefined) and does not exceed limit', () => {
        let dData = dropdownData.slice(0, 7);
        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown"/>
        );
        expect(dData.length).toBeLessThanOrEqual(7); // Does not trigger auto-adding search input
        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds specified limit', () => {
        let limit = 4;
        let dData = dropdownData.slice(0, limit + 1);
        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown" autoAddSearchLimit={limit}/>
        );
        expect(dropdownData.length).toBeGreaterThan(limit); // Triggers auto-adding search input
        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should show search input when hasSearch is enabled', () => {
        let dData = dropdownData.slice(0, 3);
        render(
            <Dropdown hasSearch data={dData} data-testid="moonstone-dropdown"/>
        );
        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when hasSearch is disabled', () => {
        let dData = dropdownData;
        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown" hasSearch={false}/>
        );
        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show auto-add search for grouped data', () => {
        let dData = dropdownDataGrouped;
        render(
            <Dropdown data={dData} data-testid="moonstone-dropdown" autoAddSearchLimit={3}/>
        );
        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });
});
