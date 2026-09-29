import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { ButtonGroup } from './index';
import { Button } from '~/components/Button';

const renderGroup = () => {
    const onOne = vi.fn();
    const onTwo = vi.fn();
    const onThree = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ButtonGroup>
                <Button label="one" onClick={onOne}/>
                <Button label="two" onClick={onTwo}/>
                <Button label="three" onClick={onThree}/>
            </ButtonGroup>
        </>,
    );
    return { onOne, onTwo, onThree };
};

describe('ButtonGroup keyboard', () => {
    it('reaches every button of the group in order with Tab', async () => {
        renderGroup();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'one' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'two' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'three' })).toHaveFocus();
    });

    it('activates only the focused button with Enter', async () => {
        const { onOne, onTwo, onThree } = renderGroup();
        screen.getByRole('button', { name: 'two' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onTwo).toHaveBeenCalledTimes(1);
        expect(onOne).not.toHaveBeenCalled();
        expect(onThree).not.toHaveBeenCalled();
    });

    it('activates the focused button with Space', async () => {
        const { onThree } = renderGroup();
        screen.getByRole('button', { name: 'three' }).focus();
        await userEvent.keyboard(' ');
        expect(onThree).toHaveBeenCalledTimes(1);
    });
});
