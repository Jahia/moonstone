import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioGroup } from './index';
import { RadioItem } from './RadioItem';

const requiredProps = {
    name: 'test-name',
};

describe('RadioGroup', () => {
    it('should render', () => {
        render(
            <RadioGroup {...requiredProps}>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getAllByRole('radio')).toHaveLength(2);
    });

    it('should display additional attributes', () => {
        render(
            <RadioGroup
                {...requiredProps}
                data-testid="moonstone-radioGroup"
            >
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getByTestId('moonstone-radioGroup')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const className = 'test-class';
        render(
            <RadioGroup
                {...requiredProps}
                className={className}
                data-testid="moonstone-radioGroup"
            >
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getByTestId('moonstone-radioGroup')).toHaveClass(
            className,
        );
    });

    it('should not display the RadioGroup when children is empty', () => {
        render(
            <RadioGroup {...requiredProps} data-testid="moonstone-radioGroup">{[]}</RadioGroup>,
        );
        expect(
            screen.queryByTestId('moonstone-radioGroup'),
        ).not.toBeInTheDocument();
    });

    it('should not display the RadioGroup when children is only one element', () => {
        render(
            // @ts-expect-error testing with one element
            <RadioGroup {...requiredProps} data-testid="moonstone-radioGroup">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
            </RadioGroup>,
        );
        expect(
            screen.queryByTestId('moonstone-radioGroup'),
        ).not.toBeInTheDocument();
    });

    it('should set the first item as selected when no value or defaultValue is provided', () => {
        render(
            <RadioGroup {...requiredProps}>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getAllByRole('radio')[0]).toBeChecked();
        expect(screen.getAllByRole('radio')[1]).not.toBeChecked();
    });

    it('should be disabled', () => {
        render(
            <RadioGroup {...requiredProps} isDisabled>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getByLabelText('radio 01')).toBeDisabled();
        expect(screen.getByLabelText('radio 02')).toBeDisabled();
    });

    it('should be read-only', () => {
        render(
            <RadioGroup {...requiredProps} isReadOnly>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getByLabelText('radio 01')).toHaveAttribute(
            'aria-readonly',
            'true',
        );
        expect(screen.getByLabelText('radio 02')).toHaveAttribute(
            'aria-readonly',
            'true',
        );
    });
});

describe('UnControlledRadioGroup', () => {
    it('should have specified defaultValue', () => {
        render(
            <RadioGroup {...requiredProps} defaultValue="02">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );

        expect(screen.getByLabelText('radio 01')).not.toBeChecked();
        expect(screen.getByLabelText('radio 02')).toBeChecked();
    });

    it('should update specified defaultValue', async () => {
        const user = userEvent.setup();

        render(
            <RadioGroup {...requiredProps} defaultValue="02">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        await user.click(screen.getByLabelText('radio 01'));

        expect(screen.getByLabelText('radio 01')).toBeChecked();
        expect(screen.getByLabelText('radio 02')).not.toBeChecked();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <RadioGroup
                {...requiredProps}
                defaultValue="02"
                onChange={handleChange}
            >
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        await user.click(screen.getByLabelText('radio 01'));

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledRadioGroup', () => {
    it('should display specified value', () => {
        render(
            <RadioGroup {...requiredProps} value="02">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getByLabelText('radio 01')).not.toBeChecked();
        expect(screen.getByLabelText('radio 02')).toBeChecked();
    });

    it('should set the first item as selected when there is no value', () => {
        render(
            <RadioGroup {...requiredProps}>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>,
        );
        expect(screen.getByLabelText('radio 01')).toBeChecked();
        expect(screen.getByLabelText('radio 02')).not.toBeChecked();
    });
});

const renderGroup = (props = {}) => {
    const onChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <RadioGroup name="size" onChange={onChange} {...props}>
                <RadioItem id="small" label="Small" value="small"/>
                <RadioItem id="medium" label="Medium" value="medium"/>
                <RadioItem id="large" label="Large" value="large"/>
            </RadioGroup>
            <button type="button">after</button>
        </>,
    );
    return { onChange };
};

describe('RadioGroup keyboard', () => {
    it('enters the group on the checked item with Tab', async () => {
        renderGroup({ defaultValue: 'medium' });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('radio', { name: 'Medium' })).toHaveFocus();
    });

    it('enters the group on the first item with Tab when nothing is preselected', async () => {
        renderGroup();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('radio', { name: 'Small' })).toHaveFocus();
    });

    it('leaves the group with a single Tab', async () => {
        renderGroup({ defaultValue: 'small' });
        screen.getByRole('radio', { name: 'Small' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('moves to and checks the next item with ArrowDown', async () => {
        const { onChange } = renderGroup({ defaultValue: 'small' });
        screen.getByRole('radio', { name: 'Small' }).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('radio', { name: 'Medium' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Medium' })).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('moves to and checks the next item with ArrowRight', async () => {
        renderGroup({ defaultValue: 'small' });
        screen.getByRole('radio', { name: 'Small' }).focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(screen.getByRole('radio', { name: 'Medium' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Medium' })).toBeChecked();
    });

    it('moves to and checks the previous item with ArrowUp', async () => {
        renderGroup({ defaultValue: 'medium' });
        screen.getByRole('radio', { name: 'Medium' }).focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('radio', { name: 'Small' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Small' })).toBeChecked();
    });

    it('moves to and checks the previous item with ArrowLeft', async () => {
        renderGroup({ defaultValue: 'medium' });
        screen.getByRole('radio', { name: 'Medium' }).focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(screen.getByRole('radio', { name: 'Small' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Small' })).toBeChecked();
    });

    it('wraps from the last item to the first with ArrowDown', async () => {
        renderGroup({ defaultValue: 'large' });
        screen.getByRole('radio', { name: 'Large' }).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('radio', { name: 'Small' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Small' })).toBeChecked();
    });

    it('wraps from the first item to the last with ArrowUp', async () => {
        renderGroup({ defaultValue: 'small' });
        screen.getByRole('radio', { name: 'Small' }).focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('radio', { name: 'Large' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Large' })).toBeChecked();
    });

    it('checks the focused unchecked item with Space', async () => {
        const { onChange } = renderGroup({ defaultValue: 'small' });
        screen.getByRole('radio', { name: 'Large' }).focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('radio', { name: 'Large' })).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('skips a disabled item when moving with the arrows', async () => {
        render(
            <RadioGroup defaultValue="small" name="size">
                <RadioItem id="small" label="Small" value="small"/>
                <RadioItem isDisabled id="medium" label="Medium" value="medium"/>
                <RadioItem id="large" label="Large" value="large"/>
            </RadioGroup>,
        );
        screen.getByRole('radio', { name: 'Small' }).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('radio', { name: 'Large' })).toHaveFocus();
        expect(screen.getByRole('radio', { name: 'Large' })).toBeChecked();
    });
});
