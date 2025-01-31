import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {PrimaryNavItem} from './index';
import {PrimaryNav} from '../PrimaryNav';
import {Badge} from '~/components';

describe('NavItem', () => {
    it('should display a text children', () => {
        render(<PrimaryNavItem label="Content children"/>);
        expect(screen.queryByText('Content children')).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(<PrimaryNavItem data-testid="primaryNav-item" data-custom="extra"/>);
        expect(screen.getByTestId('primaryNav-item')).toHaveAttribute('data-custom', 'extra');
    });

    it('should add extra className', () => {
        render(<PrimaryNavItem data-testid="primaryNav-item" className="extra"/>);
        expect(screen.getByTestId('primaryNav-item')).toHaveClass('extra');
    });

    it('should display the icon', () => {
        const Icon = () => <svg data-testid="primaryNav-icon"/>;
        render(<PrimaryNavItem icon={<Icon/>}/>);
        expect(screen.queryByTestId('primaryNav-icon')).toBeInTheDocument();
    });

    it('should display the badge', () => {
        render(<PrimaryNavItem badge={<Badge label="primaryNavItem-badge"/>}/>);
        expect(screen.getByText('primaryNavItem-badge')).toHaveClass('moonstone-primaryNavItem_badge');
    });

    it('should set selected when given selected property', () => {
        render(<PrimaryNavItem isSelected data-testid="primaryNav-item"/>);
        expect(screen.getByTestId('primaryNav-item')).toHaveAttribute('aria-current', 'true');
    });

    it('should not set selected when not given selected property', () => {
        render(<PrimaryNavItem data-testid="primaryNav-item"/>);
        expect(screen.getByTestId('primaryNav-item')).toHaveAttribute('aria-current', 'false');
    });

    it('should display a link when given a url props', () => {
        render(<PrimaryNavItem label="Content children" url="toto.com"/>);
        expect(screen.getByRole('link')).toHaveAttribute('href', 'toto.com');
    });

    it('should display subtitle when given a subtitle props', () => {
        render(<PrimaryNavItem subtitle="I'm a subtitle"/>);
        expect(screen.queryByText('I\'m a subtitle')).toBeInTheDocument();
    });

    it('should display button', () => {
        render(<PrimaryNavItem button={<div>hello</div>}/>);
        expect(screen.queryByText('hello')).toBeInTheDocument();
    });

    it('should call onClick function', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<PrimaryNav top={<PrimaryNavItem label="test me" onClick={onClick}/>}/>);
        await user.click(screen.getByText('test me'));

        expect(onClick).toHaveBeenCalled();
    });
});
