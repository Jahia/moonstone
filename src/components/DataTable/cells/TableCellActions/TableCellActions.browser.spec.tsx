import {render, screen, cleanup} from '@testing-library/react';
import {afterEach, describe, expect, it} from 'vitest';
import {userEvent} from '@vitest/browser/context';
import {TableCellActions} from './TableCellActions';
import {TableRow} from '~/components/DataTable/TableRow';

const TableWrapper = ({children}: {readonly children: React.ReactNode}) => (
    <table>
        <tbody>
            <TableRow data-testid="row">
                {children}
            </TableRow>
        </tbody>
    </table>
);

describe('TableCellActions', () => {
    afterEach(() => {
        cleanup();
    });

    it('should display actions', () => {
        render(
            <TableWrapper>
                <TableCellActions actions={<button type="button">Edit</button>}/>
            </TableWrapper>
        );

        expect(screen.getByRole('button', {name: 'Edit'})).toBeVisible();
    });

    it('should not display `actionsOnHover` by default', async () => {
        render(
            <TableWrapper>
                <TableCellActions
                    actionsOnHover={<button data-testid="hover-action" type="button">Delete</button>}
                />
            </TableWrapper>
        );
        const button = screen.getByTestId('hover-action');
        expect(button).not.toBeVisible();
    });

    it('should only display `actionsOnHover` when hovering', async () => {
        render(
            <TableWrapper>
                <TableCellActions
                    actionsOnHover={<button data-testid="hover-action" type="button">Delete</button>}
                />
            </TableWrapper>
        );

        const button = screen.getByTestId('hover-action');
        await userEvent.hover(screen.getByTestId('row'));
        expect(button).toBeVisible();
    });

    it('should render empty when no actions provided', () => {
        const {container} = render(
            <TableWrapper>
                <TableCellActions/>
            </TableWrapper>
        );

        const cell = container.querySelector('td');
        expect(cell).toBeInTheDocument();
        expect(cell?.textContent).toBe('');
    });
});
