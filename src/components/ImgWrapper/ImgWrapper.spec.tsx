import { render, screen } from '@testing-library/react';

import { ImgWrapper } from './ImgWrapper';

describe('ImgWrapper', () => {
    it('should render', () => {
        render(<ImgWrapper alt="Jahia" src="https://toto.jahia.com"/>);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://toto.jahia.com');
    });

    it('should require an alt text', () => {
        // @ts-expect-error alt is required
        render(<ImgWrapper src="https://toto.jahia.com"/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should display alt attribute', () => {
        render(<ImgWrapper alt="extra" src="https://toto.jahia.com"/>);
        expect(screen.getByAltText('extra')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<ImgWrapper alt="" className="extra" data-testid="imgwrapper" src="https://toto.jahia.com"/>);
        expect(screen.getByTestId('imgwrapper')).toHaveClass('extra');
    });

    it('should add extra attribute', () => {
        render(<ImgWrapper alt="" data-custom="extra" data-testid="imgwrapper" src="https://toto.jahia.com"/>);
        expect(screen.getByTestId('imgwrapper')).toHaveAttribute('data-custom', 'extra');
    });
});
