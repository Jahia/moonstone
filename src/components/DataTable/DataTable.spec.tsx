import {render, screen, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {DataTable, TableCell, TableCellStatus, TableRow} from '~/components/DataTable';
import {numberColumn, stringColumn} from '~/utils/dataTable';

type TestData = {
    id: string;
    name: string;
    age: number;
    subRows?: TestData[];
};

type StatusBarData = {
    id: string;
    name: string;
    age: number;
    status: 'Healthy' | 'Pending';
    subRows?: StatusBarData[];
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

const statusBarData: StatusBarData[] = [
    {
        id: '1',
        name: 'Parent',
        age: 50,
        status: 'Healthy',
        subRows: [
            {
                id: '1.1',
                name: 'Child',
                age: 10,
                status: 'Pending'
            }
        ]
    }
];

const columns = [
    {
        key: 'name',
        label: 'Name',
        ...stringColumn((row: TestData) => row.name)
    },
    {
        key: 'age',
        label: 'Age',
        ...numberColumn((row: TestData) => row.age)
    }
] as const;

const statusBarColumns = [
    {
        key: 'name',
        label: 'Name',
        ...stringColumn((row: StatusBarData) => row.name)
    },
    {
        key: 'age',
        label: 'Age',
        ...numberColumn((row: StatusBarData) => row.age)
    }
] as const;

const sortableColumns = [
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

    it('should render custom after cells for each row', async () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow key={row.id} data-testid={row.id}>
                        {defaultRender({
                            after: (
                                <TableCell data-testid={`after-${row.id}`}>
                                    {row.original.name}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                )}
            />
        );

        const afterItems = screen.getAllByTestId(/after-/);
        expect(afterItems).toHaveLength(3);
        afterItems.forEach(item => {
            expect(item).toBeVisible();
        });
    });

    it('should render custom before cells for each row', async () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow key={row.id} data-testid={row.id}>
                        {defaultRender({
                            before: (
                                <TableCell data-testid={`before-${row.id}`}>
                                    {row.original.name}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                )}
            />
        );

        const beforeItems = screen.getAllByTestId(/before-/);
        expect(beforeItems).toHaveLength(3);
        beforeItems.forEach(item => {
            expect(item).toBeVisible();
        });
    });

    it('should apply custom attribute via `rowProps`', () => {
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
        rows.forEach(row => {
            expect(row.tagName).toBe('TR');
        });
    });

    it('should render both before and after custom cells', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow key={row.id}>
                        {defaultRender({
                            before: (
                                <TableCell data-testid={`before-${row.id}`}>
                                   {`before-${row.id}`}
                                </TableCell>
                            ),
                            after: (
                                <TableCell data-testid={`after-${row.id}`}>
                                    {`after-${row.id}`}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                )}
            />
        );

        const beforeItems = screen.getAllByTestId(/before-/);
        expect(beforeItems).toHaveLength(3);
        beforeItems.forEach(item => {
            expect(item).toBeVisible();
        });

        const afterItems = screen.getAllByTestId(/after-/);
        expect(afterItems).toHaveLength(3);
        afterItems.forEach(item => {
            expect(item).toBeVisible();
        });
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

    it('should display controlled selection from selection prop', () => {
        render(
            <DataTable<TestData>
                enableSelection
                data={data}
                columns={columns}
                primaryKey="id"
                selection={['1', '2']}
                onChangeSelection={() => { }}
            />
        );

        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes[1]).toBeChecked();
        expect(checkboxes[2]).toBeChecked();
        expect(checkboxes[3]).not.toBeChecked();
    });

    it('should call onChangeSelection when selection changes in controlled mode', async () => {
        const onChangeSelection = vi.fn();
        const user = userEvent.setup();

        render(
            <DataTable<TestData>
                enableSelection
                data={data}
                columns={columns}
                primaryKey="id"
                selection={[]}
                onChangeSelection={onChangeSelection}
            />
        );

        const firstRowCheckbox = screen.getAllByRole('checkbox')[1];
        await user.click(firstRowCheckbox);

        expect(onChangeSelection).toHaveBeenCalledWith(['1']);
    });

    it('should respect controlled sortBy and sortDirection', () => {
        // In controlled mode, the component assumes that the data is already sorted.
        const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));

        render(
            <DataTable<TestData>
                enableSorting
                data={sortedData}
                columns={sortableColumns}
                primaryKey="id"
                sortBy="name"
                sortDirection="descending"
                onSortChange={() => { }}
            />
        );

        const rows = screen.getAllByRole('row');
        expect(within(rows[1]).getByText('Charlie')).toBeInTheDocument();
        expect(within(rows[2]).getByText('Bob')).toBeInTheDocument();
        expect(within(rows[3]).getByText('Alice')).toBeInTheDocument();
    });

    it('should respect controlled pagination', () => {
        // Controlled pagination: state is managed externally, but TanStack still handles client-side slicing.
        // Pass full data and TanStack will display the correct page based on currentPage/itemsPerPage.
        render(
            <DataTable<TestData>
                enablePagination
                data={data}
                columns={columns}
                primaryKey="id"
                currentPage={2}
                itemsPerPage={1}
                totalItems={3}
                itemsPerPageOptions={[1, 5, 10]}
                onPageChange={() => { }}
                onItemsPerPageChange={() => { }}
            />
        );

        expect(screen.getByText('Bob')).toBeInTheDocument();
        expect(screen.queryByText('Alice')).not.toBeInTheDocument();
        expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
    });

    it('should allow custom attributes to the Pagination component', () => {
        render(
            <DataTable<TestData>
                enablePagination
                data={data}
                columns={columns}
                primaryKey="id"
                itemsPerPageOptions={[5, 10]}
                paginationProps={{'data-testid': 'custom-pagination'}}
            />
        );

        expect(screen.getByTestId('custom-pagination')).toBeInTheDocument();
    });

    it('should show nested subRows when parent is expanded', () => {
        const nestedData: TestData[] = [
            {
                id: '1',
                name: 'Level1',
                age: 50,
                subRows: [
                    {
                        id: '1.1',
                        name: 'Level2',
                        age: 25,
                        subRows: [{id: '1.1.1', name: 'Level3', age: 5}]
                    }
                ]
            }
        ];

        render(
            <DataTable<TestData>
                isStructured
                data={nestedData}
                columns={columns}
                primaryKey="id"
            />
        );

        expect(screen.getByText('Level1')).toBeInTheDocument();
        expect(screen.getByText('Level2')).toBeInTheDocument();
        expect(screen.getByText('Level3')).toBeInTheDocument();
    });

    it('should use totalItems for server-side pagination', () => {
        const firstPageData = [data[0]];

        render(
            <DataTable<TestData>
                enablePagination
                data={firstPageData}
                columns={columns}
                primaryKey="id"
                currentPage={1}
                itemsPerPage={1}
                itemsPerPageOptions={[1, 5, 10]}
                totalItems={100}
                onPageChange={() => { }}
                onItemsPerPageChange={() => { }}
            />
        );

        expect(screen.getByText('1-1 of 100')).toBeInTheDocument();
    });
});

describe('DataTable sorting feature', () => {
    it('should sort data when header is clicked', async () => {
        const user = userEvent.setup();
        render(
            <DataTable
                enableSorting
                data={data}
                columns={sortableColumns}
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
                columns={sortableColumns}
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
                defaultItemsPerPage={1}
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

describe('DataTable custom cells', () => {
    it('should measure width from first row for header alignment', () => {
        render(
            <DataTable<StatusBarData>
                data={statusBarData}
                columns={statusBarColumns}
                primaryKey="id"
                renderRow={(row, defaultRender) => (
                    <TableRow key={row.id}>
                        {defaultRender({
                            before: (
                                <TableCellStatus
                                    color="success"
                                    text="Test"
                                />
                            )
                        })}
                    </TableRow>
                )}
            />
        );

        // Header cells for custom columns should have padding: 0
        const headerRow = screen.getAllByRole('row')[0];
        const firstHeader = within(headerRow).getAllByRole('columnheader')[0];
        expect(firstHeader).toHaveStyle({padding: '0'});
    });
});
