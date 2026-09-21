import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ButtonGroup } from './index';
import { Button } from '~/components/Button';

describe('ButtonGroup', () => {
    it('should render ButtonGroup', () => {
        render(
            <ButtonGroup>
                <Button label="One" onClick={() => null}/>
                <Button label="Two" onClick={() => null}/>
            </ButtonGroup>,
        );
        expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('should not render error', () => {
        // @ts-expect-error testing invalid children
        render(<ButtonGroup>test</ButtonGroup>);
        expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('should display nothing when no children is provided', () => {
        // @ts-expect-error testing with no children
        render(<ButtonGroup/>);
        expect(screen.queryByRole('group')).not.toBeInTheDocument();
    });

    it('should display nothing when children is empty', () => {
        render(<ButtonGroup>{[]}</ButtonGroup>);
        expect(screen.queryByRole('group')).not.toBeInTheDocument();
    });

    it('should pass color variant to buttons', () => {
        render(
            <ButtonGroup color="accent">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>,
        );
        expect(screen.getByRole('group').firstChild).toHaveClass('moonstone-button_accent');
        expect(screen.getByRole('group').lastChild).toHaveClass('moonstone-button_accent');
    });

    it('should pass size to buttons', () => {
        render(
            <ButtonGroup size="big">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>,
        );
        expect(screen.getByRole('group').firstChild).toHaveClass('moonstone-button_big');
        expect(screen.getByRole('group').lastChild).toHaveClass('moonstone-button_big');
    });

    it('should add additional classname', () => {
        render(
            <ButtonGroup className="extra">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>,
        );
        expect(screen.getByRole('group')).toHaveClass('extra');
    });

    it('should add additional attribute', () => {
        render(
            <ButtonGroup data-custom="extra">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>,
        );
        expect(screen.getByRole('group')).toHaveAttribute('data-custom', 'extra');
    });
});

const renderGroup = () => {
    const onOne = vi.fn();
    const onTwo = vi.fn();
    const onThree = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ButtonGroup>
                <Button label="one" onClick={onOne}/>
                <Button label="two" onClick={onTwo}/>
                <Button label="three" onClick={onThree}/>
            </ButtonGroup>
        </>,
    );
    return { onOne, onTwo, onThree };
};

describe('ButtonGroup keyboard', () => {
    it('reaches every button of the group in order with Tab', async () => {
        renderGroup();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'one' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'two' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'three' })).toHaveFocus();
    });

    it('activates only the focused button with Enter', async () => {
        const { onOne, onTwo, onThree } = renderGroup();
        screen.getByRole('button', { name: 'two' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onTwo).toHaveBeenCalledTimes(1);
        expect(onOne).not.toHaveBeenCalled();
        expect(onThree).not.toHaveBeenCalled();
    });

    it('activates the focused button with Space', async () => {
        const { onThree } = renderGroup();
        screen.getByRole('button', { name: 'three' }).focus();
        await userEvent.keyboard(' ');
        expect(onThree).toHaveBeenCalledTimes(1);
    });
});
