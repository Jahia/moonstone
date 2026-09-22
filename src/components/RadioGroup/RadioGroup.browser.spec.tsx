import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { RadioGroup } from './index';
import { RadioItem } from './RadioItem';

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
