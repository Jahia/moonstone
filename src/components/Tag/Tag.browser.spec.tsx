import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Tag } from './Tag';

const renderTag = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Tag label="Alpha" value="alpha" onClick={onClick} {...props}/>
            <button type="button">after</button>
        </>,
    );
    return { onClick };
};

describe('Tag keyboard', () => {
    it('reaches the tag with Tab', async () => {
        renderTag();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Alpha' })).toHaveFocus();
    });

    it('activates the focused tag with Enter and passes its value', async () => {
        const { onClick } = renderTag();
        screen.getByRole('button', { name: 'Alpha' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick.mock.calls[0][1]).toBe('alpha');
    });

    it('activates the focused tag with Space', async () => {
        const { onClick } = renderTag();
        screen.getByRole('button', { name: 'Alpha' }).focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('removes the focused tag with Delete', async () => {
        const { onClick } = renderTag();
        screen.getByRole('button', { name: 'Alpha' }).focus();
        await userEvent.keyboard('{Delete}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('removes the focused tag with Backspace', async () => {
        const { onClick } = renderTag();
        screen.getByRole('button', { name: 'Alpha' }).focus();
        await userEvent.keyboard('{Backspace}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('skips a disabled tag in the tab sequence and does not activate it', async () => {
        const { onClick } = renderTag({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
        screen.getByRole('button', { name: 'Alpha' }).focus();
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard(' ');
        expect(onClick).not.toHaveBeenCalled();
    });
});
