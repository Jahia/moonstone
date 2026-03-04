import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { DataTable, TableRow } from '~/components/DataTable';
import { numberColumn, stringColumn } from '~/utils/dataTable';

type TestData = {
    id: string;
    name: string;
    age: number;
    subRows?: TestData[];
};

const data: TestData[] = [
    {id: '1', name: 'Alice', age: 30},
    {id: '2', name: 'Bob', age: 25},
    {id: '3', name: 'Charlie', age: 35}
];

const structuredData: TestData[] = [
    {
        id: '1',
        name: 'Parent',
        age: 50,
        subRows: [
            {id: '1.1', name: 'Child', age: 10}
        ]
    }
];

const columns = [
    {
        key: 'name',
        label: 'Name',
        isSortable: true,
        ...stringColumn((row: TestData) => row.name)
    },
    {
        key: 'age',
        label: 'Age',
        isSortable: true,
        ...numberColumn((row: TestData) => row.age)
    }
] as const;

describe('DataTable', () => {
    it('should render headers', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
            />
        );

        expect(screen.getByText('Name')).toBeVisible();
        expect(screen.getByText('Age')).toBeVisible();
    });

    it('should render rows', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
            />
        );

        expect(screen.getByText('Alice')).toBeVisible();
        expect(screen.getByText('Bob')).toBeVisible();
        expect(screen.getByText('30')).toBeVisible();
    });

    it('should render nothing when no data', () => {
        render(
            <DataTable
                data-testid="dataTable"
                data={[]}
                columns={columns}
                primaryKey="id"
            />
        );
        expect(screen.queryByTestId('dataTable')).not.toBeInTheDocument();
    });

    it('should display elements provided from actions', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow key={row.id}>
                        {defaultRender({
                            actions: <button data-testid="button-actions" type="button">Edit {row.original.name}</button>
                        })}
                    </TableRow>
                )}
            />
        );

        const buttons = screen.getAllByTestId('button-actions'); 
        expect(buttons).toHaveLength(3);
        buttons.forEach(button => {
            expect(button).toBeVisible();
        });
    });

    it('should render hidden elements provided from actionsOnHover', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow key={row.id}>
                        {defaultRender({
                            actionsOnHover: <button data-testid="button-hidden" type="button">Edit {row.original.name}</button>
                        })}
                    </TableRow>
                )}
            />
        );

        const buttons = screen.getAllByTestId('button-hidden'); 
        expect(buttons).toHaveLength(3);
        buttons.forEach(button => {
            expect(button).not.toBeVisible();
        });
    });

    it('should display elements from actionsOnHover when the row is hovered', async () => {
        const user = userEvent.setup();
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow data-testid={row.id} key={row.id}>
                        {defaultRender({
                            actionsOnHover: <button data-testid={`button-${row.id}`} type="button">Edit {row.original.name}</button>
                        })}
                    </TableRow>
                )}
            />
        );

        // Hover over the first row
        const firstButton = screen.getByTestId('button-1');
        const firstRow = screen.getByTestId('1');
        await user.hover(firstRow);

        // Button should now be visible
        expect(firstButton).toBeVisible();
        
        // Other buttons should still be hidden
        expect(screen.getByTestId('button-2')).not.toBeVisible();
        expect(screen.getByTestId('button-3')).not.toBeVisible();
    });

    it('should apply custom attribute via rowProps', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                rowProps={{'data-testid': 'custom-row'}}
            />
        );
        const rows = screen.getAllByTestId('custom-row');
        expect(rows).toHaveLength(3);
    });

    it('should render expandable rows with children visible by default', () => {
        render(
            <DataTable
                isStructured
                data={structuredData}
                columns={columns}
                primaryKey="id"
            />
        );

        expect(screen.getByText('Parent')).toBeInTheDocument();
        expect(screen.getByText('Child')).toBeInTheDocument();
    });

    it('should toggle row when clicking on the expandable node', async () => {
        const user = userEvent.setup();
        render(
            <DataTable<TestData>
                isStructured
                data={structuredData}
                columns={columns}
                primaryKey="id"
            />
        );

        await user.click(document.querySelector('[aria-expanded="true"]'));
        expect(screen.queryByText('Child')).not.toBeInTheDocument();

        await user.click(document.querySelector('[aria-expanded="true"]'));
        expect(screen.queryByText('Child')).toBeInTheDocument();
    });

    it('should apply column width when specified', () => {
        const columnsWithWidth = [
            {
                key: 'name',
                label: 'Name',
                width: '200px',
                ...stringColumn((row: TestData) => row.name)
            },
            {
                key: 'age',
                label: 'Age',
                ...numberColumn((row: TestData) => row.age)
            }
        ] as const;

        render(
            <DataTable<TestData>
                data={data}
                columns={columnsWithWidth}
                primaryKey="id"
            />
        );

        const nameHeader = screen.getByText('Name').closest('th');
        expect(nameHeader).toHaveStyle({width: '200px'});

        const aliceCell = screen.getByText('Alice').closest('td');
        expect(aliceCell).toHaveStyle({width: '200px'});
    });

    it('should not set width style when width is undefined', () => {
        render(
            <DataTable<TestData>
                data={data}
                columns={columns}
                primaryKey="id"
            />
        );

        const nameHeader = screen.getByText('Name').closest('th');
        expect(nameHeader).not.toHaveStyle({width: '200px'});
    });
});

