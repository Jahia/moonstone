import React from 'react';
import {Story} from '@storybook/react';
import {RadioProps} from './Radio.types';
import {Radio} from '~/components';

export default {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

const Template: Story<RadioProps> = args => <Radio {...args}/>;

export const DefaultControlled = Template.bind({});
DefaultControlled.args = {
    id: 'simple-radio',
    name: 'make-a-choice',
    value: 'simple-choice',
    label: 'Label',
    description: 'Description here'
};
DefaultControlled.storyName = 'PlayGround';

export const Multiple = () => {
    return (
        <div>
            <Radio
                id="radio-01"
                label="Label"
                description="Description here"
                name="simple-choice"
                value="cat"
            />
            <Radio
                defaultChecked
                id="radio-02"
                label="Element checked"
                description="Description here"
                name="simple-choice"
                value="dog"
            />
            <Radio
                isDisabled
                id="radio-03"
                label="Element disabled"
                description="Description here"
                name="simple-choice"
                value="horse"
            />
            <Radio
                id="radio-04"
                label="Element without description"
                name="simple-choice"
                value="bird"
            />
        </div>
    );
};
