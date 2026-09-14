import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import {usePresence} from './usePresence';

describe('usePresence', () => {
    const exitDuration = 50;

    const Harness = ({isOpen}: {readonly isOpen: boolean}) => {
        const {isPresent, state} = usePresence(isOpen, exitDuration);
        return isPresent ? <div data-state={state}>content</div> : null;
    };

    it('should render nothing when closed from the start', () => {
        render(<Harness isOpen={false}/>);
        expect(screen.queryByText('content')).not.toBeInTheDocument();
    });

    it('should render in the open state when open', () => {
        render(<Harness isOpen/>);
        expect(screen.getByText('content')).toHaveAttribute('data-state', 'open');
    });

    it('should stay present in the closed state while exiting, then unmount', async () => {
        const {rerender} = render(<Harness isOpen/>);

        rerender(<Harness isOpen={false}/>);
        expect(screen.getByText('content')).toHaveAttribute('data-state', 'closed');

        await waitForElementToBeRemoved(() => screen.queryByText('content'));
    });

    it('should return to the open state when reopened during the exit', () => {
        const {rerender} = render(<Harness isOpen/>);

        rerender(<Harness isOpen={false}/>);
        expect(screen.getByText('content')).toHaveAttribute('data-state', 'closed');

        rerender(<Harness isOpen/>);
        expect(screen.getByText('content')).toHaveAttribute('data-state', 'open');
    });
});
