import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {FieldBoolean} from './index';
import {Button, Chip} from '~/index';
import {Add, Love} from '~/icons';

describe('FieldBoolean', () => {
    it('should display additional class names', () => {
        render(<FieldBoolean data-testid="fieldBoolean" className="extra"/>);
        expect(screen.getByTestId('fieldBoolean')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<FieldBoolean label="FieldBoolean label"/>);
        expect(screen.queryByText('FieldBoolean label')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<FieldBoolean chips={<Chip label="FieldBoolean chip"/>}/>);
        expect(screen.queryByText('FieldBoolean chip')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<FieldBoolean helper="FieldBoolean helper"/>);
        expect(screen.queryByText('FieldBoolean helper')).toBeInTheDocument();
    });

    it('should display checkbox', () => {
        render(
            <FieldBoolean
                className="extra"
                checkboxAttributes={{value: 'checkbox'}}
            />
        );
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should be checked when clicked', async () => {
        render(
            <FieldBoolean
                className="extra"
                checkboxAttributes={{value: 'checkbox'}}
            />
        );
        await userEvent.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should display buttons', () => {
        render(<FieldBoolean buttons={<Button label="Click me"/>}/>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <FieldBoolean
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
            <FieldBoolean
                buttons={<Button label="Click me" onClick={onClick}/>}
            />
        );
        await userEvent.click(
            screen.getByRole('button', {label: /Click me/i})
        );
        expect(onClick).toHaveBeenCalled();
    });

    it('should display as error variant', () => {
        render(<FieldBoolean hasError data-testid="fieldBoolean"/>);
        expect(screen.getByTestId('fieldBoolean')).toHaveClass(
            'moonstone-field_error'
        );
    });

    it('should display errorMessage', () => {
        render(
            <FieldBoolean hasError errorMessage="FieldBoolean errorMessage"/>
        );
        expect(
            screen.queryByText('FieldBoolean errorMessage')
        ).toBeInTheDocument();
    });
});
