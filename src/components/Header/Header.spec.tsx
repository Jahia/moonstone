import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Breadcrumb, BreadcrumbItem, Button, Chip, Header, SearchInput } from '~/components';

describe('Header', () => {
    it('should display', () => {
        render(<Header data-testid="test-header" title="title"/>);
        expect(screen.getByTestId('test-header')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(<Header className="custom" data-testid="test-header" title="title"/>);
        expect(screen.getByTestId('test-header')).toHaveClass('custom');
    });

    it('should display additional attributes', () => {
        render(<Header data-custom="test" data-testid="test-header" title="title"/>);
        expect(screen.getByTestId('test-header')).toHaveAttribute('data-custom', 'test');
    });

    it('should not display information area when no actions are provided', () => {
        render(<Header data-testid="test-header" title="title"/>);
        expect(screen.getByTestId('test-header')).not.toHaveClass('test-header_information');
    });

    it('should not display toolbar area when toolbarRight or toolbarLeft is not provided', () => {
        render(<Header data-testid="test-header" title="title"/>);
        expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
    });

    it('should display the toolbar area when toolbarRight is provided', () => {
        render(<Header data-testid="test-header" title="title" toolbarRight="test"/>);
        expect(screen.getByRole('toolbar')).toBeInTheDocument();
    });

    it('should display the toolbar area when toolbarLeft is provided', () => {
        render(<Header data-testid="test-header" title="title" toolbarLeft="test"/>);
        expect(screen.getByRole('toolbar')).toBeInTheDocument();
    });

    it('should display the backButton when it\'s provided', () => {
        render(<Header backButton={<Button data-testid="test-backButton" onClick={() => null}/>} title="title"/>);
        expect(screen.getByTestId('test-backButton')).toBeInTheDocument();
    });

    it('should display the title', () => {
        render(<Header title="test title"/>);
        expect(screen.getByText('test title')).toBeInTheDocument();
    });

    it('should display breadcrumb', () => {
        render(
            <Header
                breadcrumb={(
                    <Breadcrumb data-testid="test-breadcrumb">
                        <BreadcrumbItem label="test" onClick={() => null}/>
                    </Breadcrumb>
                )}
                title="title"
            />,
        );
        expect(screen.getByTestId('test-breadcrumb')).toBeInTheDocument();
    });

    it('should display contentType', () => {
        render(
            <Header
                contentType={<Chip data-testid="test-chip" label="test"/>}
                title="title"
            />,
        );
        expect(screen.getByTestId('test-chip')).toBeInTheDocument();
    });

    it('should display the search element', () => {
        render(<Header search={<SearchInput/>} title="title"/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });

    it('should display the main actions', () => {
        render(<Header mainActions={[<Button key="1" label="Secondary"/>, <Button key="2" label="Primary"/>]} title="title"/>);
        expect(screen.queryAllByRole('button')).toHaveLength(2);
    });

    it('should display the status', () => {
        const { container } = render(<Header status={[<Chip key="1" label="status A"/>, <Chip key="2" label="status B"/>]} title="title"/>);
        expect(container.querySelectorAll('.moonstone-chip')).toHaveLength(2);
    });
});

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