describe('DataTable sorting feature', () => {
    it('should sort data when header is clicked', async () => {
        const user = userEvent.setup();
        render(
            <DataTable
                enableSorting
                data={data}
                columns={columns}
                primaryKey="id"
            />
        );

        const ageHeader = screen.getByText('Age');
        
        // Click to sort descending by age (Charlie: 35, Alice: 30, Bob: 25)
        await user.click(ageHeader);

        await waitFor(() => {
            const rows = screen.getAllByRole('row');
            expect(within(rows[1]).getByText('Charlie')).toBeVisible();
            expect(within(rows[2]).getByText('Alice')).toBeVisible();
            expect(within(rows[3]).getByText('Bob')).toBeVisible();
        });

        // Click again to sort ascending (Bob: 25, Alice: 30, Charlie: 35)
        await user.click(ageHeader);

        await waitFor(() => {
            const rows = screen.getAllByRole('row');
            expect(within(rows[1]).getByText('Bob')).toBeVisible();
            expect(within(rows[2]).getByText('Alice')).toBeVisible();
            expect(within(rows[3]).getByText('Charlie')).toBeVisible();
        });
    });

    it('should use defaultSortBy', () => {
        render(
            <DataTable
                enableSorting
                data={data}
                columns={columns}
                primaryKey="id"
                defaultSortBy="name"
                defaultSortDirection="descending"
            />
        );
        const rows = screen.getAllByRole('row');
        expect(within(rows[1]).getByText('Charlie')).toBeVisible();
        expect(within(rows[2]).getByText('Bob')).toBeVisible();
        expect(within(rows[3]).getByText('Alice')).toBeVisible();
    });
});

describe('DataTable selection feature', () => {
    it('should handle row selection', async () => {
        const onChangeSelection = vi.fn();
        const user = userEvent.setup();

        render(
            <DataTable
                enableSelection
                data={data}
                columns={columns}
                primaryKey="id"
                onChangeSelection={onChangeSelection}
            />
        );

        // The index of the first row checkbox is index 1, as 0 is the header
        const firstRowCheckbox = screen.getAllByRole('checkbox')[1];
        await user.click(firstRowCheckbox);

        expect(onChangeSelection).toHaveBeenCalledWith(['1']);
    });

    it('should handle select all', async () => {
        const onChangeSelection = vi.fn();
        const user = userEvent.setup();

        render(
            <DataTable
                enableSelection
                data={data}
                columns={columns}
                primaryKey="id"
                onChangeSelection={onChangeSelection}
            />
        );

        const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
        await user.click(selectAllCheckbox);

        expect(onChangeSelection).toHaveBeenCalledWith(expect.arrayContaining(['1', '2', '3']));
    });
});

describe('DataTable pagination feature', () => {
    it('should paginate data', async () => {
        const user = userEvent.setup();
        render(
            <DataTable
                enablePagination
                data={data}
                columns={columns}
                primaryKey="id"
                itemsPerPage={1}
                itemsPerPageOptions={[1, 5, 10]}
            />
        );

        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.queryByText('Bob')).not.toBeInTheDocument();

        await user.click(screen.getByTestId('pagination-button-next-page'));

        await waitFor(() => {
            expect(screen.queryByText('Alice')).not.toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
        });
    });
});
