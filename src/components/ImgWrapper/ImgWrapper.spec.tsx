import {render, screen} from '@testing-library/react';
import {ImgWrapper} from './ImgWrapper';

describe('ImgWrapper', () => {
    it('should render', () => {
        render(<ImgWrapper src="https://toto.jahia.com"/>);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://toto.jahia.com');
    });

    it('should display alt attribute', () => {
        render(<ImgWrapper src="https://toto.jahia.com" alt="extra"/>);
        expect(screen.getByAltText('extra')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<ImgWrapper data-testid="imgwrapper" src="https://toto.jahia.com" className="extra"/>);
        expect(screen.getByTestId('imgwrapper')).toHaveClass('extra');
    });

    it('should add extra attribute', () => {
        render(<ImgWrapper data-testid="imgwrapper" src="https://toto.jahia.com" data-custom="extra"/>);
        expect(screen.getByTestId('imgwrapper')).toHaveAttribute('data-custom', 'extra');
    });
});
