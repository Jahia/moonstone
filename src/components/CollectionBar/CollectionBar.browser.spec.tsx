import { render, screen, waitFor, within } from '@testing-library/react';
import { startTransition, Suspense, useState } from 'react';
import { userEvent } from 'vitest/browser';

import { CollectionBar } from './index';
import { Drawer } from '~/components/Drawer';
import { DateTimeInput } from '~/components/Input/DateTimeInput';
import { collectionBarColumns, useCollectionBarFilters } from '~/data/collectionBar';

type BarProps = {
    initialValues?: Record<string, string>;
};

const Bar = ({ initialValues }: BarProps) => {
    const { filters } = useCollectionBarFilters({ initialValues });
    const [visibleColumns, setVisibleColumns] = useState(['date', 'user', 'action', 'path']);
    return (
        <>
            <button type="button">before</button>
            <CollectionBar
                columns={collectionBarColumns}
                filters={filters}
                visibleColumns={visibleColumns}
                onVisibleColumnsChange={setVisibleColumns}
            />
            <button type="button">after</button>
        </>
    );
};

const button = (name: string) => screen.getByRole('button', { name });

describe('CollectionBar keyboard', () => {
    it('is one Tab stop, on its first control', async () => {
        render(<Bar/>);
        button('before').focus();
        await userEvent.keyboard('{Tab}');
        expect(button('Date')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(button('after')).toHaveFocus();
    });

    it('moves between its controls with the arrow keys, Home and End', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('Date: Today').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Clear the Date filter')).toHaveFocus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Add filter')).toHaveFocus();
        await userEvent.keyboard('{End}');
        expect(button('Choose the columns')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(button('Date: Today')).toHaveFocus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(button('Choose the columns')).toHaveFocus();
    });

    it('skips a disabled Add filter', async () => {
        render(<Bar initialValues={{ user: 'root', action: 'Published' }}/>);
        button('Clear the Action filter').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Choose the columns')).toHaveFocus();
    });

    it('opens the selector with Enter and moves the focus into it', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
    });

    it('closes the selector with Escape and gives the focus back to the chip (case 9)', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await waitFor(() => expect(button('Date')).toHaveFocus());
    });

    it('gives the focus back to the chip that took a value', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('Today{Escape}');
        await waitFor(() => expect(button('Date: Today')).toHaveFocus());
    });

    it('adds a filter from the keyboard and moves the focus into its selector', async () => {
        render(<Bar/>);
        button('Add filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'User' })).toHaveFocus());
        expect(screen.getByRole('dialog', { name: 'User' })).toBeVisible();
    });

    it('gives the focus to Add filter when an added chip with no value leaves the bar', async () => {
        render(<Bar/>);
        button('Add filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'User' })).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
        await waitFor(() => expect(button('Add filter')).toHaveFocus());
    });

    it('closes the Add filter menu with Escape and gives the focus back to Add filter', async () => {
        render(<Bar/>);
        button('Add filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(button('Add filter')).toHaveFocus());
        expect(button('Add filter')).toHaveAttribute('aria-expanded', 'false');
    });

    it('clears a value with the keyboard and gives the focus back to the chip', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('Clear the Date filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(button('Date')).toHaveFocus());
    });

    it('shows the full value of a chip in a tooltip on focus', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('before').focus();
        await userEvent.keyboard('{Tab}');
        expect(button('Date: Today')).toHaveFocus();
        await waitFor(() => expect(screen.getByRole('tooltip')).toHaveTextContent('Date: Today'));
    });

    it('toggles a column with Space and keeps the column menu open', async () => {
        render(<Bar/>);
        button('Choose the columns').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        const menu = screen.getByRole('searchbox').closest('menu');
        within(menu).getByRole('menuitemcheckbox', { name: 'Details' }).focus();
        await userEvent.keyboard(' ');
        expect(within(menu).getByRole('menuitemcheckbox', { name: 'Details' })).toHaveAttribute('aria-checked', 'true');
        expect(menu).toBeVisible();
    });
    it('keeps Tab and Shift+Tab in the open selector', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        expect(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus();
        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
        expect(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' })).toHaveFocus();
    });

    it('keeps the focus on a visible column that moves to the hidden columns', async () => {
        render(<Bar/>);
        button('Choose the columns').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveFocus());
        const user = screen.getByRole('menuitemcheckbox', { name: 'User' });
        user.focus();
        await userEvent.keyboard(' ');
        await waitFor(() => expect(screen.getByRole('menuitemcheckbox', { name: 'User' })).toHaveFocus());
        expect(screen.getByRole('menuitemcheckbox', { name: 'User' })).toHaveAttribute('aria-checked', 'false');
    });

    it('shows the name of the clear button in a tooltip on focus', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('Date: Today').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Clear the Date filter')).toHaveFocus();
        await waitFor(() => expect(screen.getByRole('tooltip')).toHaveTextContent('Clear the Date filter'));
    });

    it('insets the title of the selector as a Menu title', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        const dialog = await screen.findByRole('dialog', { name: 'Date' });
        const title = document.getElementById(dialog.getAttribute('aria-labelledby'));
        expect(title.getBoundingClientRect().left - dialog.getBoundingClientRect().left).toBe(16);
        expect(title.getBoundingClientRect().top - dialog.getBoundingClientRect().top).toBe(4);
    });

    it('moves nothing below the bar when the selector opens', async () => {
        render(<Bar/>);
        const after = button('after');
        const top = after.getBoundingClientRect().top;
        const tops: number[] = [];
        // The callback runs after each render that adds the dialog, before the next render positions it
        const observer = new MutationObserver(() => tops.push(after.getBoundingClientRect().top));
        observer.observe(document.body, { childList: true, subtree: true });
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('dialog', { name: 'Date' });
        await waitFor(() => expect(tops).not.toHaveLength(0));
        observer.disconnect();
        expect(tops).toEqual(tops.map(() => top));
    });

    it('moves the focus once when a clear changes nothing', async () => {
        render(
            <CollectionBar
                filters={[
                    { key: 'path', label: 'Path', valueLabel: '/sites', isDisplayedByDefault: true, selector: <input aria-label="Path"/>, onClear: () => undefined },
                    { key: 'user', label: 'User', selector: <input aria-label="User"/>, onClear: () => undefined },
                ]}
            />,
        );
        button('Clear the Path filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(button('Path: /sites')).toHaveFocus());
        await userEvent.keyboard('{ArrowRight}{ArrowRight}{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
    });

    it.each([
        ['Choose the columns', 30, 0],
        ['Add filter', 0, 30],
    ])('bounds the height of the %s menu, which scrolls', async (name, columnCount, filterCount) => {
        const columns = Array.from({ length: columnCount }, (_, i) => ({ key: `column${i}`, label: `Column ${i}` }));
        render(
            <CollectionBar
                columns={columnCount > 0 ? columns : undefined}
                filters={Array.from({ length: filterCount }, (_, i) => ({ key: `filter${i}`, label: `Filter ${i}`, selector: <span/>, onClear: () => undefined }))}
                visibleColumns={columns.map(column => column.key)}
                onVisibleColumnsChange={() => undefined}
            />,
        );
        button(name).focus();
        await userEvent.keyboard('{Enter}');
        const menu = await screen.findByLabelText(name, { selector: 'menu' });
        expect(menu.getBoundingClientRect().height).toBeLessThanOrEqual(270);
        expect(menu.scrollHeight).toBeGreaterThan(menu.clientHeight);
    });

    it('gives the focus back to the chip when the function form calls close with an argument', async () => {
        render(
            <CollectionBar
                filters={[{
                    key: 'user',
                    label: 'User',
                    isDisplayedByDefault: true,
                    selector: ({ close }) => <button type="button" onClick={() => (close as (arg: unknown) => void)(false)}>Done</button>,
                    onClear: () => undefined,
                }]}
            />,
        );
        button('User').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(button('Done')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await waitFor(() => expect(button('User')).toHaveFocus());
    });

    it('gives the focus back to the chip when the consumer closes a controlled selector', async () => {
        const Controlled = () => {
            const [openFilterKey, setOpenFilterKey] = useState<string | null>(null);
            return (
                <CollectionBar
                    filters={[{ key: 'user', label: 'User', isDisplayedByDefault: true, selector: <button type="button" onClick={() => setOpenFilterKey(null)}>Apply</button>, onClear: () => undefined }]}
                    openFilterKey={openFilterKey}
                    onOpenFilterChange={setOpenFilterKey}
                />
            );
        };

        render(<Controlled/>);
        button('User').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(button('Apply')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await waitFor(() => expect(button('User')).toHaveFocus());
    });

    describe('with an onClear that suspends in a transition', () => {
        let resolve: () => void;
        let isLoaded: boolean;
        let loading: Promise<void>;
        beforeEach(() => {
            isLoaded = false;
            loading = new Promise<void>((done) => {
                resolve = () => {
                    isLoaded = true;
                    done();
                };
            });
        });

        const Rows = ({ value }: { value: string }) => {
            if (!value && !isLoaded) {
                throw loading;
            }

            return <p>{value || 'Every date'}</p>;
        };

        const Page = () => {
            const [value, setValue] = useState('Today');
            return (
                <>
                    <CollectionBar filters={[{ key: 'date', label: 'Date', valueLabel: value, isDisplayedByDefault: true, selector: <span/>, onClear: () => startTransition(() => setValue('')) }]}/>
                    <Suspense fallback={<p>Loading</p>}>
                        <Rows value={value}/>
                    </Suspense>
                </>
            );
        };

        it('keeps the content, and moves the focus to the chip', async () => {
            render(<Page/>);
            button('Clear the Date filter').focus();
            await userEvent.keyboard('{Enter}');
            expect(screen.queryByText('Loading')).not.toBeInTheDocument();
            expect(screen.getByText('Today', { selector: 'p' })).toBeInTheDocument();
            expect(button('Date: Today')).toHaveFocus();
        });

        // A chip that loses its value loses its Tooltip, so the chip remounts when the transition commits (one stable tree, D22)
        it.fails('keeps the focus on the chip when the transition commits', async () => {
            render(<Page/>);
            button('Clear the Date filter').focus();
            await userEvent.keyboard('{Enter}');
            resolve();
            await screen.findByText('Every date');
            expect(button('Date')).toHaveFocus();
        });
    });

    it('moves the selector with its chip when the page scrolls', async () => {
        render(
            <>
                <Bar/>
                <div style={{ height: '200vh' }}/>
            </>,
        );
        // The open selector hides the bar from assistive technologies, so the chip is found first
        const chip = button('Date');
        chip.focus();
        await userEvent.keyboard('{Enter}');
        const dialog = await screen.findByRole('dialog', { name: 'Date' });
        const gap = () => dialog.getBoundingClientRect().top - chip.getBoundingClientRect().bottom;
        await waitFor(() => expect(gap()).toBe(4));
        window.scrollTo(0, 40);
        await waitFor(() => expect(chip.getBoundingClientRect().top).toBeLessThan(0));
        await waitFor(() => expect(gap()).toBe(4));
        window.scrollTo(0, 0);
    });

    it('keeps the selector below its chip when the bar becomes a toolbar', async () => {
        // Date and Add filter: the first value adds the clear button, the third control
        const TwoControls = () => {
            const { filters } = useCollectionBarFilters({});
            return <CollectionBar filters={filters}/>;
        };

        render(<TwoControls/>);
        expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        const dialog = await screen.findByRole('dialog', { name: 'Date' });
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('T');
        const chip = screen.getByRole('button', { name: 'Date: T', hidden: true });
        await waitFor(() => expect(dialog.getBoundingClientRect().top - chip.getBoundingClientRect().bottom).toBe(4));
    });

    describe('in an open Drawer', () => {
        // The animation of the Drawer keeps a transform, which becomes the containing block of a fixed descendant
        const renderInDrawer = async () => {
            render(
                <div style={{ paddingLeft: 40, paddingTop: 100 }}>
                    <Drawer isOpen aria-label="Drawer">
                        <Bar/>
                    </Drawer>
                </div>,
            );
            await Promise.all(document.getAnimations().map(animation => animation.finished));
        };

        it('places the selector below its chip', async () => {
            await renderInDrawer();
            const chipButton = button('Date');
            chipButton.focus();
            await userEvent.keyboard('{Enter}');
            const dialog = await screen.findByRole('dialog', { name: 'Date' });
            const chip = chipButton.getBoundingClientRect();
            await waitFor(() => expect(dialog.getBoundingClientRect().top - chip.bottom).toBe(4));
            expect(dialog.getBoundingClientRect().left).toBe(chip.left);
        });

        const placesMenu = (name: string, edge: 'left' | 'right') => async () => {
            await renderInDrawer();
            button(name).focus();
            await userEvent.keyboard('{Enter}');
            const menu = await screen.findByLabelText(name, { selector: 'menu' });
            const anchor = button(name).getBoundingClientRect();
            await waitFor(() => expect(menu.getBoundingClientRect().top - anchor.bottom).toBe(4));
            expect(menu.getBoundingClientRect()[edge]).toBe(anchor[edge]);
        };

        // Menu renders inline with position: fixed, so the offset of the Drawer moves it
        it.fails('places the Add filter menu below its button', placesMenu('Add filter', 'left'));
        it.fails('places the column menu below its button', placesMenu('Choose the columns', 'right'));
    });

    describe('with a DateTimeInput in a selector', () => {
        const openCalendar = async () => {
            render(<CollectionBar filters={[{ key: 'date', label: 'Date', isDisplayedByDefault: true, selector: <DateTimeInput aria-label="Date" locale="en" type="date"/>, onClear: () => undefined }]}/>);
            button('Date').focus();
            await userEvent.keyboard('{Enter}');
            await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
            await userEvent.keyboard(' ');
            return screen.findByTestId('calendar');
        };

        it('keeps the selector open on a click in the calendar', async () => {
            const calendar = await openCalendar();
            await userEvent.click(within(calendar).getByRole('button', { name: 'Go to the next month' }));
            expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
            expect(screen.getByTestId('calendar')).toBeInTheDocument();
        });

        it('closes the calendar on the first Escape, and the selector on the second', async () => {
            await openCalendar();
            await userEvent.keyboard('{Escape}');
            expect(screen.queryByTestId('calendar')).not.toBeInTheDocument();
            expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
            await userEvent.keyboard('{Escape}');
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
            await waitFor(() => expect(button('Date')).toHaveFocus());
        });

        it('keeps Tab in the selector while the calendar is open', async () => {
            await openCalendar();
            await userEvent.keyboard('{Tab}');
            expect(screen.getByRole('dialog', { name: 'Date' })).toContainElement(document.activeElement as HTMLElement);
        });
    });
});
