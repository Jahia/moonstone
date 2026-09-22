import { render, screen } from '@testing-library/react';

import { Banner } from '~/components';

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
