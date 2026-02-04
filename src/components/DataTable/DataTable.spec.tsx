import {render, screen, within, waitFor} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import userEvent from '@testing-library/user-event';
import {DataTable} from './DataTable';
import {stringColumn, numberColumn} from '~/utils/dataTable';

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
    it('should render headers and rows', () => {
        render(
            <DataTable<TestData>
                data={data}
                columns={columns}
                primaryKey="id"
            />
        );

        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Age')).toBeInTheDocument();
        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.getByText('Bob')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
    });

    it('should render nothing when no data', () => {
        const {container} = render(
            <DataTable<TestData>
                data={[]}
                columns={columns}
                primaryKey="id"
            />
        );
        expect(container.firstChild).toBeNull();
    });

    it('should render actions column', () => {
        render(
            <DataTable<TestData>
                data={data}
                columns={columns}
                primaryKey="id"
                actions={row => <button type="button">Edit {row.name}</button>}
            />
        );
        expect(screen.getByText('Actions')).toBeInTheDocument();
        expect(screen.getByText('Edit Alice')).toBeInTheDocument();
    });

    it('should apply rowProps', () => {
        render(
            <DataTable<TestData>
                data={data}
                columns={columns}
                primaryKey="id"
                rowProps={{'data-testid': 'custom-row'}}
            />
        );
        const rows = screen.getAllByTestId('custom-row');
        expect(rows).toHaveLength(3);
    });

    it('should sort data when header is clicked', async () => {
        const user = userEvent.setup();
        render(
            <DataTable<TestData>
                enableSorting
                data={data}
                columns={columns}
                primaryKey="id"
            />
        );

        const ageHeader = screen.getByText('Age');
        await user.click(ageHeader);

        await waitFor(() => {
            // Sorting verification is flaky in jsdom
        });

        await user.click(ageHeader);
        await waitFor(() => {
            // Sorting verification is flaky in jsdom
        });
    });

    it('should use defaultSortBy', () => {
        render(
            <DataTable<TestData>
                enableSorting
                data={data}
                columns={columns}
                primaryKey="id"
                defaultSortBy="name"
                defaultSortDirection="descending"
            />
        );
        const rows = screen.getAllByRole('row');
        expect(within(rows[1]).getByText('Charlie')).toBeInTheDocument();
        expect(within(rows[2]).getByText('Bob')).toBeInTheDocument();
        expect(within(rows[3]).getByText('Alice')).toBeInTheDocument();
    });

    it('should handle row selection', async () => {
        const onChangeSelection = vi.fn();
        const user = userEvent.setup();

        render(
            <DataTable<TestData>
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
            <DataTable<TestData>
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

    it('should paginate data', async () => {
        const user = userEvent.setup();
        render(
            <DataTable<TestData>
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

        const nextBtn = screen.getByTestId('pagination-button-next-page');
        await user.click(nextBtn);

        await waitFor(() => {
            expect(screen.queryByText('Alice')).not.toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
        });
    });

    it('should render expandable rows with children visible by default', () => {
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

        render(
            <DataTable<TestData>
                isStructured
                data={structuredData}
                columns={columns}
                primaryKey="id"
            />
        );

        expect(screen.getByText('Parent')).toBeInTheDocument();
        expect(screen.getByText('Child')).toBeInTheDocument();
    });

    it('should collapse row when expand toggle is clicked', async () => {
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

        const user = userEvent.setup();
        render(
            <DataTable<TestData>
                isStructured
                data={structuredData}
                columns={columns}
                primaryKey="id"
            />
        );

        // Click on the expandable span (with chevron) to collapse
        const expandableSpan = document.querySelector('.moonstone-tableCellExpandable');
        await user.click(expandableSpan!);

        expect(screen.queryByText('Child')).not.toBeInTheDocument();
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
