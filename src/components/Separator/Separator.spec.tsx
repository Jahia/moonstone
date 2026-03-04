import { render, screen } from '@testing-library/react';
import { Separator } from './index';

describe('Separator', () => {
    it('should display separator component', () => {
        render(<Separator/>);
        expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('should display horizontal separator by default', () => {
        render(<Separator/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-separator_horizontal');
    });

    it('should display vertical separator', () => {
        render(<Separator variant="vertical"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-separator_vertical');
    });

    it('should set size props', () => {
        render(<Separator size="medium"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-size_medium');
    });

    it('should set spacing props', () => {
        render(<Separator spacing="medium"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-spacing_medium');
    });

    it('should add extra attribute', () => {
        render(<Separator data-custom="extra"/>);
        expect(screen.getByRole('separator')).toHaveAttribute('data-custom', 'extra');
    });

    it('should add extra classname', () => {
        render(<Separator data-testid="separator" className="extra"/>);
        expect(screen.getByTestId('separator')).toHaveClass('extra');
    });

    it('should manage invisible="firstChild"', () => {
        render(
            <>
                <Separator data-testid="separator-first" invisible="firstChild"/>
                <div>Content</div>
                <Separator data-testid="separator-second" invisible="firstChild"/>
            </>
        );
        expect(screen.getByTestId('separator-first')).not.toBeVisible();
        expect(screen.getByTestId('separator-second')).toBeVisible();
    });

    it('should manage invisible="lastChild"', () => {
        render(
            <>
                <Separator data-testid="separator-first" invisible="lastChild"/>
                <div>Content</div>
                <Separator data-testid="separator-second" invisible="lastChild"/>
            </>
        );
        expect(screen.getByTestId('separator-first')).toBeVisible();
        expect(screen.getByTestId('separator-second')).not.toBeVisible();
    });

    it('should hide when separator is the only child and invisible="onlyChild"', () => {
        render(<Separator data-testid="separator" invisible="onlyChild"/>);
        expect(screen.getByTestId('separator')).not.toBeVisible();
    });

    it('should display when separator is not the only child even if invisible="onlyChild"', () => {
        render(
            <>
                <Separator data-testid="separator" invisible="onlyChild"/>
                <div>Content</div>
            </>
        );
        expect(screen.getByTestId('separator')).toBeVisible();
    });

    it('should manage invisible="firstOrLastChild"', () => {
        render(
            <>
                <Separator data-testid="separator-first" invisible="firstOrLastChild"/>
                <div>Content</div>
                <Separator data-testid="separator-second" invisible="firstOrLastChild"/>
            </>
        );
        expect(screen.getByTestId('separator-first')).not.toBeVisible();
        expect(screen.getByTestId('separator-second')).not.toBeVisible();
    });
});
