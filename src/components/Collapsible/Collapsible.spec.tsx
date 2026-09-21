import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Collapsible } from './index';

describe('Collapsible', () => {
    it('should display additional className', () => {
        render(
            <Collapsible
                className="extra"
                data-testid="moonstone-collapsible"
                label="test"
            >
                content here
            </Collapsible>,
        );
        expect(screen.getByTestId('moonstone-collapsible')).toHaveClass(
            'extra',
        );
    });
});

describe('UncontrolledCollapsible', () => {
    it('should be collapsed by default', () => {
        render(<Collapsible label="test">content here</Collapsible>);
        expect(
            screen.getByRole('button', { expanded: false }),
        ).toBeInTheDocument();
    });
    it('should be expanded when isDefaultExpanded is set to true', () => {
        render(<Collapsible isDefaultExpanded label="test">content here</Collapsible>);
        expect(
            screen.getByRole('button', { expanded: true }),
        ).toBeInTheDocument();
    });

    it('should be collpased when I click on it when it is expanded', async () => {
        const user = userEvent.setup();

        render(<Collapsible isDefaultExpanded label="test">content here</Collapsible>);
        await user.click(screen.getByRole('button'));

        expect(
            screen.getByRole('button', { expanded: false }),
        ).toBeInTheDocument();
    });

    it('should be collapsed when isDefaultExpanded is set to false', () => {
        render(<Collapsible isDefaultExpanded={false} label="test">content here</Collapsible>);
        expect(
            screen.getByRole('button', { expanded: false }),
        ).toBeInTheDocument();
    });

    it('should be expanded when I click on it when it is collapsed', async () => {
        const user = userEvent.setup();

        render(<Collapsible isDefaultExpanded={false} label="test">content here</Collapsible>);
        await user.click(screen.getByRole('button'));

        expect(
            screen.getByRole('button', { expanded: true }),
        ).toBeInTheDocument();
    });

    it('should call the onClick function', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Collapsible label="test" onClick={onClick}>content here</Collapsible>);
        await user.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });
});

describe('ControlledCollapsible', () => {
    it('should be collapsed by default', () => {
        render(<Collapsible label="test">content here</Collapsible>);
        expect(
            screen.getByRole('button', { expanded: false }),
        ).toBeInTheDocument();
    });

    it('should be expanded when isExpanded is set to true', () => {
        render(<Collapsible isExpanded label="test">content here</Collapsible>);
        expect(
            screen.getByRole('button', { expanded: true }),
        ).toBeInTheDocument();
    });

    it('should be collapsed when isExpanded is set to false', () => {
        render(<Collapsible isExpanded={false} label="test">content here</Collapsible>);
        expect(
            screen.getByRole('button', { expanded: false }),
        ).toBeInTheDocument();
    });

    it('should call the onClick function', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Collapsible isExpanded label="test" onClick={onClick}>content here</Collapsible>);
        await user.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });
});

const renderCollapsible = () => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Collapsible id="section" label="Section" onClick={onClick}>Section content</Collapsible>
        </>,
    );
    return { onClick };
};

const trigger = () => screen.getByRole('button', { name: 'Section' });

describe('Collapsible keyboard', () => {
    it('reaches the trigger with Tab', async () => {
        renderCollapsible();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger()).toHaveFocus();
    });

    it('expands with Enter and reports it with aria-expanded', async () => {
        const { onClick } = renderCollapsible();
        trigger().focus();
        expect(trigger()).toHaveAttribute('aria-expanded', 'false');
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(trigger()).toHaveAttribute('aria-expanded', 'true');
        expect(await screen.findByText('Section content')).toBeVisible();
    });

    it('expands with Space', async () => {
        const { onClick } = renderCollapsible();
        trigger().focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(trigger()).toHaveAttribute('aria-expanded', 'true');
    });

    it('collapses again with a second Enter', async () => {
        renderCollapsible();
        trigger().focus();
        await userEvent.keyboard('{Enter}');
        expect(trigger()).toHaveAttribute('aria-expanded', 'true');
        await userEvent.keyboard('{Enter}');
        expect(trigger()).toHaveAttribute('aria-expanded', 'false');
        expect(screen.getByText('Section content')).not.toBeVisible();
    });
});
