import React from 'react';
import {render, screen} from '@testing-library/react';

import {Fieldset} from './index';
import {Button, Input, Field, FieldSelector} from '~/components';
import {Add, Love} from '~/icons';

const requiredProps = {
    id: 'test',
    label: 'Fieldset label'
};

describe('Fieldset', () => {
    it('should display additional class names', () => {
        render(<Fieldset {...requiredProps} data-testid="fieldset" className="extra"><FieldSelector selector={<textarea placeholder="Input value"/>}/></Fieldset>);
        expect(screen.getByTestId('fieldset')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<Fieldset {...requiredProps}><div/></Fieldset>);
        expect(screen.queryByText('Fieldset label')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<Fieldset {...requiredProps} helper="Fieldset helper"><div/></Fieldset>);
        expect(screen.queryByText('Fieldset helper')).toBeInTheDocument();
    });

    it('should display children', () => {
        render(<Fieldset {...requiredProps}><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></Fieldset>);
        expect(screen.queryByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should display multiple children', () => {
        render(<Fieldset {...requiredProps}><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></Fieldset>);
        expect(screen.getAllByDisplayValue('Input value')).toHaveLength(2);
    });

    it('should display buttons', () => {
        render(<Fieldset {...requiredProps} buttons={<Button label="Click me"/>}><div/></Fieldset>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(<Fieldset {...requiredProps} buttons={<><Button icon={<Add/>} label="Click me"/><Button icon={<Love/>} label="Click me"/></>}><div/></Fieldset>);
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });
});
