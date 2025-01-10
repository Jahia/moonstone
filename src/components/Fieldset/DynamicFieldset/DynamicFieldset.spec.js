import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {DynamicFieldset} from './index';
import {Button, Input, Field, FieldSelector} from '~/components';
import {Add, Love} from '~/icons';

describe('DynamicFieldset', () => {
    it('should display additional class names', () => {
        render(<DynamicFieldset data-testid="dynamic-fieldset" className="extra"><FieldSelector selector={<textarea placeholder="Input value"/>}/></DynamicFieldset>);
        expect(screen.getByTestId('dynamic-fieldset')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<DynamicFieldset label="Dynamic fieldset label"/>);
        expect(screen.queryByText('Dynamic fieldset label')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<DynamicFieldset helper="Dynamic fieldset helper"/>);
        expect(screen.queryByText('Dynamic fieldset helper')).toBeInTheDocument();
    });

    it('should display buttons', () => {
        render(<DynamicFieldset buttons={<Button label="Click me"/>}/>);
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(<DynamicFieldset buttons={<><Button icon={<Add/>} label="Click me"/><Button icon={<Love/>} label="Click me"/></>}/>);
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });

    it('should display children when the switch is clicked', async () => {
        const user = userEvent.setup();

        render(<DynamicFieldset><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></DynamicFieldset>);
        await user.click(screen.getByRole('checkbox'), '1');

        expect(screen.queryByDisplayValue('Input value')).toBeInTheDocument();
    });
});

describe('UncontrolledDynamicFieldset', () => {
    it('should display children when defaultOpen is set', () => {
        render(<DynamicFieldset defaultOpen><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></DynamicFieldset>);
        expect(screen.queryByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(<DynamicFieldset defaultOpen data-testid="dynamic-fieldset" onChange={handleChange}/>);
        await user.click(screen.getByRole('checkbox'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledDynamicFieldset', () => {
    it('should display children when isOpen is true', () => {
        render(<DynamicFieldset isOpen><Field id="field" label="Field" helper="information"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></DynamicFieldset>);
        expect(screen.queryByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(<DynamicFieldset isOpen data-testid="dynamic-fieldset" onChange={handleChange}/>);
        await user.click(screen.getByRole('checkbox'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
