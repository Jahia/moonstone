import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ListItem } from './index';

const requiredProps = {
    label: 'list item label',
};

describe('ListItem', () => {
    it('should display label', () => {
        render(<ListItem {...requiredProps}/>);
        expect(screen.getByText(requiredProps.label)).toBeTruthy();
    });

    it('should display description', () => {
        render(<ListItem {...requiredProps} description="Description of item"/>);
        expect(screen.getByText('Description of item')).toBeTruthy();
    });

    it('should add additional attributes', () => {
        render(
            <ListItem
                {...requiredProps}
                data-custom="test"
                data-testid="moonstone-listItem"
            />,
        );
        expect(screen.getByTestId('moonstone-listItem')).toHaveAttribute(
            'data-custom',
            'test',
        );
    });

    it('should display iconStart', () => {
        const Icon = () => <svg/>;
        const { container } = render(
            <ListItem {...requiredProps} iconStart={<Icon/>}/>,
        );
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should display iconEnd', () => {
        const Icon = () => <svg/>;
        const { container } = render(
            <ListItem {...requiredProps} iconEnd={<Icon/>}/>,
        );
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(
            <ListItem
                {...requiredProps}
                className={testClassName}
                data-testid="moonstone-listItem"
            />,
        );
        expect(screen.getByTestId('moonstone-listItem')).toHaveClass(
            testClassName,
        );
    });

    it('should call onClick when click on an item', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<ListItem {...requiredProps} onClick={handleClick}/>);
        await user.click(screen.getByText(requiredProps.label));

        expect(handleClick).toBeCalled();
    });

    it('should have default imageSize=small', () => {
        const Image = () => <img/>;
        const { container } = render(
            <ListItem {...requiredProps} image={<Image/>}/>,
        );
        expect(
            container.querySelector('.moonstone-listItem-image_small'),
        ).toBeInTheDocument();
    });
});

const renderItem = () => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ul>
                <ListItem label="Settings" onClick={onClick}/>
            </ul>
        </>,
    );
    return { onClick, item: screen.getByText('Settings').closest('li') };
};

describe('ListItem keyboard', () => {
    it.fails('reaches a clickable list item with Tab', async () => {
        const { item } = renderItem();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(item).toHaveFocus();
    });

    it.fails('activates the focused clickable list item with Enter', async () => {
        const { onClick, item } = renderItem();
        item.focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('activates the focused clickable list item with Space', async () => {
        const { onClick, item } = renderItem();
        item.focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
