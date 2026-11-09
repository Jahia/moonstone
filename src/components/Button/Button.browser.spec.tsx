import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { Button } from './index';
import { over, parse, ratio, TEXT, UI } from '~/__mocks__/contrast';

import '~/tokens/colors/colors.scss';

const renderButton = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Button label="Action" onClick={onClick} {...props}/>
            <button type="button">after</button>
        </>,
    );
    return { onClick };
};

describe('Button keyboard', () => {
    it('reaches the button with Tab', async () => {
        renderButton();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Action' })).toHaveFocus();
    });

    it('activates the focused button with Enter', async () => {
        const { onClick } = renderButton();
        screen.getByRole('button', { name: 'Action' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('activates the focused button with Space', async () => {
        const { onClick } = renderButton();
        screen.getByRole('button', { name: 'Action' }).focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('skips a disabled button in the tab sequence', async () => {
        renderButton({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('does not activate a disabled button with Enter or Space', async () => {
        const { onClick } = renderButton({ isDisabled: true });
        screen.getByRole('button', { name: 'Action' }).focus();
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard(' ');
        expect(onClick).not.toHaveBeenCalled();
    });
});

// The reversed background of moonstone is gray_dark (#293136)
const GRAY_DARK = parse('#293136');

const expectContrast = (button: HTMLElement) => {
    const style = getComputedStyle(button);
    const background = over(parse(style.backgroundColor), GRAY_DARK);
    expect(ratio(parse(style.color), background), 'text').toBeGreaterThanOrEqual(TEXT);
    // An outlined button has no fill: its border is its boundary against the page
    const border = parse(style.borderTopColor);
    if (parse(style.backgroundColor)[3] === 0 && border[3] > 0) {
        expect(ratio(over(border, GRAY_DARK), GRAY_DARK), 'border').toBeGreaterThanOrEqual(UI);
    }
};

describe.each([
    ['outlined', 'default'],
    ['outlined', 'accent'],
    ['outlined', 'danger'],
    ['ghost', 'default'],
    ['ghost', 'accent'],
    ['ghost', 'danger'],
] as const)('Button %s %s, reversed, contrast on gray_dark', (variant, color) => {
    const reversedButton = () => {
        render(
            <>
                <button type="button">away</button>
                <Button isReversed color={color} label="Action" variant={variant}/>
            </>,
        );
        return screen.getByRole('button', { name: 'Action' });
    };

    afterEach(async () => {
        await userEvent.keyboard('[/Space]');
    });

    it('at rest', async () => {
        const button = reversedButton();
        await userEvent.hover(screen.getByRole('button', { name: 'away' }));
        expect(button.matches(':hover')).toBe(false);
        expectContrast(button);
    });

    it('on hover', async () => {
        const button = reversedButton();
        await userEvent.hover(button);
        expect(button.matches(':hover')).toBe(true);
        expectContrast(button);
    });

    it('pressed with the pointer over it', async () => {
        const button = reversedButton();
        await userEvent.hover(button);
        button.focus();
        await userEvent.keyboard('[Space>]');
        expect(button.matches(':hover')).toBe(true);
        expect(button.matches(':active')).toBe(true);
        expectContrast(button);
    });

    it('pressed with the keyboard', async () => {
        const button = reversedButton();
        await userEvent.hover(screen.getByRole('button', { name: 'away' }));
        button.focus();
        await userEvent.keyboard('[Space>]');
        expect(button.matches(':hover')).toBe(false);
        expect(button.matches(':active')).toBe(true);
        expectContrast(button);
    });
});
