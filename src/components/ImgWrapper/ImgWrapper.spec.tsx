import { render, screen } from '@testing-library/react';

import { ImgWrapper } from './ImgWrapper';

describe('ImgWrapper', () => {
    it('should render', () => {
        render(<ImgWrapper alt="Jahia" src="https://toto.jahia.com"/>);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://toto.jahia.com');
    });

    it('should display alt attribute', () => {
        render(<ImgWrapper alt="extra" src="https://toto.jahia.com"/>);
        expect(screen.getByAltText('extra')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<ImgWrapper alt="" className="extra" data-testid="imgwrapper" src="https://toto.jahia.com"/>);
        expect(screen.getByTestId('imgwrapper')).toHaveClass('extra');
    });

    it('should warn when alt is missing, not when it is empty', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        render(<ImgWrapper alt="" src="https://toto.jahia.com"/>);
        expect(warn).not.toHaveBeenCalled();
        render(<ImgWrapper src="https://toto.jahia.com"/>);
        expect(warn).toHaveBeenCalledWith(expect.stringContaining('`alt`'));
        warn.mockRestore();
    });

    it('should add extra attribute', () => {
        render(<ImgWrapper alt="" data-custom="extra" data-testid="imgwrapper" src="https://toto.jahia.com"/>);
        expect(screen.getByTestId('imgwrapper')).toHaveAttribute('data-custom', 'extra');
    });
});
