import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Field} from './index';
import {FieldSelector} from './FieldSelector';
import {Button, Chip} from '~/index';
import {Add, Love} from '~/icons';

const requiredProps = {
    id: 'test',
    label: 'Field label'
};

describe('Field', () => {
    it('should display additional class names', () => {
        render(
            <Field {...requiredProps} data-testid="field" className="extra">
                <FieldSelector
                    selector={<textarea placeholder="Input value"/>}
                />
            </Field>
        );
        expect(screen.getByTestId('field')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<Field {...requiredProps}><div/></Field>);
        expect(screen.queryByText('Field label')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<Field {...requiredProps} chips={<Chip label="Field chip"/>}><div/></Field>);
        expect(screen.queryByText('Field chip')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<Field {...requiredProps} helper="Field helper"><div/></Field>);
        expect(screen.queryByText('Field helper')).toBeInTheDocument();
    });

    it('should display children', () => {
        render(
            <Field {...requiredProps}>
                <FieldSelector selector={<textarea value="Input value"/>}/>
            </Field>
        );
        expect(screen.queryByText('Input value')).toBeInTheDocument();
    });

    it('should display multiple children', () => {
        render(
            <Field {...requiredProps}>
                <FieldSelector selector={<textarea value="Input value"/>}/>
                <FieldSelector selector={<textarea value="Input value"/>}/>
            </Field>
        );
        expect(screen.getAllByText('Input value')).toHaveLength(2);
    });

    it('should display buttons', () => {
        render(<Field {...requiredProps} buttons={<Button label="Click me"/>}><div/></Field>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <Field {...requiredProps}
                   buttons={
                       <>
                           <Button icon={<Add/>} label="Click me"/>
                           <Button icon={<Love/>} label="Click me"/>
                       </>
                }
            >
                <div/>
            </Field>
        );
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });

    it('should call onClick when button is clicked', async () => {
        const onClick = vi.fn();
        render(
            <Field {...requiredProps} buttons={<Button data-testid="testButton" label="Click me" onClick={onClick}/>}><div/></Field>
        );
        await userEvent.click(
            screen.getByTestId('testButton')
        );
        expect(onClick).toHaveBeenCalled();
    });

    it('should display as error variant', () => {
        render(<Field {...requiredProps} hasError data-testid="field"><div/></Field>);
        expect(screen.getByTestId('field')).toHaveClass(
            'moonstone-field_error'
        );
    });

    it('should display errorMessage', () => {
        render(<Field {...requiredProps} hasError errorMessage="Field errorMessage"><div/></Field>);
        expect(screen.queryByText('Field errorMessage')).toBeInTheDocument();
    });
});
