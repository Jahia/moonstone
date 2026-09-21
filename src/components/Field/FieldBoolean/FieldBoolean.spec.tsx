import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FieldBoolean } from './index';
import { Button } from '~/components/Button';
import { Chip } from '~/components/Chip';
import { Add, Love } from '~/icons';

const requiredProps = {
    id: 'test',
    label: 'FieldBoolean label',
};

describe('FieldBoolean', () => {
    it('should display additional class names', () => {
        render(<FieldBoolean {...requiredProps} className="extra" data-testid="fieldBoolean"/>);
        expect(screen.getByTestId('fieldBoolean')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<FieldBoolean {...requiredProps}/>);
        expect(screen.getByText('FieldBoolean label')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<FieldBoolean {...requiredProps} chips={<Chip label="FieldBoolean chip"/>}/>);
        expect(screen.getByText('FieldBoolean chip')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<FieldBoolean {...requiredProps} helper="FieldBoolean helper"/>);
        expect(screen.getByText('FieldBoolean helper')).toBeInTheDocument();
    });

    it('should display formatted helper', () => {
        render(<FieldBoolean {...requiredProps} helper={<strong>FieldBoolean helper</strong>}/>);
        expect(screen.getByText('FieldBoolean helper').tagName).toBe('STRONG');
    });

    it('should display checkbox', () => {
        render(
            <FieldBoolean
                {...requiredProps}
                checkboxAttributes={{ value: 'checkbox' }}
                className="extra"
            />,
        );
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should be checked when clicked', async () => {
        render(
            <FieldBoolean
                {...requiredProps}
                checkboxAttributes={{ value: 'checkbox' }}
                className="extra"
            />,
        );
        await userEvent.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should display buttons', () => {
        render(<FieldBoolean {...requiredProps} buttons={<Button label="Click me"/>}/>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <FieldBoolean
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

    it('should call onClick when button is clicked', async () => {
        const onClick = vi.fn();
        render(
            <FieldBoolean
                {...requiredProps}
                buttons={<Button data-testid="testButton" label="Click me" onClick={onClick}/>}
            />,
        );
        await userEvent.click(
            screen.getByTestId('testButton'),
        );
        expect(onClick).toHaveBeenCalled();
    });

    it('should display as error variant', () => {
        render(<FieldBoolean {...requiredProps} hasError data-testid="fieldBoolean"/>);
        expect(screen.getByTestId('fieldBoolean')).toHaveClass(
            'moonstone-field_error',
        );
    });

    it('should display errorMessage', () => {
        render(
            <FieldBoolean {...requiredProps} hasError errorMessage="FieldBoolean errorMessage"/>,
        );
        expect(
            screen.getByText('FieldBoolean errorMessage'),
        ).toBeInTheDocument();
    });
});

describe('FieldBoolean keyboard', () => {
    it('reaches the checkbox with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <FieldBoolean checkboxAttributes={{ value: 'enabled' }} id="field" label="Enabled"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Enabled' })).toHaveFocus();
    });

    it('toggles the checkbox with Space and calls onChange', async () => {
        const onChange = vi.fn();
        render(<FieldBoolean checkboxAttributes={{ value: 'enabled', onChange }} id="field" label="Enabled"/>);
        screen.getByRole('checkbox', { name: 'Enabled' }).focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox', { name: 'Enabled' })).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'enabled', true);
    });

    it('skips a disabled checkbox in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <FieldBoolean checkboxAttributes={{ value: 'enabled', isDisabled: true }} id="field" label="Enabled"/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});
