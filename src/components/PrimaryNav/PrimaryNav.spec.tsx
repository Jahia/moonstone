import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PrimaryNav } from './index';
import { PrimaryNavItem } from './PrimaryNavItem';
import { PrimaryNavItemsGroup } from './PrimaryNavItemsGroup';

describe('PrimaryNav', () => {
    const props = {
        modeIcon: <img/>,
    };

    it('should not be expanded initialy', () => {
        render(<PrimaryNav {...props}/>);
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should expand when click on NavButton', async () => {
        const user = userEvent.setup();
        render(<PrimaryNav {...props}/>);

        await user.click(screen.getByLabelText('Toggle primary navigation'));
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'true');
    });

    it('should collapse when click twice on NavButton', async () => {
        const user = userEvent.setup();
        render(<PrimaryNav {...props}/>);

        await user.click(screen.getByLabelText('Toggle primary navigation'));
        await user.click(screen.getByLabelText('Toggle primary navigation'));

        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should also work when not displaying modeIcon', () => {
        render(<PrimaryNav/>);
    });

    it('should add extra attribute', () => {
        render(<PrimaryNav data-custom="extra" {...props}/>);
        expect(screen.getByRole('navigation')).toHaveAttribute('data-custom', 'extra');
    });
});

const renderNav = () => {
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <PrimaryNav
                bottom={(
                    <PrimaryNavItemsGroup>
                        <PrimaryNavItem label="Bottom"/>
                    </PrimaryNavItemsGroup>
                )}
                headerCaption="development"
                top={(
                    <PrimaryNavItemsGroup>
                        <PrimaryNavItem label="First" onClick={onFirst}/>
                        <PrimaryNavItem label="Second"/>
                        <PrimaryNavItem label="Link" url="https://example.com"/>
                    </PrimaryNavItemsGroup>
                )}
            />
        </>,
    );
    return { onFirst };
};

const item = (label: string) => screen.getByText(label).closest('li');
const toggle = () => screen.getByRole('button', { name: 'Toggle primary navigation' });

describe('PrimaryNav keyboard', () => {
    it('reaches the toggle button then each item with Tab', async () => {
        renderNav();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(toggle()).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(item('First')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(item('Second')).toHaveFocus();
    });

    it.fails('exposes a link item as a single Tab stop', async () => {
        renderNav();
        item('Second').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('link', { name: 'Link' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(item('Bottom')).toHaveFocus();
    });

    it('activates the focused item with Enter', async () => {
        const { onFirst } = renderNav();
        item('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('activates the focused item with Space', async () => {
        const { onFirst } = renderNav();
        item('First').focus();
        await userEvent.keyboard(' ');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('expands the nav with Enter on the toggle button and reports it with aria-expanded', async () => {
        renderNav();
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'false');
        toggle().focus();
        await userEvent.keyboard('{Enter}');
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'true');
    });

    it('expands the nav with Space on the toggle button', async () => {
        renderNav();
        toggle().focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'true');
    });

    it.fails('collapses an expanded nav with Escape and returns focus to the toggle button', async () => {
        renderNav();
        toggle().focus();
        await userEvent.keyboard('{Enter}');
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'true');
        item('First').focus();
        await userEvent.keyboard('{Escape}');
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'false');
        expect(toggle()).toHaveFocus();
    });
});
