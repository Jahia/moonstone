import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PrimaryNav } from '../PrimaryNav';
import { PrimaryNavItem } from './index';
import { Badge, Tooltip } from '~/components';

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

    it('should include the badge in the accessible name of the item', () => {
        render(<PrimaryNavItem badge={<Badge label="3"/>} label="Workflow"/>);
        expect(screen.getByRole('button', { name: 'Workflow 3' })).toBeInTheDocument();
    });

    it('should include the badge in the accessible name of a link item', () => {
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

    it('should not throw when clicked without onClick', async () => {
        const user = userEvent.setup();
        const onError = vi.fn();
        window.addEventListener('error', onError);

        render(<PrimaryNav top={<PrimaryNavItem label="test me"/>}/>);
        await user.click(screen.getByText('test me'));

        window.removeEventListener('error', onError);
        expect(onError).not.toHaveBeenCalled();
    });

    // TODO: is the usefull ? It seems we test the Tooltip implementation here
    it('should give the description of a Tooltip to the control', async () => {
        const user = userEvent.setup();
        render(<Tooltip label="Tip"><PrimaryNavItem label="Item"/></Tooltip>);
        await user.hover(screen.getByRole('button', { name: 'Item' }));
        expect(screen.getByRole('button', { name: 'Item' })).toHaveAccessibleDescription('Tip');
    });
});
