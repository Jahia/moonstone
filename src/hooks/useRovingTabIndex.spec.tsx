import { Composite, CompositeItem } from '@floating-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mergeHandlers } from './mergeHandlers';
import { rovingItemProps, useRovingTabIndex } from './useRovingTabIndex';

type TestListProps = {
    readonly orientation?: 'vertical' | 'horizontal';
    readonly initialIndex?: number;
    readonly onKeyDown?: React.KeyboardEventHandler;
};

const TestList = ({ orientation = 'vertical', initialIndex, onKeyDown }: TestListProps) => {
    const rovingTabIndex = useRovingTabIndex({ orientation });

    return (
        <>
            <button type="button">before</button>
            <Composite
                {...rovingTabIndex.getCompositeProps(initialIndex)}
                render={compositeProps => (
                    <div
                        {...compositeProps}
                        {...mergeHandlers({ onKeyDown }, {
                            onKeyDown: rovingTabIndex.onKeyDown,
                            onBlur: rovingTabIndex.onBlur,
                        })}
                    />
                )}
            >
                <CompositeItem {...rovingItemProps} render={<button type="button">First</button>}/>
                <CompositeItem {...rovingItemProps} render={<button disabled type="button">Disabled</button>}/>
                <CompositeItem {...rovingItemProps} render={<button type="button">Third</button>}/>
                <CompositeItem {...rovingItemProps} render={<button type="button">Last</button>}/>
            </Composite>
            <button type="button">after</button>
        </>
    );
};

const item = (name: string) => screen.getByRole('button', { name });

describe('useRovingTabIndex', () => {
    it('should make the widget one Tab stop', async () => {
        const user = userEvent.setup();
        render(<TestList/>);
        item('before').focus();
        await user.keyboard('[Tab]');
        expect(item('First')).toHaveFocus();
        await user.keyboard('[Tab]');
        expect(item('after')).toHaveFocus();
    });

    it('should put the Tab stop on the initial item', async () => {
        const user = userEvent.setup();
        render(<TestList initialIndex={2}/>);
        item('before').focus();
        await user.keyboard('[Tab]');
        expect(item('Third')).toHaveFocus();
    });

    it('should skip a disabled item', async () => {
        const user = userEvent.setup();
        render(<TestList/>);
        item('First').focus();
        await user.keyboard('[ArrowDown]');
        expect(item('Third')).toHaveFocus();
    });

    it('should move to the first and last items with Home and End', async () => {
        const user = userEvent.setup();
        render(<TestList/>);
        item('Third').focus();
        await user.keyboard('[End]');
        expect(item('Last')).toHaveFocus();
        await user.keyboard('[Home]');
        expect(item('First')).toHaveFocus();
    });

    it('should follow the orientation', async () => {
        const user = userEvent.setup();
        render(<TestList orientation="horizontal"/>);
        item('First').focus();
        await user.keyboard('[ArrowDown]');
        expect(item('First')).toHaveFocus();
        await user.keyboard('[ArrowRight]');
        expect(item('Third')).toHaveFocus();
    });

    it('should keep the Tab stop on the focused item, and give it back to the initial item once focus leaves', async () => {
        const user = userEvent.setup();
        render(<TestList/>);
        item('First').focus();
        await user.keyboard('[ArrowDown]');
        expect(item('Third')).toHaveAttribute('tabindex', '0');
        expect(item('First')).toHaveAttribute('tabindex', '-1');
        await user.keyboard('[Tab]');
        expect(item('after')).toHaveFocus();
        await user.keyboard('{Shift>}[Tab]{/Shift}');
        expect(item('First')).toHaveFocus();
    });

    it('should leave a key held with a modifier to the browser', async () => {
        const user = userEvent.setup();
        render(<TestList/>);
        item('First').focus();
        await user.keyboard('{Alt>}[ArrowDown]{/Alt}');
        expect(item('First')).toHaveFocus();
    });

    it('should leave a key that the consumer already handled', async () => {
        const user = userEvent.setup();
        render(<TestList onKeyDown={e => e.preventDefault()}/>);
        item('First').focus();
        await user.keyboard('[ArrowDown]');
        expect(item('First')).toHaveFocus();
    });
});
