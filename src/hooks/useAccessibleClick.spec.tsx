import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { onAccessibleClick } from './useAccessibleClick';

describe('useAccessibleClick', () => {
    type ClickableDivProps = {
        isDisabled?: boolean;
    };

    const ClickableDiv = ({ isDisabled = false }: ClickableDivProps) => {
        const [label, setLabel] = useState('default');
        return (
            <div
                aria-disabled={isDisabled}
                data-testid="clickable-div"
                {...onAccessibleClick({ onClick: () => setLabel('clicked'), disabled: isDisabled })}
            >
                {label}
            </div>
        );
    };

    it('should call onClick', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.click(screen.getByTestId('clickable-div'));
        expect(screen.getByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick when spacebar is pressed', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Space]');
        expect(screen.getByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick when enter key is pressed', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByText('clicked')).toBeInTheDocument();
    });

    it('should call onClick once when enter key is held down', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<div data-testid="clickable-div" {...onAccessibleClick({ onClick })}/>);
        await user.keyboard('[Tab]');
        await user.keyboard('{Enter>3/}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should call onClick on Space keyup only', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<div {...onAccessibleClick({ onClick })}/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[Space>]');
        expect(onClick).not.toHaveBeenCalled();
        await user.keyboard('[/Space]');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick on a Space keyup whose keydown happened elsewhere', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(
            <>
                <button type="button">before</button>
                <div data-testid="clickable-div" {...onAccessibleClick({ onClick })}/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await user.keyboard('[Space>]');
        screen.getByTestId('clickable-div').focus();
        await user.keyboard('[/Space]');
        expect(onClick).not.toHaveBeenCalled();
    });

    it('should leave the keydown of a nested link to the link', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(
            <div {...onAccessibleClick({ onClick })}>
                <a href="#nested">nested link</a>
            </div>,
        );
        screen.getByRole('link').focus();
        // The document sees the keydown once React has handled it
        const keydown = vi.fn((e: KeyboardEvent) => e.defaultPrevented);
        document.addEventListener('keydown', keydown);
        await user.keyboard('[Enter]');
        document.removeEventListener('keydown', keydown);
        expect(keydown).toHaveReturnedWith(false);
    });

    it('should add role button', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv/>);
        await user.click(screen.getByTestId('clickable-div'));
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        render(<ClickableDiv isDisabled/>);
        await user.click(screen.getByTestId('clickable-div'));
        expect(screen.getByText('default')).toBeInTheDocument();
    });
});
