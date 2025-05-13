import {useState} from 'react';
import {onAccessibleClick} from './useAccessibleClick';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('useAccessibleClick', () => {
    type ClickableDivProps = {
        isDisabled?: boolean;
    };

    const ClickableDiv = ({isDisabled = false}: ClickableDivProps) => {
        const [label, setLabel] = useState('default');
        return (
            <div
                data-testid="clickable-div"
                aria-disabled={isDisabled}
                {...onAccessibleClick(() => setLabel('clicked'), isDisabled)}
            >
                {label}
            </div>
        );
    };

    it('should call onClick', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.click(screen.getByTestId('clickable-div'));
        expect(screen.queryByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick when spacebar is pressed', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Space]');
        expect(screen.queryByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick when enter key is pressed', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.queryByText('clicked')).toBeInTheDocument();
    });

    it('should add role button', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.click(screen.getByTestId('clickable-div'));
        expect(screen.queryByRole('button')).toBeInTheDocument();
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv isDisabled/>);
        await user.click(screen.getByTestId('clickable-div'));
        expect(screen.queryByText('default')).toBeInTheDocument();
    });
});
