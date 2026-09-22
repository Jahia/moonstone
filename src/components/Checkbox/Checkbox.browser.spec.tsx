import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { useState } from 'react';

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
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith(true);
        expect(screen.getByRole('checkbox')).toBeChecked();
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    });
});
