import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
// Import userEvent from '@testing-library/user-event';
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
    it('should display actions', () => {
        render(
            <TableWrapper>
                <TableCellActions actions={<button type="button">Edit</button>}/>
            </TableWrapper>
        );

        expect(screen.getByRole('button', {name: 'Edit'})).toBeVisible();
    });

    // This test doesn't work because jsdom doesn't compile css modules, we will reactivate it when we move to browser mode testing
    // it('should not display `actionsOnHover` by default', async () => {
    //     render(
    //         <TableWrapper>
    //             <TableCellActions
    //                 actionsOnHover={<button data-testid="hover-action" type="button">Delete</button>}
    //             />
    //         </TableWrapper>
    //     );
    //     const button = screen.getByTestId('hover-action');
    //     expect(button).not.toBeVisible();
    // });

    // This test doesn't work because :hover doesn't work in jsdom, we will reactivate it when we move to browser mode testing
    // it('should only display `actionsOnHover` when hovering', async () => {
    //     const user = userEvent.setup();
    //     render(
    //         <TableWrapper>
    //             <TableCellActions
    //                 actionsOnHover={<button data-testid="hover-action" type="button">Delete</button>}
    //             />
    //         </TableWrapper>
    //     );

    //     const button = screen.getByTestId('hover-action');
    //     screen.getByRole('row').hover();
    //     expect(button).toBeVisible();
    // });

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
