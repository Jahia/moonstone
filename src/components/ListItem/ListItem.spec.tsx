import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ListItem} from './index';

const requiredProps = {
    label: 'list item label'
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
                data-testid="moonstone-listItem"
                data-custom="test"
            />
        );
        expect(screen.getByTestId('moonstone-listItem')).toHaveAttribute(
            'data-custom',
            'test'
        );
    });

    it('should display iconStart', () => {
        const Icon = () => <svg/>;
        const {container} = render(
            <ListItem {...requiredProps} iconStart={<Icon/>}/>
        );
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should display iconEnd', () => {
        const Icon = () => <svg/>;
        const {container} = render(
            <ListItem {...requiredProps} iconEnd={<Icon/>}/>
        );
        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(
            <ListItem
                {...requiredProps}
                data-testid="moonstone-listItem"
                className={testClassName}
            />
        );
        expect(screen.getByTestId('moonstone-listItem')).toHaveClass(
            testClassName
        );
    });

    it('should call onClick when click on an item', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<ListItem {...requiredProps} onClick={handleClick}/>);
        await user.click(screen.getByText('my label'));

        expect(handleClick).toBeCalled();
    });

    it('should have default imageSize=small', () => {
        const Image = () => <img/>;
        const {container} = render(
            <ListItem {...requiredProps} image={<Image/>}/>
        );
        expect(
            container.querySelector('.moonstone-listItem-image_small')
        ).toBeInTheDocument();
    });
});
