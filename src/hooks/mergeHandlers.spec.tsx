import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {mergeHandlers} from './mergeHandlers';

describe('mergeHandlers', () => {
    const Mock = (props: React.HTMLAttributes<HTMLDivElement>) => {
        return (
            <div data-testid="test" role="button" {...props}> label</div>
        );
    };

    it('should call all merged onClick handlers when multiple are provided', async () => {
        const user = userEvent.setup();
        const firstHandler = vi.fn();
        const secondHandler = vi.fn();

        render(<Mock {...mergeHandlers({onClick: firstHandler}, {onClick: secondHandler})}/>);

        await user.click(screen.getByTestId('test'));
        expect(firstHandler).toHaveBeenCalled();
        expect(secondHandler).toHaveBeenCalled();
    });

    it('should call the onClick handler when only one is provided', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Mock {...mergeHandlers({onClick: onClick})}/>);

        await user.click(screen.getByTestId('test'));
        expect(onClick).toHaveBeenCalled();
    });

    it('should stop calling subsequent handlers if event.preventDefault() is called', async () => {
        const user = userEvent.setup();
        const firstHandler = vi.fn(e => e.preventDefault());
        const secondHandler = vi.fn();

        render(<Mock {...mergeHandlers({onClick: firstHandler}, {onClick: secondHandler})}/>);

        await user.click(screen.getByTestId('test'));
        expect(firstHandler).toHaveBeenCalled();
        expect(secondHandler).not.toHaveBeenCalled();
    });
});
