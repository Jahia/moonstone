import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Banner } from '~/components';
import { Button } from '~/components/Button';

describe('Banner', () => {
    it('should display additional className', () => {
        render(<Banner className="extra" data-testid="banner" title="Test banner">Banner content</Banner>);
        expect(screen.getByTestId('banner')).toHaveClass('extra');
    });

    it('should display children', () => {
        render(<Banner data-testid="banner" title="Test banner">Banner content</Banner>);
        expect(screen.getByText('Banner content')).toBeInTheDocument();
    });

    it('should display title', () => {
        render(<Banner data-testid="banner" title="Test banner">Banner content</Banner>);
        expect(screen.getByText('Test banner')).toBeInTheDocument();
    });

    const bannerVariants = ['neutral', 'info', 'warning', 'danger'] as const;
    test.each(bannerVariants)(
        'should use the specified variant %s',
        (variant) => {
            render(
                <Banner
                    data-testid="moonstone-banner"
                    title="Test banner"
                    variant={variant}
                >
                    Banner content
                </Banner>,
            );
            expect(screen.getByTestId('moonstone-banner')).toHaveClass(
                `moonstone-banner_${variant}`,
            );
        },
    );
});

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
