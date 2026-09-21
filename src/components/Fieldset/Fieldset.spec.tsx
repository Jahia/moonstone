import { render, screen } from '@testing-library/react';

import { Fieldset } from './index';
import { Button, Field, FieldSelector, Input } from '~/components';
import { Add, Love } from '~/icons';

import type { FieldsetProps } from './Fieldset.types';

const requiredProps = {
    id: 'test',
    label: 'Fieldset label',
};

describe('Fieldset', () => {
    it('should display additional class names', () => {
        render(<Fieldset {...requiredProps} className="extra" data-testid="fieldset"><FieldSelector selector={<textarea placeholder="Input value"/>}/></Fieldset>);
        expect(screen.getByTestId('fieldset')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<Fieldset {...requiredProps}><div/></Fieldset>);
        expect(screen.getByText('Fieldset label')).toBeInTheDocument();
    });

    it('should display helper', () => {
        render(<Fieldset {...requiredProps} helper="Fieldset helper"><div/></Fieldset>);
        expect(screen.getByText('Fieldset helper')).toBeInTheDocument();
    });

    it('should display formatted helper', () => {
        render(<Fieldset {...requiredProps} helper={<strong>Fieldset helper</strong>}><div/></Fieldset>);
        expect(screen.getByText('Fieldset helper').tagName).toBe('STRONG');
    });

    it('should display children', () => {
        render(<Fieldset {...requiredProps}><Field helper="information" id="field" label="Field"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></Fieldset>);
        expect(screen.getByDisplayValue('Input value')).toBeInTheDocument();
    });

    it('should display multiple children', () => {
        render(<Fieldset {...requiredProps}><Field helper="information" id="field" label="Field"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field><Field helper="information" id="field" label="Field"><FieldSelector selector={<Input size="big" value="Input value"/>}/></Field></Fieldset>);
        expect(screen.getAllByDisplayValue('Input value')).toHaveLength(2);
    });

    it('should display buttons', () => {
        render(<Fieldset {...requiredProps} buttons={<Button label="Click me"/>}><div/></Fieldset>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(<Fieldset {...requiredProps} buttons={<><Button icon={<Add/>} label="Click me"/><Button icon={<Love/>} label="Click me"/></>}><div/></Fieldset>);
        expect(screen.getAllByText('Click me')).toHaveLength(2);
    });
    it('should render nothing when no children are provided', () => {
        const incompleteProps = { ...requiredProps, children: undefined } as FieldsetProps;
        const { container } = render(<Fieldset {...incompleteProps}/>);
        expect(container).toBeEmptyDOMElement();
    });
});
