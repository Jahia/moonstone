import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchContextInput } from './index';
import { Dropdown } from '~/components';
import { dropdownData } from '~/data/dropdownData';

const requiredProps = {
    searchContext: (
        <Dropdown
            data={dropdownData}
            data-testid="test-searchContext"
            value=""
        />
    ),
};

describe('SearchContextInput', () => {
    it('should render', () => {
        render(<SearchContextInput {...requiredProps} data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeInTheDocument();
    });

    it('should have the role search', () => {
        render(<SearchContextInput {...requiredProps}/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });

    it('should always have big size', async () => {
        const user = userEvent.setup();

        render(<SearchContextInput {...requiredProps} data-testid="moonstone-input"/>);
        await user.type(screen.getByTestId('moonstone-input'), 'type a value');

        expect(screen.getByDisplayValue('type a value')).toBeInTheDocument();
    });

    it('should display search context', () => {
        render(
            <SearchContextInput {...requiredProps}/>,
        );
        expect(screen.getByTestId('test-searchContext')).toBeInTheDocument();
    });
});

describe('UncontrolledSearchContextInput', () => {
    it('should reset field when we click on the reset button of the search input', async () => {
        const user = userEvent.setup();

        render(
            <SearchContextInput
                {...requiredProps}
                data-testid="moonstone-input"
                defaultValue="test-default-value"
            />,
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(screen.getByTestId('moonstone-input')).toHaveValue('');
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <SearchContextInput
                {...requiredProps}
                data-testid="moonstone-input"
                defaultValue="test-default-value"
                onChange={handleChange}
            />,
        );
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <SearchContextInput
                {...requiredProps}
                defaultValue="test-default-value"
                onClear={handleClear}
            />,
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledSearchContextInput', () => {
    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <SearchContextInput
                {...requiredProps}
                data-testid="moonstone-input"
                value="test-value"
                onChange={handleChange}
            />,
        );
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <SearchContextInput
                {...requiredProps}
                value="test-value"
                onChange={() => null}
                onClear={handleClear}
            />,
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

const contexts = [
    { label: 'Global users', value: 'globalUser' },
    { label: 'Media', value: 'media' },
    { label: 'Site', value: 'site' },
];

const renderInput = () => {
    const onContextChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <SearchContextInput
                defaultValue="abc"
                searchContext={<Dropdown data={contexts} label="Global users" value="globalUser" onChange={onContextChange}/>}
            />
        </>,
    );
    return { onContextChange };
};

const getTrigger = () => screen.getByRole('listbox', { name: 'Global users' });
const findOption = (name: string) => screen.findByRole('list').then(list => within(list).getByRole('option', { name }));

describe('SearchContextInput keyboard', () => {
    it('reaches the context selector then the search box with Tab', async () => {
        renderInput();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getTrigger()).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it('opens the context menu with Enter', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        expect(await findOption('Media')).toBeVisible();
    });

    it.fails('opens the context menu with Space', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard(' ');
        expect(await findOption('Media')).toBeVisible();
    });

    it.fails('opens the context menu with ArrowDown', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await findOption('Media')).toBeVisible();
    });

    it.fails('moves focus to the selected option when the menu opens', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        expect(await findOption('Global users')).toHaveFocus();
    });

    it('moves focus between options with ArrowDown and ArrowUp', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('Media')).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await findOption('Site')).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(await findOption('Media')).toHaveFocus();
    });

    it('selects the focused option with Enter and closes the menu', async () => {
        const { onContextChange } = renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('Media')).focus();
        await userEvent.keyboard('{Enter}');
        expect(onContextChange).toHaveBeenCalledTimes(1);
        expect(onContextChange.mock.calls[0][1].value).toBe('media');
        expect(screen.queryByRole('list')).toBeNull();
    });

    it.fails('closes the menu with Escape and returns focus to the context selector', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('Media')).focus();
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('list')).toBeNull();
        expect(getTrigger()).toHaveFocus();
    });

    it('reaches the clear button with Tab after the search box', async () => {
        renderInput();
        screen.getByRole('searchbox').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    });
});
