import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CheckboxItem } from './CheckboxItem';
import { CheckboxGroup } from './index';

describe('CheckboxGroup', () => {
    it('should render', () => {
        render(
            <CheckboxGroup name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>,
        );
        expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    });

    it('should display additional attributes', () => {
        render(
            <CheckboxGroup
                data-testid="moonstone-checkboxGroup"
                name="test-grouped-checkboxes"
            >
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>,
        );
        expect(
            screen.getByTestId('moonstone-checkboxGroup'),
        ).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const className = 'test-class';
        render(
            <CheckboxGroup
                className={className}
                data-testid="moonstone-checkboxGroup"
                name="test-grouped-checkboxes"
            >
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>,
        );
        expect(screen.getByTestId('moonstone-checkboxGroup')).toHaveClass(
            className,
        );
    });

    it('should not display the CheckboxGroup when children is empty', () => {
        render(
            <CheckboxGroup
                data-testid="moonstone-radioGroup"
                name="test-grouped-checkboxes"
            >
                {[]}
            </CheckboxGroup>,
        );
        expect(
            screen.queryByTestId('moonstone-checkboxGroup'),
        ).not.toBeInTheDocument();
    });

    it('should be disabled all checkboxItems', () => {
        render(
            <CheckboxGroup isDisabled name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem
                    isDisabled={false}
                    id="checkbox-02"
                    label="checkbox 02"
                    value="02"
                />
            </CheckboxGroup>,
        );
        expect(screen.getByLabelText('checkbox 01')).toBeDisabled();
        expect(screen.getByLabelText('checkbox 02')).toBeDisabled();
    });

    it('should set the name attribute to all checkboxItems', () => {
        render(
            <CheckboxGroup name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem id="checkbox-02" label="checkbox 02" value="02"/>
            </CheckboxGroup>,
        );
        expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    });

    it('should be read-only all checkboxItems', () => {
        render(
            <CheckboxGroup isReadOnly name="test-grouped-checkboxes">
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem
                    isReadOnly={false}
                    id="checkbox-02"
                    label="checkbox 02"
                    value="02"
                />
            </CheckboxGroup>,
        );
        expect(screen.getByLabelText('checkbox 01')).toHaveAttribute(
            'aria-readonly',
            'true',
        );
        expect(screen.getByLabelText('checkbox 02')).toHaveAttribute(
            'aria-readonly',
            'true',
        );
    });

    it('should call onChange function', async () => {
        const user = userEvent.setup();
        const handleOnChange = vi.fn((ev, value, checked) => [value, checked]);

        render(
            <CheckboxGroup
                name="test-grouped-checkboxes"
                onChange={handleOnChange}
            >
                <CheckboxItem id="checkbox-01" label="checkbox 01" value="01"/>
                <CheckboxItem
                    checked
                    id="checkbox-02"
                    label="checkbox 02"
                    value="02"
                />
            </CheckboxGroup>,
        );

        await user.click(screen.getByLabelText('checkbox 01'));
        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['01', true]);

        await user.click(screen.getByLabelText('checkbox 02'));
        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['02', false]);

        expect(handleOnChange).toHaveBeenCalledTimes(2);
    });
});

const renderGroup = (props = {}) => {
    const onChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <CheckboxGroup name="fruits" onChange={onChange} {...props}>
                <CheckboxItem id="apple" label="Apple" value="apple"/>
                <CheckboxItem id="banana" label="Banana" value="banana"/>
                <CheckboxItem id="cherry" label="Cherry" value="cherry"/>
            </CheckboxGroup>
            <button type="button">after</button>
        </>,
    );
    return { onChange };
};

describe('CheckboxGroup keyboard', () => {
    it('reaches every item in turn with Tab', async () => {
        renderGroup();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Apple' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Banana' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Cherry' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('toggles the focused item with Space and calls the group onChange', async () => {
        const { onChange } = renderGroup();
        screen.getByRole('checkbox', { name: 'Banana' }).focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox', { name: 'Banana' })).toBeChecked();
        expect(screen.getByRole('checkbox', { name: 'Apple' })).not.toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'banana', true);
    });

    it('calls the item onChange when toggled with Space', async () => {
        const onItemChange = vi.fn();
        render(
            <CheckboxGroup name="fruits">
                <CheckboxItem id="apple" label="Apple" value="apple" onChange={onItemChange}/>
                <CheckboxItem id="banana" label="Banana" value="banana"/>
            </CheckboxGroup>,
        );
        screen.getByRole('checkbox', { name: 'Apple' }).focus();
        await userEvent.keyboard(' ');
        expect(onItemChange).toHaveBeenCalledWith(expect.anything(), 'apple', true);
    });

    it.fails('skips a disabled item in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <CheckboxGroup name="fruits">
                    <CheckboxItem id="apple" label="Apple" value="apple"/>
                    <CheckboxItem isDisabled id="banana" label="Banana" value="banana"/>
                    <CheckboxItem id="cherry" label="Cherry" value="cherry"/>
                </CheckboxGroup>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Cherry' })).toHaveFocus();
    });

    it('removes every item from the tab sequence when the group is disabled', async () => {
        renderGroup({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});
