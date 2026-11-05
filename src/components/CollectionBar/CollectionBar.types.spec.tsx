import type { CollectionBarCloseReason, CollectionBarColumn, CollectionBarFilter, CollectionBarProps } from './index';
import type React from 'react';

// tsc checks these types in the build, and Vitest runs them as empty tests
describe('CollectionBar types', () => {
    type Base = { filters: CollectionBarFilter[] };
    type Columns = { columns: CollectionBarColumn[] };
    type OnChange = (visibleColumns: string[]) => void;

    it('takes the column props only with columns', () => {
        expectTypeOf<Base>().toExtend<CollectionBarProps>();
        expectTypeOf<Base & Columns>().toExtend<CollectionBarProps>();
        expectTypeOf<Base & Columns & { visibleColumns: string[]; onVisibleColumnsChange: OnChange }>().toExtend<CollectionBarProps>();
        expectTypeOf<Base & Columns & { defaultVisibleColumns: string[]; onVisibleColumnsChange: OnChange }>().toExtend<CollectionBarProps>();

        expectTypeOf<Base & { visibleColumns: string[] }>().not.toExtend<CollectionBarProps>();
        expectTypeOf<Base & { defaultVisibleColumns: string[] }>().not.toExtend<CollectionBarProps>();
        expectTypeOf<Base & { onVisibleColumnsChange: OnChange }>().not.toExtend<CollectionBarProps>();
    });

    it('takes the visible columns in one form only, and a controlled value with its callback', () => {
        expectTypeOf<Base & Columns & { visibleColumns: string[]; defaultVisibleColumns: string[]; onVisibleColumnsChange: OnChange }>().not.toExtend<CollectionBarProps>();
        expectTypeOf<Base & Columns & { visibleColumns: string[] }>().not.toExtend<CollectionBarProps>();
    });

    it('takes the controlled and the uncontrolled form of the open selector', () => {
        expectTypeOf<Base & { openFilterKey: string | null; onOpenFilterChange: (key: string | null) => void }>().toExtend<CollectionBarProps>();
        expectTypeOf<Base & { defaultOpenFilterKey: string }>().toExtend<CollectionBarProps>();
        expectTypeOf<Base & { openFilterKey: null; defaultOpenFilterKey: string; onOpenFilterChange: (key: string | null) => void }>().not.toExtend<CollectionBarProps>();
        expectTypeOf<Base & { openFilterKey: string }>().not.toExtend<CollectionBarProps>();
        expectTypeOf<CollectionBarProps['onOpenFilterChange']>().toEqualTypeOf<((openFilterKey: string | null) => void) | undefined>();
    });

    it('reports the visible columns as a mutable array of keys', () => {
        expectTypeOf<NonNullable<CollectionBarProps['onVisibleColumnsChange']>>().parameters.toEqualTypeOf<[string[]]>();
    });

    it('gives onClose the reason of the close', () => {
        expectTypeOf<CollectionBarCloseReason>().toEqualTypeOf<'escape' | 'outsidePress' | 'closeButton' | 'chip' | 'otherControl' | 'close'>();
        expectTypeOf<NonNullable<CollectionBarFilter['onClose']>>().parameters.toEqualTypeOf<[{ reason: CollectionBarCloseReason }]>();
    });

    it('takes a keyboard event in onClear and onClearAll', () => {
        expectTypeOf<CollectionBarFilter['onClear']>().toBeCallableWith({} as React.KeyboardEvent);
        expectTypeOf<NonNullable<CollectionBarProps['onClearAll']>>().toBeCallableWith({} as React.KeyboardEvent);
    });
});
