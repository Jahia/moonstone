import {render, screen} from '@testing-library/react';
import {Pill} from './index';
import {Cloud} from '~/icons';

describe('Pill', () => {
    it('should display content', () => {
        render(<Pill content="Say my name"/>);
        expect(screen.getByText('Say my name')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(<Pill data-testid="moonstone-listItemChip" className={testClassName} content="Say my name"/>);
        expect(screen.getByTestId('moonstone-listItemChip')).toHaveClass(testClassName);
    });

    it('should add additional attribute', () => {
        render(<Pill data-testid="moonstone-listItemChip" content="Say my name"/>);
        expect(screen.getByTestId('moonstone-listItemChip')).toBeInTheDocument();
    });

    it('should display an icon when content is an icon element', () => {
        render(<Pill data-testid="moonstone-pill" content={<Cloud data-testid="moonstone-pill-icon"/>}/>);
        expect(screen.getByTestId('moonstone-pill-icon')).toBeInTheDocument();
    });

    it('should still display label and warn when using the deprecated label prop', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => vi.fn());
        render(<Pill label="Say my name"/>);
        expect(screen.getByText('Say my name')).toBeInTheDocument();
        expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('deprecated'));
        warnSpy.mockRestore();
    });
});
