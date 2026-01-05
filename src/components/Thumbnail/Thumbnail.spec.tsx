import {render, screen} from '@testing-library/react';
import {Love} from '~/icons';

import {Thumbnail} from './index';

describe('Thumbnail', () => {
    it('should render fallback icon when no src is provided', () => {
        render(<Thumbnail data-testid="thumbnail"/>);
        expect(screen.getByTestId('thumbnail')).toBeInTheDocument();
    });

    it('should render as a div element', () => {
        const {container} = render(<Thumbnail/>);
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('should render img when src is a URL string', () => {
        const {container} = render(<Thumbnail src="test-image.png" alt="test image"/>);
        expect(container.querySelector('img[src="test-image.png"]')).toBeInTheDocument();
    });

    it('should render custom element when src is a ReactElement', () => {
        const {container} = render(<Thumbnail src={<Love id="custom-icon"/>}/>);
        expect(container.querySelector('#custom-icon')).toBeInTheDocument();
    });

    it('should apply preview variant class for img', () => {
        const {container} = render(<Thumbnail src="test.png" alt="test" variant="preview"/>);
        expect(container.querySelector('.moonstone-thumbnail_preview')).toBeInTheDocument();
    });

    it('should apply icon variant class for img', () => {
        const {container} = render(<Thumbnail src="test.png" alt="test" variant="icon"/>);
        expect(container.querySelector('.moonstone-thumbnail_icon')).toBeInTheDocument();
    });

    it('should apply default size class', () => {
        const {container} = render(<Thumbnail size="default"/>);
        expect(container.querySelector('.moonstone-thumbnail_default')).toBeInTheDocument();
    });

    it('should apply small size class', () => {
        const {container} = render(<Thumbnail size="small"/>);
        expect(container.querySelector('.moonstone-thumbnail_small')).toBeInTheDocument();
    });

    it('should use alt attribute on img', () => {
        render(<Thumbnail src="test.png" alt="test alt"/>);
        expect(screen.getByAltText('test alt')).toBeInTheDocument();
    });

    it('should apply additional className', () => {
        const {container} = render(<Thumbnail className="extra-class"/>);
        expect(container.querySelector('.moonstone-thumbnail.extra-class')).toBeInTheDocument();
    });

    it('should use custom data-testid', () => {
        render(<Thumbnail data-testid="custom-testid"/>);
        expect(screen.getByTestId('custom-testid')).toBeInTheDocument();
    });
});
