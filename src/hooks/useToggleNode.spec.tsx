import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { onToggleNode } from './useToggleNode';

describe('onToggleNode', () => {
    type ToggleableDivProps = {
        isDisabled?: boolean;
        isOpen?: boolean;
        isClickable?: boolean;
    };

    const ToggleableDiv = ({ isDisabled = false, isOpen = false, isClickable = false }: ToggleableDivProps) => {
        const [label, setLabel] = useState('default');
        const [opened, setOpened] = useState(isOpen);
        const handleClick = isClickable ? () => setLabel('clicked') : undefined;
        const handleToggle = () => {
            setLabel('toggled');
            setOpened(!opened);
        };

        return (
            <div
                aria-disabled={isDisabled}
                aria-expanded={opened}
                data-testid="toggleable-div"
                {...onToggleNode(handleToggle, handleClick, isDisabled)}
            >
                {label}
            </div>
        );
    };

    it('should call onToggle when spacebar is pressed', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv isClickable/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Space]');
        expect(screen.getByText('toggled')).toBeInTheDocument();
    });

    it('should call onToggle when left arrow is pressed', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv isClickable/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowLeft]');
        expect(screen.getByText('toggled')).toBeInTheDocument();
    });

    it('should call onToggle when right arrow is pressed', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv isClickable/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowRight]');
        expect(screen.getByText('toggled')).toBeInTheDocument();
    });

    it('should call onClick when enter key is pressed & onclick is set', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv isClickable/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByText('clicked')).toBeInTheDocument();
    });

    it('should call onToggle when enter key is pressed & onclick is not set', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByText('toggled')).toBeInTheDocument();
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv isClickable isDisabled/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByText('default')).toBeInTheDocument();
    });

    it('should not call onToggle when disabled', async () => {
        const user = userEvent.setup();
        render(<ToggleableDiv isDisabled/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByText('default')).toBeInTheDocument();
    });
});
