import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Banner } from '~/components';
import { Button } from '~/components/Button';

const renderBanner = () => {
    const onRetry = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Banner title="Something went wrong" variant="danger">
                The save failed. <Button label="Retry" onClick={onRetry}/>
            </Banner>
        </>,
    );
    return { onRetry };
};

describe('Banner keyboard', () => {
    it('reaches an action button placed in the banner with Tab', async () => {
        renderBanner();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Retry' })).toHaveFocus();
    });

    it('activates the focused banner action with Enter', async () => {
        const { onRetry } = renderBanner();
        screen.getByRole('button', { name: 'Retry' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onRetry).toHaveBeenCalledTimes(1);
    });

    it('does not trap focus inside the banner', async () => {
        renderBanner();
        screen.getByRole('button', { name: 'Retry' }).focus();
        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
        expect(screen.getByRole('button', { name: 'before' })).toHaveFocus();
    });
});
