import {render, screen} from '@testing-library/react';
import {Breadcrumb, BreadcrumbItem, Button, Chip, Header, SearchInput} from '~/components';

describe('Header', () => {
    it('should display', () => {
        render(<Header data-testid="test-header" title="title"/>);
        expect(screen.getByTestId('test-header')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(<Header data-testid="test-header" title="title" className="custom"/>);
        expect(screen.getByTestId('test-header')).toHaveClass('custom');
    });

    it('should display additional attributes', () => {
        render(<Header data-testid="test-header" title="title" data-custom="test"/>);
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
        expect(screen.queryByRole('toolbar')).toBeInTheDocument();
    });

    it('should display the toolbar area when toolbarLeft is provided', () => {
        render(<Header data-testid="test-header" title="title" toolbarLeft="test"/>);
        expect(screen.queryByRole('toolbar')).toBeInTheDocument();
    });

    it('should display the backButton when it\'s provided', () => {
        render(<Header title="title" backButton={<Button data-testid="test-backButton" onClick={() => null}/>}/>);
        expect(screen.queryByTestId('test-backButton')).toBeInTheDocument();
    });

    it('should display the title', () => {
        render(<Header title="test title"/>);
        expect(screen.queryByText('test title')).toBeInTheDocument();
    });

    it('should display breadcrumb', () => {
        render(
            <Header title="title"
                    breadcrumb={
                        <Breadcrumb data-testid="test-breadcrumb">
                            <BreadcrumbItem label="test" onClick={() => null}/>
                        </Breadcrumb>
            }/>);
        expect(screen.queryByTestId('test-breadcrumb')).toBeInTheDocument();
    });

    it('should display contentType', () => {
        render(
            <Header title="title"
                    contentType={<Chip data-testid="test-chip" label="test"/>}/>);
        expect(screen.queryByTestId('test-chip')).toBeInTheDocument();
    });

    it('should display the search element', () => {
        render(<Header title="title" search={<SearchInput/>}/>);
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should display the main actions', () => {
        render(<Header title="title" mainActions={[<Button key="1" label="Secondary"/>, <Button key="2" label="Primary"/>]}/>);
        expect(screen.queryAllByRole('button')).toHaveLength(2);
    });

    it('should display the status', () => {
        const {container} = render(<Header title="title" status={[<Chip key="1" label="status A"/>, <Chip key="2" label="status B"/>]}/>);
        expect(container.querySelectorAll('.moonstone-chip')).toHaveLength(2);
    });
});
