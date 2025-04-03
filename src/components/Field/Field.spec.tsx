import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Field} from './index';
import {FieldSelector} from './FieldSelector';
import {Button, Chip} from '~/index';
import {Add, Love} from '~/icons';

describe('Field', () => {
    it('should display additional class names', () => {
        render(
            <Field data-testid="field" className="extra">
                <FieldSelector
                    selector={<textarea placeholder="Input value"/>}
                />
            </Field>
        );
        expect(screen.getByTestId('field')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<Field label="Field label"/>);
        expect(screen.queryByText('Field label')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<Field chips={<Chip label="Field chip"/>}/>);
        expect(screen.queryByText('Field chip')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<Field helper="Field helper"/>);
        expect(screen.queryByText('Field helper')).toBeInTheDocument();
    });

    it('should display children', () => {
        render(
            <Field>
                <FieldSelector selector={<textarea value="Input value"/>}/>
            </Field>
        );
        expect(screen.queryByText('Input value')).toBeInTheDocument();
    });

    it('should display multiple children', () => {
        render(
            <Field>
                <FieldSelector selector={<textarea value="Input value"/>}/>
                <FieldSelector selector={<textarea value="Input value"/>}/>
            </Field>
        );
        expect(screen.getAllByText('Input value')).toHaveLength(2);
    });

    it('should display buttons', () => {
        render(<Field buttons={<Button label="Click me"/>}/>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <Field
                buttons={
                    <>
                        <Button icon={<Add/>} label="Click me"/>
                        <Button icon={<Love/>} label="Click me"/>
                    </>
                }
            />
        );
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });

    it('should call onClick when button is clicked', async () => {
        const onClick = vi.fn();
        render(
            <Field buttons={<Button label="Click me" onClick={onClick}/>}/>
        );
        await userEvent.click(
            screen.getByRole('button', {label: /Click me/i})
        );
        expect(onClick).toHaveBeenCalled();
    });

    it('should display as error variant', () => {
        render(<Field hasError data-testid="field"/>);
        expect(screen.getByTestId('field')).toHaveClass(
            'moonstone-field_error'
        );
    });

    it('should display errorMessage', () => {
        render(<Field hasError errorMessage="Field errorMessage"/>);
        expect(screen.queryByText('Field errorMessage')).toBeInTheDocument();
    });
});
