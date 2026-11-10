import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

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

    it('should expose the toolbar as a named group, not a toolbar that promises arrow keys', () => {
        renderHeader();
        expect(screen.getByRole('group', { name: 'Page actions' })).toBeVisible();
        expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
    });

    it('should move through the toolbar buttons with Tab', async () => {
        renderHeader();
        action('Action 01').focus();
        await userEvent.keyboard('{Tab}');
        expect(action('Action 02')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(action('View')).toHaveFocus();
    });

    it('activates the focused toolbar button with Enter', async () => {
        const { onAction } = renderHeader();
        action('Action 01').focus();
        await userEvent.keyboard('{Enter}');
        expect(onAction).toHaveBeenCalledTimes(1);
    });
});
