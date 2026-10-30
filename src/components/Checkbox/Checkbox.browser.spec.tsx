import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { Checkbox } from './index';

const IndeterminateCheckbox = ({ onChange }: { readonly onChange: (checked: boolean) => void }) => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    return (
        <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            value="mixed"
            onChange={(_event, _value, nextChecked) => {
                setChecked(nextChecked);
                setIndeterminate(false);
                onChange(nextChecked);
            }}
        />
    );
};

describe('Checkbox keyboard', () => {
    it('reaches the checkbox with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Checkbox value="a"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox')).toHaveFocus();
    });

    it('checks the focused checkbox with Space and calls onChange', async () => {
        const onChange = vi.fn();
        render(<Checkbox value="a" onChange={onChange}/>);
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox')).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'a', true);
    });

    it('unchecks a checked checkbox with Space', async () => {
        const onChange = vi.fn();
        render(<Checkbox defaultChecked value="a" onChange={onChange}/>);
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox')).not.toBeChecked();
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'a', false);
    });

    it('skips a disabled checkbox in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <Checkbox isDisabled value="a"/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('becomes checked with Space when indeterminate', async () => {
        const onChange = vi.fn();
        render(<IndeterminateCheckbox onChange={onChange}/>);
        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith(true);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});

describe('Checkbox pointer', () => {
    it.each(['default', 'big'] as const)('checks with a click 1px inside the 24px target around a %s box', async (size) => {
        render(<div style={{ padding: 8 }}><Checkbox aria-label="Accept" size={size} value="a"/></div>);
        const checkbox = screen.getByRole('checkbox');
        const { width, height } = checkbox.getBoundingClientRect();
        await userEvent.click(checkbox, { position: { x: ((width - 24) / 2) + 1, y: ((height - 24) / 2) + 1 }, force: true });
        expect(checkbox).toBeChecked();
    });
});
