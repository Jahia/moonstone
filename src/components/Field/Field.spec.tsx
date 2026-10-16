import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FieldSelector } from './FieldSelector';
import { Field } from './index';
import { Button } from '~/components/Button';
import { Chip } from '~/components/Chip';
import { Dropdown } from '~/components/Dropdown';
import { Input } from '~/components/Input';
import { Add, Love } from '~/icons';

import type { FieldProps } from './Field.types';

const requiredProps = {
    id: 'test',
    label: 'Field label',
};

describe('Field', () => {
    it('should render nothing when no children are provided', () => {
        const incompleteProps = { ...requiredProps, children: undefined } as FieldProps;
        const { container } = render(<Field {...incompleteProps}/>);
        expect(container).toBeEmptyDOMElement();
    });

    it('should display additional class names', () => {
        render(
            <Field {...requiredProps} className="extra" data-testid="field">
                <FieldSelector
                    selector={<textarea placeholder="Input value"/>}
                />
            </Field>,
        );
        expect(screen.getByTestId('field')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<Field {...requiredProps}><div/></Field>);
        expect(screen.getByText('Field label')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<Field {...requiredProps} chips={<Chip label="Field chip"/>}><div/></Field>);
        expect(screen.getByText('Field chip')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<Field {...requiredProps} helper="Field helper"><div/></Field>);
        expect(screen.getByText('Field helper')).toBeInTheDocument();
    });

    it('should display formatted helper', () => {
        render(<Field {...requiredProps} helper={<strong>Field helper</strong>}><div/></Field>);
        expect(screen.getByText('Field helper').tagName).toBe('STRONG');
    });

    it('should display children', () => {
        render(
            <Field {...requiredProps}>
                <FieldSelector selector={<textarea value="Input value"/>}/>
            </Field>,
        );
        expect(screen.getByText('Input value')).toBeInTheDocument();
    });

    it('should display multiple children', () => {
        render(
            <Field {...requiredProps}>
                <FieldSelector selector={<textarea value="Input value"/>}/>
                <FieldSelector selector={<textarea value="Input value"/>}/>
            </Field>,
        );
        expect(screen.getAllByText('Input value')).toHaveLength(2);
    });

    it('should display buttons', () => {
        render(<Field {...requiredProps} buttons={<Button label="Click me"/>}><div/></Field>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <Field
                {...requiredProps}
                buttons={(
                    <>
                        <Button icon={<Add/>} label="Click me"/>
                        <Button icon={<Love/>} label="Click me"/>
                    </>
                )}
            >
                <div/>
            </Field>,
        );
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });

    it('should call onClick when button is clicked', async () => {
        const onClick = vi.fn();
        render(
            <Field {...requiredProps} buttons={<Button data-testid="testButton" label="Click me" onClick={onClick}/>}><div/></Field>,
        );
        await userEvent.click(
            screen.getByTestId('testButton'),
        );
        expect(onClick).toHaveBeenCalled();
    });

    it('should display as error variant', () => {
        render(<Field {...requiredProps} hasError data-testid="field"><div/></Field>);
        expect(screen.getByTestId('field')).toHaveClass(
            'moonstone-field_error',
        );
    });

    it('should display errorMessage', () => {
        render(<Field {...requiredProps} hasError errorMessage="Field errorMessage"><div/></Field>);
        expect(screen.getByText('Field errorMessage')).toBeInTheDocument();
    });

    it('should name the input inside with its label, and describe it with its helper and its error', () => {
        render(
            <Field
                hasError
                errorMessage="Required"
                helper="Help"
                id="title"
                label="Title"
            >
                <Input/>
            </Field>,
        );
        const input = screen.getByRole('textbox', { name: 'Title' });
        expect(input).toHaveAccessibleDescription('Help Required');
        expect(input).toBeInvalid();
        expect(screen.getByRole('alert')).toHaveTextContent('Required');
    });

    it('should name a Dropdown inside with its label followed by the selected value', () => {
        render(
            <Field id="language" label="Language">
                <Dropdown data={[{ label: 'French', value: 'fr' }]} value="fr" onChange={() => null}/>
            </Field>,
        );
        expect(screen.getByRole('listbox', { name: 'Language French' })).toBeInTheDocument();
    });
});
