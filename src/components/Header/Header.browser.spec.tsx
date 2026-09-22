import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Button, Header } from '~/components';

const renderHeader = () => {
    const onAction = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Header
                mainActions={<Button label="Primary" onClick={() => undefined}/>}
                title="Page"
                toolbarLeft={[
                    <Button key="1" label="Action 01" variant="ghost" onClick={onAction}/>,
                    <Button key="2" label="Action 02" variant="ghost" onClick={() => undefined}/>,
                ]}
                toolbarRight={<Button label="View" variant="ghost" onClick={() => undefined}/>}
            />
        </>,
    );
    return { onAction };
};

const action = (name: string) => screen.getByRole('button', { name });

describe('Header keyboard', () => {
    it('reaches the main action then the toolbar with Tab', async () => {
        renderHeader();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(action('Primary')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(action('Action 01')).toHaveFocus();
    });

    it('exposes the toolbar with role toolbar', () => {
        renderHeader();
        expect(screen.getByRole('toolbar')).toBeVisible();
    });

    it.fails('moves focus to the next toolbar button with ArrowRight', async () => {
        renderHeader();
        action('Action 01').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(action('Action 02')).toHaveFocus();
        await userEvent.keyboard('{ArrowRight}');
        expect(action('View')).toHaveFocus();
    });

    it.fails('moves focus to the previous toolbar button with ArrowLeft', async () => {
        renderHeader();
        action('Action 02').focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(action('Action 01')).toHaveFocus();
    });

    it.fails('moves focus to the first and last toolbar buttons with Home and End', async () => {
        renderHeader();
        action('Action 02').focus();
        await userEvent.keyboard('{End}');
        expect(action('View')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(action('Action 01')).toHaveFocus();
    });

    it('activates the focused toolbar button with Enter', async () => {
        const { onAction } = renderHeader();
        action('Action 01').focus();
        await userEvent.keyboard('{Enter}');
        expect(onAction).toHaveBeenCalledTimes(1);
    });
});
