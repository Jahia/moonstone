import {render, screen} from '@testing-library/react';
import {IconTextIcon} from './index';
import {Love} from '~/icons/index';

describe('IconTextIcon', () => {
    it('should display', () => {
        render(<IconTextIcon data-testid="moonstone-IconTextIcon"/>);
        expect(screen.getByTestId('moonstone-IconTextIcon')).toBeInTheDocument();
    });

    it('should have extra classname', () => {
        render(<IconTextIcon className="extra" data-testid="moonstone-IconTextIcon"/>);
        expect(screen.getByTestId('moonstone-IconTextIcon')).toHaveClass('extra');
    });

    it('should display iconStart', () => {
        render(<IconTextIcon iconStart={<Love data-testid="moonstone-IconTextIcon_iconStart"/>}/>);
        expect(screen.getByTestId('moonstone-IconTextIcon_iconStart')).toBeInTheDocument();
    });

    it('should display iconEnd', () => {
        render(<IconTextIcon iconEnd={<Love data-testid="moonstone-IconTextIcon_iconEnd"/>}/>);
        expect(screen.getByTestId('moonstone-IconTextIcon_iconEnd')).toBeInTheDocument();
    });
});
