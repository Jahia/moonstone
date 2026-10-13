import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PrimaryNav } from '../PrimaryNav';
import { PrimaryNavItem } from './index';
import { Badge } from '~/components';

describe('NavItem', () => {
    it('should display a text children', () => {
        render(<PrimaryNavItem label="Content children"/>);
        expect(screen.getByText('Content children')).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(
            <PrimaryNavItem data-custom="extra" data-testid="primaryNav-item"/>,
        );
        expect(screen.getByTestId('primaryNav-item')).toHaveAttribute(
            'data-custom',
            'extra',
        );
    });

    it('should add extra className', () => {
        render(
            <PrimaryNavItem className="extra" data-testid="primaryNav-item"/>,
        );
        expect(screen.getByTestId('primaryNav-item')).toHaveClass('extra');
    });

    it('should display the icon', () => {
        const Icon = () => <svg data-testid="primaryNav-icon"/>;
        render(<PrimaryNavItem icon={<Icon/>}/>);
        expect(screen.getByTestId('primaryNav-icon')).toBeInTheDocument();
    });

    it('should display the badge', () => {
        render(
            <PrimaryNavItem badge={<Badge label="primaryNavItem-badge"/>}/>,
        );
        expect(screen.getByText('primaryNavItem-badge')).toHaveClass(
            'moonstone-primaryNavItem_badge',
        );
    });

    it('should announce the badge with the item', () => {
        render(<PrimaryNavItem badge={<Badge label="3"/>} label="Workflow"/>);
        expect(screen.getByRole('button', { name: 'Workflow 3' })).toBeInTheDocument();
    });

    it('should announce the badge with a link item', () => {
        render(<PrimaryNavItem badge={<Badge label="3"/>} label="Workflow" url="toto.com"/>);
        expect(screen.getByRole('link', { name: 'Workflow 3' })).toBeInTheDocument();
    });

    it('should mark the selected item as the current page', () => {
        render(<PrimaryNavItem isSelected label="Item"/>);
        expect(screen.getByRole('button', { name: 'Item' })).toHaveAttribute('aria-current', 'page');
    });

    it('should not set aria-current when the item is not selected', () => {
        render(<PrimaryNavItem label="Item"/>);
        expect(screen.getByRole('button', { name: 'Item' })).not.toHaveAttribute('aria-current');
    });

    it('should mark a selected link item as the current page', () => {
        render(<PrimaryNavItem isSelected label="Link" url="toto.com"/>);
        expect(screen.getByRole('link', { name: 'Link' })).toHaveAttribute('aria-current', 'page');
    });

    it('should expose a link item as a single control', () => {
        render(<PrimaryNavItem data-testid="primaryNav-item" label="Link" url="toto.com"/>);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
        expect(screen.getByTestId('primaryNav-item')).not.toHaveAttribute('tabindex');
    });

    it('should not nest the button slot inside the item control', () => {
        render(<PrimaryNavItem button={<button type="button">Action</button>} label="Item"/>);
        expect(screen.getByRole('button', { name: 'Item' })).not.toContainElement(screen.getByRole('button', { name: 'Action' }));
    });

    it('should display a link when given a url props', () => {
        render(<PrimaryNavItem label="Content children" url="toto.com"/>);
        expect(screen.getByRole('link')).toHaveAttribute('href', 'toto.com');
    });

    it('should display subtitle when given a subtitle props', () => {
        render(<PrimaryNavItem subtitle="I'm a subtitle"/>);
        expect(screen.getByText('I\'m a subtitle')).toBeInTheDocument();
    });

    it('should display button', () => {
        render(<PrimaryNavItem button={<div>hello</div>}/>);
        expect(screen.getByText('hello')).toBeInTheDocument();
    });

    it('should call onClick function', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <PrimaryNav
                top={<PrimaryNavItem label="test me" onClick={onClick}/>}
            />,
        );
        await user.click(screen.getByText('test me'));

        expect(onClick).toHaveBeenCalled();
    });
});
