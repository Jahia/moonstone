import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {FieldBoolean} from './index';
import {Button, Chip} from '~/index';
import {Add, Love} from '~/icons';

const requiredProps = {
    id: 'test',
    label: 'FieldBoolean label'
};

describe('FieldBoolean', () => {
    it('should display additional class names', () => {
        render(<FieldBoolean {...requiredProps} data-testid="fieldBoolean" className="extra"/>);
        expect(screen.getByTestId('fieldBoolean')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<FieldBoolean {...requiredProps}/>);
        expect(screen.queryByText('FieldBoolean label')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<FieldBoolean {...requiredProps} chips={<Chip label="FieldBoolean chip"/>}/>);
        expect(screen.queryByText('FieldBoolean chip')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<FieldBoolean {...requiredProps} helper="FieldBoolean helper"/>);
        expect(screen.queryByText('FieldBoolean helper')).toBeInTheDocument();
    });

    it('should display checkbox', () => {
        render(
            <FieldBoolean
                {...requiredProps}
                className="extra"
                checkboxAttributes={{value: 'checkbox'}}
            />
        );
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should be checked when clicked', async () => {
        render(
            <FieldBoolean
                {...requiredProps}
                className="extra"
                checkboxAttributes={{value: 'checkbox'}}
            />
        );
        await userEvent.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should display buttons', () => {
        render(<FieldBoolean {...requiredProps} buttons={<Button label="Click me"/>}/>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <FieldBoolean
                {...requiredProps}
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
                {...requiredProps}
                buttons={<Button label="Click me" onClick={onClick}/>}
            />
        );
        await userEvent.click(
            screen.getByRole('button', {name: /Click me/i})
        );
        expect(onClick).toHaveBeenCalled();
    });

    it('should display as error variant', () => {
        render(<FieldBoolean {...requiredProps} hasError data-testid="fieldBoolean"/>);
        expect(screen.getByTestId('fieldBoolean')).toHaveClass(
            'moonstone-field_error'
        );
    });

    it('should display errorMessage', () => {
        render(
            <FieldBoolean {...requiredProps} hasError errorMessage="FieldBoolean errorMessage"/>
        );
        expect(
            screen.queryByText('FieldBoolean errorMessage')
        ).toBeInTheDocument();
    });
});
