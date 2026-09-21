import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DynamicFieldset } from './index';
import { Button, Field, FieldSelector, Input } from '~/components';
import { Add, Love, MoreVert } from '~/icons';

const requiredProps = {
    id: 'test',
    label: 'Dynamic fieldset label',
};

describe('DynamicFieldset', () => {
    it('should display additional class names', () => {
        render(
            <DynamicFieldset {...requiredProps} className="extra" data-testid="dynamic-fieldset">
                <FieldSelector
                    selector={<textarea placeholder="Input value"/>}
                />
            </DynamicFieldset>,
        );
        expect(screen.getByTestId('dynamic-fieldset')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<DynamicFieldset {...requiredProps}/>);
        expect(
            screen.getByText('Dynamic fieldset label'),
        ).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<DynamicFieldset {...requiredProps} helper="Dynamic fieldset helper"/>);
        expect(
            screen.getByText('Dynamic fieldset helper'),
        ).toBeInTheDocument();
    });

    it('should display buttons', () => {
        render(<DynamicFieldset {...requiredProps} buttons={<Button label="Click me"/>}/>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <DynamicFieldset
                {...requiredProps}
                buttons={(
                    <>
                        <Button icon={<Add/>} label="Click me"/>
                        <Button icon={<Love/>} label="Click me"/>
                    </>
                )}
            />,
        );
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });

    it('should display children when the switch is clicked', async () => {
        const user = userEvent.setup();

        render(
            <DynamicFieldset {...requiredProps}>
                <Field helper="information" id="field" label="Field">
                    <FieldSelector
                        selector={<Input size="big" value="Input value"/>}
                    />
                </Field>
            </DynamicFieldset>,
        );
        await user.click(screen.getByRole('checkbox'));

        expect(screen.getByDisplayValue('Input value')).toBeInTheDocument();
    });
});

describe('UncontrolledDynamicFieldset', () => {
    it('should display children when defaultChecked is set', () => {
        render(
            <DynamicFieldset {...requiredProps} defaultChecked>
                <Field helper="information" id="field" label="Field">
                    <FieldSelector
                        selector={<Input size="big" value="Input value"/>}
                    />
                </Field>
            </DynamicFieldset>,
        );
        expect(screen.getByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DynamicFieldset
                {...requiredProps}
                defaultChecked
                data-testid="dynamic-fieldset"
                onChange={handleChange}
            />,
        );
        await user.click(screen.getByRole('checkbox'));

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledDynamicFieldset', () => {
    it('should display children when checked', () => {
        render(
            <DynamicFieldset {...requiredProps} checked>
                <Field helper="information" id="field" label="Field">
                    <FieldSelector
                        selector={<Input size="big" value="Input value"/>}
                    />
                </Field>
            </DynamicFieldset>,
        );
        expect(screen.getByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DynamicFieldset
                {...requiredProps}
                checked
                data-testid="dynamic-fieldset"
                onChange={handleChange}
            />,
        );
        await user.click(screen.getByRole('checkbox'));

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});

const renderFieldset = (props = {}) => {
    const onChange = vi.fn();
    const onMore = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <DynamicFieldset
                buttons={<Button aria-label="More" icon={<MoreVert/>} onClick={onMore}/>}
                id="fieldset"
                label="Options"
                onChange={onChange}
                {...props}
            >
                <Input placeholder="Field value"/>
            </DynamicFieldset>
        </>,
    );
    return { onChange, onMore };
};

const getSwitch = () => screen.queryByRole('switch') ?? screen.getByRole('checkbox');

describe('DynamicFieldset keyboard', () => {
    it('reaches the switch with Tab', async () => {
        renderFieldset();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getSwitch()).toHaveFocus();
    });

    it.fails('reveals the fields with Space on the switch and calls onChange', async () => {
        const { onChange } = renderFieldset();
        expect(screen.queryByRole('textbox')).toBeNull();
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('textbox')).toBeVisible();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it.fails('hides the fields with Space on the switch and keeps focus on the switch', async () => {
        renderFieldset({ defaultChecked: true });
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(screen.queryByRole('textbox')).toBeNull();
        expect(getSwitch()).toHaveFocus();
    });

    it('reaches the action button then the revealed fields with Tab after the switch', async () => {
        renderFieldset({ defaultChecked: true });
        getSwitch().focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'More' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('activates the action button with Enter', async () => {
        const { onMore } = renderFieldset();
        screen.getByRole('button', { name: 'More' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onMore).toHaveBeenCalledTimes(1);
    });

    it('activates the action button with Space', async () => {
        const { onMore } = renderFieldset();
        screen.getByRole('button', { name: 'More' }).focus();
        await userEvent.keyboard(' ');
        expect(onMore).toHaveBeenCalledTimes(1);
    });
});
