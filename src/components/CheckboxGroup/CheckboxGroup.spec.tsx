import React from 'react';
import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import {CheckboxGroup} from './index';
import {CheckboxItem} from './CheckboxItem';

describe('CheckboxGroup', () => {
    it('should render', () => {
        render(
            <CheckboxGroup name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>
        );
        expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    });

    it('should display additional attributes', () => {
        render(
            <CheckboxGroup data-testid="moonstone-checkboxGroup" name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>
        );
        expect(screen.getByTestId('moonstone-checkboxGroup')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const className = 'test-class';
        render(
            <CheckboxGroup className={className} data-testid="moonstone-checkboxGroup" name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>
        );
        expect(screen.getByTestId('moonstone-checkboxGroup')).toHaveClass(className);
    });

    it('should not display the CheckboxGroup when children is empty', () => {
        render(<CheckboxGroup data-testid="moonstone-radioGroup" name="test-grouped-checkboxes">{[]}</CheckboxGroup>);
        expect(screen.queryByTestId('moonstone-checkboxGroup')).not.toBeInTheDocument();
    });

    it('should be disabled all checkboxItems', () => {
        render(
            <CheckboxGroup isDisabled name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem isDisabled={false} id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>
        );
        expect(screen.getByLabelText('checkbox 01')).toBeDisabled();
        expect(screen.getByLabelText('checkbox 02')).toBeDisabled();
    });

    it('should set the name attribute to all checkboxItems', () => {
        render(
            <CheckboxGroup name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>
        );
        expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    });

    it('should be read-only all checkboxItems', () => {
        render(
            <CheckboxGroup isReadOnly name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02" isReadOnly={false}/>
            </CheckboxGroup>
        );
        expect(screen.getByLabelText('checkbox 01')).toHaveAttribute('aria-readonly', 'true');
        expect(screen.getByLabelText('checkbox 02')).toHaveAttribute('aria-readonly', 'true');
    });

    it('should call onChange function', () => {
        const handleOnChange = jest.fn((ev, value, checked) => [value, checked]);
        render(
            <CheckboxGroup name="test-grouped-checkboxes" onChange={handleOnChange}>
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem checked id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>
        );
        userEvent.click(screen.getByLabelText('checkbox 01'));
        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['01', true]);

        userEvent.click(screen.getByLabelText('checkbox 02'));
        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['02', false]);

        expect(handleOnChange).toHaveBeenCalledTimes(2);
    });
});
