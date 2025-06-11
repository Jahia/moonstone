import {useState} from 'react';
import {onAccessibleLink} from './onAccessibleLink';
import {fireEvent, render, screen} from '@testing-library/react';

describe('onAccessibleLink', () => {
    type LinkDivProps = {
        isDisabled?: boolean;
        role?: string;
    };

    const LinkDiv = ({isDisabled = false, role = 'button'}: LinkDivProps) => {
        const [label, setLabel] = useState('default');
        const handleClick = () => setLabel('clicked');

        return (
            <div
                data-testid="link-div"
                aria-disabled={isDisabled}
                role={role}
                {...onAccessibleLink(handleClick, isDisabled)}
            >
                {label}
            </div>
        );
    };

    it('should call onClick when alt key is pressed', async () => {
        render(<LinkDiv/>);
        fireEvent.click(screen.queryByTestId('link-div'), {altKey: true});
        expect(screen.queryByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick when ctrl key is pressed', async () => {
        render(<LinkDiv/>);
        fireEvent.click(screen.queryByTestId('link-div'), {ctrlKey: true});
        expect(screen.queryByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick when cmd key is pressed', async () => {
        render(<LinkDiv/>);
        fireEvent.click(screen.queryByTestId('link-div'), {metaKey: true});
        expect(screen.queryByText('clicked')).toBeInTheDocument();
    });

    it('should not call onClick when disabled', async () => {
        render(<LinkDiv isDisabled/>);
        fireEvent.click(screen.queryByTestId('link-div'), {altKey: true});
        expect(screen.queryByText('default')).toBeInTheDocument();
    });

    it('should have role link', () => {
        render(<LinkDiv/>);
        expect(screen.queryByTestId('link-div')).toHaveRole('link');
    });
});
