import React from 'react';
import {render, screen} from '@testing-library/react';

import {Fieldset} from './index';
import {Button, Input, Field, FieldSelector} from '~/components';
import {Add, Love} from '~/icons';

describe('Fieldset', () => {
    it('should display additional class names', () => {
        render(<Fieldset data-testid="fieldset" className="extra"><FieldSelector selector={<textarea placeholder="Input value"/>}/></Fieldset>);
        expect(screen.getByTestId('fieldset')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<Fieldset label="Fieldset label"/>);
        expect(screen.queryByText('Fieldset label')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<Fieldset helper="Fieldset helper"/>);
        expect(screen.queryByText('Fieldset helper')).toBeInTheDocument();
    });

    it('should display children', () => {
        render(<Fieldset><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></Fieldset>);
        expect(screen.queryByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should display multiple children', () => {
        render(<Fieldset><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></Fieldset>);
        expect(screen.getAllByDisplayValue('Input value')).toHaveLength(2);
    });

    it('should display buttons', () => {
        render(<Fieldset buttons={<Button label="Click me"/>}/>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(<Fieldset buttons={<><Button icon={<Add/>} label="Click me"/><Button icon={<Love/>} label="Click me"/></>}/>);
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });
});
