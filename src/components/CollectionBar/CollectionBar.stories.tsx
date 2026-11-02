import clsx from 'clsx';
import { useState } from 'react';

import markdownNotes from './CollectionBar.md';
import { CollectionBar } from './index';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgSquare from '~/__storybook__/assets/img-square.webp';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import { DataTable, Input, Thumbnail, Typography } from '~/components';
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
        onVisibleColumnsChange: { control: false },
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
