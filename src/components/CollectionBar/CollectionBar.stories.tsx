import clsx from 'clsx';
import { startTransition, Suspense, useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import markdownNotes from './CollectionBar.md';
import { CollectionBar } from './index';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgSquare from '~/__storybook__/assets/img-square.webp';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import { DataTable, DateTimeInput, Drawer, Input, Thumbnail, Typography } from '~/components';
import { collectionBarColumns, useCollectionBarFilters } from '~/data/collectionBar';
import { layout } from '~/globals/css-utils.js';

import type { CollectionBarProps } from './CollectionBar.types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DataTableColumn } from '~/components/DataTable';

const meta = {
    title: 'Components/CollectionBar',
    component: CollectionBar,
    tags: ['beta'],
    parameters: {
        layout: 'padded',
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        i18n: { control: 'object' },
        // The stories own these props, so their controls would change nothing
        filters: { control: false },
        columns: { control: false },
        visibleColumns: { control: false },
        defaultVisibleColumns: { control: false },
        onVisibleColumnsChange: { control: false },
        openFilterKey: { control: false },
        defaultOpenFilterKey: { control: false },
        onOpenFilterChange: { control: false },
        onClearAll: { control: false },
    },
} satisfies Meta<typeof CollectionBar>;

export default meta;

// The stories own the filters and the columns, so their controls are the other props
type StoryArgs = Pick<CollectionBarProps, 'isDisabled' | 'i18n'>;
type Story = StoryObj<StoryArgs>;

type HistoryRow = { id: string; date: string; user: string; action: string; path: string; details: string };

const rows: HistoryRow[] = [
    { id: '1', date: '2026-11-02', user: 'root', action: 'Published', path: '/sites/digitall/home', details: 'Published in English' },
    { id: '2', date: '2026-11-02', user: 'editor', action: 'Modified', path: '/sites/digitall/home/about', details: 'Title changed' },
    { id: '3', date: '2026-11-01', user: 'root', action: 'Deleted', path: '/sites/digitall/home/news/old-post', details: 'Moved to the trash' },
    { id: '4', date: '2026-10-31', user: 'reviewer', action: 'Published', path: '/sites/digitall/home/news', details: 'Published in French' },
];

const tableColumns: DataTableColumn<HistoryRow>[] = collectionBarColumns.map(({ key, label }) => ({ key: key as keyof HistoryRow, label }));

// The story filters its rows by user and by date. The bar itself holds no data
const matches = (row: HistoryRow, values: Record<string, string>) => ['user', 'date']
    .every(key => !values[key] || row[key as 'user' | 'date'].toLowerCase().includes(values[key].toLowerCase()));

const AboveDataTable = ({ initialValues, ...args }: StoryArgs & { initialValues?: Record<string, string> }) => {
    const { values, filters, clearAll } = useCollectionBarFilters({ initialValues });
    const [visibleColumns, setVisibleColumns] = useState(['date', 'user', 'action', 'path']);
    return (
        <div className={clsx('flexCol', layout.flexCol)}>
            <CollectionBar
                {...args}
                columns={collectionBarColumns}
                filters={filters}
                visibleColumns={visibleColumns}
                onClearAll={clearAll}
                onVisibleColumnsChange={setVisibleColumns}
            />
            <DataTable
                columns={tableColumns.filter(column => visibleColumns.includes(column.key))}
                data={rows.filter(row => matches(row, values))}
                primaryKey="id"
            />
        </div>
    );
};

export const Default: Story = {
    render: args => <AboveDataTable {...args}/>,
    name: 'Above a DataTable',
};

export const WithValues: Story = {
    render: args => <AboveDataTable {...args} initialValues={{ user: 'root', action: 'Published, Modified, Deleted, Moved, Copied, Renamed and Translated' }}/>,
    name: 'With values',
};

export const Disabled: Story = {
    render: args => <AboveDataTable {...args} initialValues={{ user: 'root' }}/>,
    args: { isDisabled: true },
};

const images = [imgHorizontal, imgSquare, imgVertical, imgHorizontal];

const AboveThumbnailsTemplate = (args: StoryArgs) => {
    const { filters, clearAll } = useCollectionBarFilters();
    return (
        <div className={clsx('flexCol', layout.flexCol)}>
            <CollectionBar {...args} filters={filters} onClearAll={clearAll}/>
            <div className={clsx('flexRow', layout.flexRow)} style={{ gap: 'var(--moon-spacing-medium)' }}>
                {rows.map((row, index) => (
                    <div className={clsx('flexCol', layout.flexCol)} key={row.id}>
                        <Thumbnail alt="" src={images[index]}/>
                        <Typography variant="caption">{row.path.split('/').pop()}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const WithoutColumnChoice: Story = {
    render: args => <AboveThumbnailsTemplate {...args}/>,
    name: 'Above thumbnails, without the column choice',
};

export const FocusedChip: Story = {
    render: args => <AboveDataTable {...args} initialValues={{ date: '2026-11-02' }}/>,
    name: 'Focused chip',
    play: async ({ canvasElement }) => {
        (canvasElement.querySelector('[role="toolbar"] button') as HTMLElement | null)?.focus({ focusVisible: true } as FocusOptions);
    },
};

// A play function opens a popup, so that the axe pass and the visual test cover it
export const OpenSelector: Story = {
    render: args => <AboveDataTable {...args} initialValues={{ date: '2026-11-02' }}/>,
    name: 'Open selector',
    play: async ({ canvasElement }) => {
        (canvasElement.querySelector('.moonstone-collectionBar_chipButton') as HTMLElement | null)?.click();
    },
};

export const OpenColumnChoice: Story = {
    render: args => <AboveDataTable {...args}/>,
    name: 'Open column choice',
    play: async ({ canvasElement }) => {
        (canvasElement.querySelector('.moonstone-collectionBar_columnButton') as HTMLElement | null)?.click();
    },
};

export const OpenAddFilter: Story = {
    render: args => <AboveDataTable {...args}/>,
    name: 'Open Add filter',
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('button', { name: 'Add filter' }));
        await within(canvasElement).findByLabelText('Add filter', { selector: 'menu' });
    },
};

// The gap between a chip and its selector
const selectorGap = (chip: HTMLElement) => within(document.body).getByRole('dialog').getBoundingClientRect().top - chip.getBoundingClientRect().bottom;

// The animation of a Drawer keeps a transform, which becomes the containing block of a fixed descendant.
// The two menus of the bar still render inline, so this story opens the selector only
export const InDrawer: Story = {
    render: args => (
        <Drawer isOpen aria-label="Site history">
            <AboveDataTable {...args}/>
        </Drawer>
    ),
    name: 'In an open Drawer',
    play: async ({ canvasElement }) => {
        await Promise.all(canvasElement.ownerDocument.getAnimations().map(animation => animation.finished));
        const chip = within(canvasElement).getByRole('button', { name: 'Date' });
        await userEvent.click(chip);
        await waitFor(() => expect(selectorGap(chip)).toBe(4));
    },
};

export const WithDateTimeInput: StoryObj<typeof CollectionBar> = {
    render: args => <CollectionBar {...args}/>,
    name: 'With a DateTimeInput in a selector',
    args: {
        filters: [{
            key: 'date',
            label: 'Date',
            isDisplayedByDefault: true,
            selector: <DateTimeInput aria-label="Date" defaultValue="2026-03-30" locale="en" type="date"/>,
            onClear: () => undefined,
        }],
    },
    play: async ({ canvasElement }) => {
        const body = within(canvasElement.ownerDocument.body);
        await userEvent.click(within(canvasElement).getByRole('button', { name: 'Date' }));
        await waitFor(() => expect(body.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        // Escape closes the calendar first, and leaves the selector open
        await userEvent.keyboard(' ');
        await body.findByTestId('calendar');
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(body.queryByTestId('calendar')).not.toBeInTheDocument());
        await expect(body.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
        // A click in the calendar is no click outside the selector
        await userEvent.keyboard(' ');
        await userEvent.click(await body.findByRole('button', { name: 'Go to the next month' }));
        await expect(body.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
        await expect(body.getByTestId('calendar')).toBeInTheDocument();
        // Tab from the field stays in the selector while the calendar is open
        await userEvent.click(body.getByRole('textbox', { name: 'Date' }));
        await userEvent.tab();
        await expect(body.getByRole('dialog', { name: 'Date' })).toContainElement(canvasElement.ownerDocument.activeElement as HTMLElement);
    },
};

export const InScrolledContainer: Story = {
    render: args => (
        <div data-testid="scroller" style={{ height: 300, overflow: 'auto' }}>
            <div style={{ height: 40 }}/>
            <AboveDataTable {...args}/>
            <div style={{ height: 600 }}/>
        </div>
    ),
    name: 'In a scrolled container',
    play: async ({ canvasElement }) => {
        const chip = within(canvasElement).getByRole('button', { name: 'Date' });
        await userEvent.click(chip);
        await waitFor(() => expect(selectorGap(chip)).toBe(4));
        // The selector follows its chip when the container scrolls
        within(canvasElement).getByTestId('scroller').scrollTop = 30;
        await waitFor(() => expect(selectorGap(chip)).toBe(4));
    },
};

// The rows suspend while their data loads. onClear starts a transition, so the rows and the bar stay on screen until the data comes
const SuspendingRows = ({ value, loading }: { value: string; loading: Promise<void> }) => {
    if (!value) {
        throw loading;
    }

    return <Typography>Rows of {value}</Typography>;
};

const WithSuspendingClear = (args: StoryArgs) => {
    const [value, setValue] = useState('Today');
    // A load that never ends, so the story shows the state while the data loads
    const [loading] = useState(() => new Promise<void>(() => undefined));
    return (
        <div className={clsx('flexCol', layout.flexCol)}>
            <CollectionBar
                {...args}
                filters={[{
                    key: 'date',
                    label: 'Date',
                    valueLabel: value,
                    isDisplayedByDefault: true,
                    selector: <Input aria-label="Date" value={value} onChange={event => setValue(event.target.value)}/>,
                    onClear: () => startTransition(() => setValue('')),
                }]}
            />
            <Suspense fallback={<Typography>Loading</Typography>}>
                <SuspendingRows loading={loading} value={value}/>
            </Suspense>
        </div>
    );
};

export const SuspendingClear: Story = {
    render: args => <WithSuspendingClear {...args}/>,
    name: 'With an onClear that suspends',
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button', { name: 'Clear the Date filter' }));
        await expect(canvas.queryByText('Loading')).not.toBeInTheDocument();
        await expect(canvas.getByText('Rows of Today')).toBeInTheDocument();
        await expect(canvas.getByRole('button', { name: 'Date: Today' })).toHaveFocus();
    },
};

// The bar alone, with static props, as a developer writes it
export const Minimal: StoryObj<typeof CollectionBar> = {
    render: args => <CollectionBar {...args}/>,
    args: {
        filters: [
            {
                key: 'path',
                label: 'Path',
                valueLabel: '/sites/digitall/home',
                isDisplayedByDefault: true,
                selector: <Input aria-label="Path" placeholder="For example /sites/digitall/home" value="/sites/digitall/home"/>,
                onClear: () => undefined,
            },
            {
                key: 'user',
                label: 'User',
                selector: ({ close }) => <Input aria-label="User" placeholder="For example root" onKeyUp={e => e.key === 'Enter' && close()}/>,
                onClear: () => undefined,
            },
        ],
    },
};
