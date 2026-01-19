import {render, screen} from '@testing-library/react';
import {Thumbnail} from './Thumbnail';
import {Love} from '../../icons/components';

describe('Thumbnail', () => {
    it('should render fallback icon when no src provided', () => {
        render(<Thumbnail/>);
        const figure = document.querySelector('.moonstone-thumbnail');
        expect(figure).toBeInTheDocument();
        expect(figure?.querySelector('svg')).toBeInTheDocument();
    });

    it('should render image when src is a string', () => {
        render(<Thumbnail src="https://example.com/image.jpg" alt="Test image"/>);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
        expect(img).toHaveAttribute('alt', 'Test image');
    });

    it('should render React element when src is an element', () => {
        render(<Thumbnail src={<Love data-testid="custom-icon"/>}/>);
        expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('should apply default size class', () => {
        render(<Thumbnail/>);
        expect(document.querySelector('.moonstone-thumbnail_default')).toBeInTheDocument();
    });

    it('should apply small size class', () => {
        render(<Thumbnail size="small"/>);
        expect(document.querySelector('.moonstone-thumbnail_small')).toBeInTheDocument();
    });

    it('should apply preview variant class to image', () => {
        render(<Thumbnail src="https://example.com/image.jpg" alt="Test"/>);
        const img = screen.getByRole('img');
        expect(img).toHaveClass('moonstone-thumbnail_preview');
    });

    it('should apply icon variant class to image', () => {
        render(<Thumbnail src="https://example.com/image.jpg" alt="Test" variant="icon"/>);
        const img = screen.getByRole('img');
        expect(img).toHaveClass('moonstone-thumbnail_icon');
    });

    it('should apply custom className', () => {
        render(<Thumbnail className="custom-class"/>);
        expect(document.querySelector('.moonstone-thumbnail.custom-class')).toBeInTheDocument();
    });
});
