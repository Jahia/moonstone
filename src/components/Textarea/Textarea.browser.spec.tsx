import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Textarea } from './index';

describe('Textarea keyboard', () => {
    it('reaches the textarea with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Textarea/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('updates the value and calls onChange when typing', async () => {
        const onChange = vi.fn();
        render(<Textarea onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('abc');
        expect(screen.getByRole('textbox')).toHaveValue('abc');
        expect(onChange).toHaveBeenCalledTimes(3);
    });

    it('inserts a new line with Enter instead of submitting the form', async () => {
        const onSubmit = vi.fn(event => event.preventDefault());
        render(
            <form onSubmit={onSubmit}>
                <Textarea defaultValue="a"/>
                <button type="submit">send</button>
            </form>,
        );
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{End}');
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard('b');
        expect(screen.getByRole('textbox')).toHaveValue('a\nb');
        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('skips a disabled textarea in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <Textarea isDisabled/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});
