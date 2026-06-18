import {render, screen, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {DataTable, numberColumn, stringColumn, TableCell, TableCellStatus, TableRow} from '~/components/DataTable';

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
        ...stringColumn((row: TestData) => row.name)
    },
    {
        key: 'age',
        label: 'Age',
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
                renderRow={({id, data: rowData, render: renderCells}) => (
                    <TableRow key={id} data-testid={id}>
                        {renderCells({
                            after: (
                                <TableCell data-testid={`after-${id}`}>
                                    {rowData.name}
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
                renderRow={({id, data: rowData, render: renderCells}) => (
                    <TableRow key={id} data-testid={id}>
                        {renderCells({
                            before: (
                                <TableCell data-testid={`before-${id}`}>
                                    {rowData.name}
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

    it('should apply rowProps function per row', () => {
        render(
            <DataTable<TestData>
                data={data}
                columns={columns}
                primaryKey="id"
                rowProps={({id}) => ({'data-testid': `row-${id}`})}
            />
        );

        expect(screen.getByTestId('row-1')).toBeInTheDocument();
        expect(screen.getByTestId('row-2')).toBeInTheDocument();
        expect(screen.getByTestId('row-3')).toBeInTheDocument();
    });

    it('should apply conditional className via rowProps function', () => {
        render(
            <DataTable<TestData>
                data={data}
                columns={columns}
                primaryKey="id"
                rowProps={({data: rowData}) => ({
                    'data-testid': 'conditional-row',
                    className: rowData.age >= 30 ? 'senior' : 'junior'
                })}
            />
        );

        const rows = screen.getAllByTestId('conditional-row');
        expect(rows).toHaveLength(3);
        // Alice (30) and Charlie (35) are senior, Bob (25) is junior
        expect(rows[0]).toHaveClass('senior'); // Alice
        expect(rows[1]).toHaveClass('junior'); // Bob
        expect(rows[2]).toHaveClass('senior'); // Charlie
    });

    it('should render both before and after custom cells', () => {
        render(
            <DataTable
                data={data}
                columns={columns}
                primaryKey="id"
                renderRow={({id, render: renderCells}) => (
                    <TableRow key={id}>
                        {renderCells({
                            before: (
                                <TableCell data-testid={`before-${id}`}>
                                    {`before-${id}`}
                                </TableCell>
                            ),
                            after: (
                                <TableCell data-testid={`after-${id}`}>
                                    {`after-${id}`}
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

    it('should not reset expansion state when data reference changes', async () => {
        // Regression: useEffect with [data] was calling toggleAllRowsExpanded on every data change,
        // reverting any manual collapse done by the user.
        const user = userEvent.setup();
        const {rerender} = render(
            <DataTable<TestData>
                isStructured
                data={structuredData}
                columns={columns}
                primaryKey="id"
            />
        );

        // Collapse the parent row
        await user.click(screen.getByText('Parent'));
        expect(screen.queryByText('Child')).not.toBeInTheDocument();

        // Simulate a data reference change with same content (e.g. re-fetch, filter)
        rerender(
            <DataTable<TestData>
                isStructured
                data={[...structuredData]}
                columns={columns}
                primaryKey="id"
            />
        );

        // Expansion state must be preserved — child must remain hidden
        expect(screen.queryByText('Child')).not.toBeInTheDocument();
    });

    it('should expand only specified rows via defaultExpandedRows', () => {
        const multiParentData: TestData[] = [
            {id: '1', name: 'Parent A', age: 50, subRows: [{id: '1.1', name: 'Child A', age: 10}]},
            {id: '2', name: 'Parent B', age: 60, subRows: [{id: '2.1', name: 'Child B', age: 20}]}
        ];

        render(
            <DataTable<TestData>
                isStructured
                data={multiParentData}
                columns={columns}
                primaryKey="id"
                defaultExpandedRows={['1']}
            />
        );

        expect(screen.getByText('Child A')).toBeInTheDocument();
        expect(screen.queryByText('Child B')).not.toBeInTheDocument();
    });

    it('should respect controlled expandedRows prop', () => {
        const multiParentData: TestData[] = [
            {id: '1', name: 'Parent A', age: 50, subRows: [{id: '1.1', name: 'Child A', age: 10}]},
            {id: '2', name: 'Parent B', age: 60, subRows: [{id: '2.1', name: 'Child B', age: 20}]}
        ];

        const {rerender} = render(
            <DataTable<TestData>
                isStructured
                data={multiParentData}
                columns={columns}
                primaryKey="id"
                expandedRows={['1']}
                onExpandChange={() => { }}
            />
        );

        expect(screen.getByText('Child A')).toBeInTheDocument();
        expect(screen.queryByText('Child B')).not.toBeInTheDocument();

        // Parent updates controlled state to expand second parent
        rerender(
            <DataTable<TestData>
                isStructured
                data={multiParentData}
                columns={columns}
                primaryKey="id"
                expandedRows={['2']}
                onExpandChange={() => { }}
            />
        );

        expect(screen.queryByText('Child A')).not.toBeInTheDocument();
        expect(screen.getByText('Child B')).toBeInTheDocument();
    });

    it('should call onExpandChange when a row is toggled', async () => {
        const onExpandChange = vi.fn();
        const user = userEvent.setup();

        render(
            <DataTable<TestData>
                isStructured
                data={structuredData}
                columns={columns}
                primaryKey="id"
                onExpandChange={onExpandChange}
            />
        );

        await user.click(screen.getByText('Parent'));
        // When collapsing parent "1", TanStack transitions from `true` (all expanded) to an explicit
        // record; child "1.1" remains listed as expanded in the record even though it is hidden.
        expect(onExpandChange).toHaveBeenCalledWith(['1.1']);
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

        await user.click(screen.getByText('Parent'));
        expect(screen.queryByText('Child')).not.toBeInTheDocument();

        await user.click(screen.getByText('Parent'));
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

    it('should apply cellProps to regular cells', () => {
        const columnsWithCellProps = [
            {
                key: 'name',
                label: 'Name',
                cellProps: {'data-testid': 'test-cell', className: 'custom-class'},
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
                columns={columnsWithCellProps}
                primaryKey="id"
            />
        );

        const nameCells = screen.getAllByTestId('test-cell');
        expect(nameCells).toHaveLength(data.length);
        nameCells.forEach(cell => {
            expect(cell).toHaveClass('custom-class');
        });
    });

    it('should apply cellProps to structured cells', () => {
        const columnsWithCellProps = [
            {
                key: 'name',
                label: 'Name',
                cellProps: {'data-testid': 'name-cell'},
                ...stringColumn((row: TestData) => row.name)
            },
            {
                key: 'age',
                label: 'Age',
                ...numberColumn((row: TestData) => row.age)
            }
        ] as const;

        render(
            <DataTable
                isStructured
                data={structuredData}
                columns={columnsWithCellProps}
                primaryKey="id"
            />
        );

        const nameCells = screen.getAllByTestId('name-cell');
        expect(nameCells.length).toBeGreaterThan(0);
    });

    it('should apply cellProps function to regular cells per row', () => {
        const columnsWithFnCellProps = [
            {
                key: 'name',
                label: 'Name',
                cellProps: ({data: cellData}: {data: TestData}) => ({
                    'data-testid': 'fn-cell',
                    className: cellData.age >= 30 ? 'senior' : 'junior'
                }),
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
                columns={columnsWithFnCellProps}
                primaryKey="id"
            />
        );

        const nameCells = screen.getAllByTestId('fn-cell');
        expect(nameCells).toHaveLength(data.length);
        // Alice (30) and Charlie (35) are senior, Bob (25) is junior
        expect(nameCells[0]).toHaveClass('senior'); // Alice
        expect(nameCells[1]).toHaveClass('junior'); // Bob
        expect(nameCells[2]).toHaveClass('senior'); // Charlie
    });

    it('should apply cellProps function to structured cells per row', () => {
        const columnsWithFnCellProps = [
            {
                key: 'name',
                label: 'Name',
                cellProps: ({data: cellData}: {data: TestData}) => ({'data-testid': `name-cell-${cellData.id}`}),
                ...stringColumn((row: TestData) => row.name)
            },
            {
                key: 'age',
                label: 'Age',
                ...numberColumn((row: TestData) => row.age)
            }
        ] as const;

        render(
            <DataTable
                isStructured
                data={structuredData}
                columns={columnsWithFnCellProps}
                primaryKey="id"
            />
        );

        expect(screen.getByTestId('name-cell-1')).toBeInTheDocument();
        expect(screen.getByTestId('name-cell-1.1')).toBeInTheDocument();
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
        // Controlled (server-side) pagination: the caller provides only the current page's items.
        // With manualPagination=true TanStack renders data as-is without client-side slicing.
        const page2Data = [data[1]]; // Only Bob, the single item for page 2
        render(
            <DataTable<TestData>
                enablePagination
                data={page2Data}
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

    it('should display server-side page data without client-side slicing on page 2', () => {
        // Regression test: when currentPage=2 and data contains only the 5 items returned by the server
        // for that page, all 5 items should be visible (not sliced to an empty set by TanStack).
        const serverPage2Data: TestData[] = [
            {id: '6', name: 'Frank', age: 28},
            {id: '7', name: 'Grace', age: 33},
            {id: '8', name: 'Hank', age: 41},
            {id: '9', name: 'Ivy', age: 22},
            {id: '10', name: 'Jack', age: 37}
        ];

        render(
            <DataTable<TestData>
                enablePagination
                data={serverPage2Data}
                columns={columns}
                primaryKey="id"
                currentPage={2}
                itemsPerPage={5}
                totalItems={10}
                itemsPerPageOptions={[5, 10]}
                onPageChange={() => { }}
                onItemsPerPageChange={() => { }}
            />
        );

        expect(screen.getByText('Frank')).toBeInTheDocument();
        expect(screen.getByText('Grace')).toBeInTheDocument();
        expect(screen.getByText('Hank')).toBeInTheDocument();
        expect(screen.getByText('Ivy')).toBeInTheDocument();
        expect(screen.getByText('Jack')).toBeInTheDocument();
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

    it('should respect controlled sorting and not re-sort server-sorted data', () => {
        // Server returns data already sorted descending by age; TanStack must not re-sort locally.
        const serverSortedData: TestData[] = [
            {id: '3', name: 'Charlie', age: 35},
            {id: '1', name: 'Alice', age: 30},
            {id: '2', name: 'Bob', age: 25}
        ];

        render(
            <DataTable<TestData>
                enableSorting
                data={serverSortedData}
                columns={sortableColumns}
                primaryKey="id"
                sortBy="age"
                sortDirection="descending"
                onSortChange={() => { }}
            />
        );

        const rows = screen.getAllByRole('row');
        expect(within(rows[1]).getByText('Charlie')).toBeVisible();
        expect(within(rows[2]).getByText('Alice')).toBeVisible();
        expect(within(rows[3]).getByText('Bob')).toBeVisible();
    });

    it('should call onSortChange and not mutate order when controlled', async () => {
        const onSortChange = vi.fn();
        const user = userEvent.setup();

        // Server returns data in a fixed order; clicking a header must fire onSortChange only.
        render(
            <DataTable<TestData>
                enableSorting
                data={data}
                columns={sortableColumns}
                primaryKey="id"
                sortBy="name"
                sortDirection="ascending"
                onSortChange={onSortChange}
            />
        );

        await user.click(screen.getByText('Age'));

        expect(onSortChange).toHaveBeenCalledWith('age', expect.any(String));

        // Order must remain unchanged (server hasn't responded yet)
        const rows = screen.getAllByRole('row');
        expect(within(rows[1]).getByText('Alice')).toBeVisible();
        expect(within(rows[2]).getByText('Bob')).toBeVisible();
        expect(within(rows[3]).getByText('Charlie')).toBeVisible();
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
                renderRow={({id, render: renderCells}) => (
                    <TableRow key={id}>
                        {renderCells({
                            before: <TableCellStatus color="success">test</TableCellStatus>
                        })}
                    </TableRow>
                )}
            />
        );

        // Header cells for custom columns should have padding: 0
        const headerRow = screen.getAllByRole('row')[0];
        const firstHeadCell = within(headerRow).getAllByRole('columnheader')[0];
        expect(firstHeadCell).toHaveStyle({padding: '0'});
    });
});
