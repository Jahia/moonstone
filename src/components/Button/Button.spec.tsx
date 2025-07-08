import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {buttonColors, buttonSizes, buttonVariants} from './Button.types';

import {Button} from './index';
import {Love} from '~/icons/index';

describe('Button', () => {
    it('should render', () => {
        render(<Button label="test me" data-testid="moonstone-button"/>);
        expect(screen.getByTestId('moonstone-button')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(
            <Button
                label="test me"
                data-testid="moonstone-button"
                className="test-className"
            />
        );
        expect(screen.getByTestId('moonstone-button')).toHaveClass(
            'test-className'
        );
    });

    it('should have the specified label', () => {
        render(<Button label="test me"/>);
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should display the icon', () => {
        render(<Button icon={<Love data-testid="moonstone-buttonIcon"/>}/>);
        expect(screen.getByTestId('moonstone-buttonIcon')).toBeInTheDocument();
    });

    it('should display the iconEnd', () => {
        render(
            <Button
                iconEnd={<Love data-testid="moonstone-buttonIconEnd"/>}
                label="test me"
            />
        );
        expect(
            screen.getByTestId('moonstone-buttonIconEnd')
        ).toBeInTheDocument();
    });

    it('should not display the iconEnd when no label is provided', () => {
        render(
            <Button iconEnd={<Love data-testid="moonstone-buttonIconEnd"/>}/>
        );
        expect(
            screen.queryByTestId('moonstone-buttonIconEnd')
        ).not.toBeInTheDocument();
    });

    it('should have the specified label when an icon is provided', () => {
        render(
            <Button
                icon={<Love data-testid="moonstone-buttonIcon"/>}
                label="test me"
            />
        );
        expect(screen.getByTestId('moonstone-buttonIcon')).toBeInTheDocument();
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should use default styles', () => {
        render(<Button data-testid="moonstone-button" label="test me"/>);
        expect(screen.getByTestId('moonstone-button')).toHaveClass(
            'moonstone-button'
        );
    });

    it('should use the reverse mode', () => {
        render(
            <>
                <Button isReversed data-testid="moonstone-button" label="test me"/>
                <Button isReversed data-testid="moonstone-button-icononly" icon={<Love/>}/>
            </>
        );
        expect(screen.getByTestId('moonstone-button')).toHaveClass(
            'moonstone-reverse'
        );
        expect(screen.getByTestId('moonstone-button-icononly')).toHaveClass(
            'moonstone-reverse'
        );
    });

    it('should be disabled', () => {
        render(
            <Button isDisabled data-testid="moonstone-button" label="test me"/>
        );
        expect(screen.getByTestId('moonstone-button')).toBeDisabled();
    });

    it('should display a loader when no icon is provided', () => {
        render(
            <Button isLoading data-testid="moonstone-button" label="test me"/>
        );
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should display loader when an icon is provided', () => {
        render(<Button isLoading icon={<Love/>} label="test me"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should prevent click when the button is loading', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <Button
                isLoading
                data-testid="moonstone-button"
                label="test me"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('moonstone-button'));

        expect(onClick).not.toHaveBeenCalled();
    });

    it('should not display icon when the button is loading', () => {
        render(
            <Button
                isLoading
                icon={<Love data-testid="moonstone-buttonIcon"/>}
                label="test me"
            />
        );
        expect(
            screen.queryByTestId('moonstone-buttonIcon')
        ).not.toBeInTheDocument();
    });

    test.each(buttonVariants)(
        'should use the specified variant %s',
        variant => {
            render(
                <Button
                    data-testid="moonstone-button"
                    variant={variant}
                    label="test me"
                />
            );
            expect(screen.getByTestId('moonstone-button')).toHaveClass(
                `moonstone-button_${variant}`
            );
        }
    );

    test.each(buttonColors)('should use the specified color %s', color => {
        render(
            <Button
                data-testid="moonstone-button"
                color={color}
                label="test me"
            />
        );
        expect(screen.getByTestId('moonstone-button')).toHaveClass(
            `moonstone-button_${color}`
        );
    });

    test.each(buttonSizes)('should use the specified size %s', size => {
        render(
            <Button
                data-testid="moonstone-button"
                size={size}
                label="test me"
            />
        );
        expect(screen.getByTestId('moonstone-button')).toHaveClass(
            `moonstone-button_${size}`
        );
    });

    it('should call onClick function', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <Button
                data-testid="moonstone-button"
                label="test me"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('moonstone-button'));

        expect(onClick).toHaveBeenCalled();
    });
});
