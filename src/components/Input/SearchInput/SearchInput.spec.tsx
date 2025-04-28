import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {SearchInput} from './index';
import {Love} from '~/icons';

describe('SearchInput', () => {
    it('should render', () => {
        render(<SearchInput data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeInTheDocument();
    });

    it('should not display icon as the component has already one', () => {
        render(<SearchInput icon={<Love data-testid="test-icon"/>}/>);
        expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });

    it('should have the role search', () => {
        render(<SearchInput/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });
});

describe('UncontrolledInput', () => {
    it('should reset field when we click on the reset button of the search input', async () => {
        const user = userEvent.setup();

        render(
            <SearchInput
                data-testid="moonstone-input"
                defaultValue="test-default-value"
                variant="search"
            />
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(screen.getByTestId('moonstone-input')).toHaveValue('');
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <SearchInput
                variant="search"
                defaultValue="test-default-value"
                onClear={handleClear}
            />
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledInput', () => {
    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <SearchInput
                variant="search"
                value="test-value"
                onChange={() => null}
                onClear={handleClear}
            />
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});
