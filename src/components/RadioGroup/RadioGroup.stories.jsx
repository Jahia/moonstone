import React, {useState} from 'react';
import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    subcomponents: {RadioItem},
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        componentSubtitle: 'RadioGroup & RadioItem',
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};

export const NoDefaultValue = args => {
    return (
        <RadioGroup {...args} name="no-default-value">
            <RadioItem
                id="no-default-01"
                label="RadioItem checked"
                description="Select the first RadioItem when there is no default value (value = cat)"
                value="cat"
            />
            <RadioItem
                id="no-default-02"
                label="Label"
                description="Description here (value = dog)"
                value="dog"
            />
            <RadioItem
                isDisabled
                id="no-default-03"
                label="Element disabled"
                description="Description here (value = horse)"
                value="horse"
            />
            <RadioItem
                id="no-default-04"
                label="Element without description (value = bird)"
                value="bird"
            />
        </RadioGroup>
    );
};

export const WithDefaultValue = args => {
    return (
        <RadioGroup {...args} name="default-value" defaultValue="cat">
            <RadioItem
                id="value-01"
                label="Dog"
                description="Description here"
                value="dog"
            />
            <RadioItem
                id="value-02"
                label="Cat (Default value)"
                description="Description here"
                value="cat"
            />
            <RadioItem
                id="value-03"
                label="Other"
                description="Description here"
                value="other"
            />
        </RadioGroup>
    );
};

export const Disabled = args => {
    return (
        <RadioGroup {...args} isDisabled name="disabled" defaultValue="cat">
            <RadioItem
                id="disabled-01"
                label="Dog"
                description="Description here"
                value="dog"
            />
            <RadioItem
                id="disabled-02"
                label="Cat (Default value)"
                description="Description here"
                value="cat"
            />
            <RadioItem
                id="disabled-03"
                label="Other"
                description="Description here"
                value="other"
            />
        </RadioGroup>
    );
};

export const Controlled = args => {
    const [value, setValue] = useState('other');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <RadioGroup {...args} name="controlled" value={value} onChange={(event => handleChange(event))}>
            <RadioItem
                id="controlled-01"
                label="Dog"
                description="Description here"
                value="dog"
            />
            <RadioItem
                id="controlled-02"
                label="Cat"
                description="Description here"
                value="cat"
            />
            <RadioItem
                id="controlled-03"
                label="Other"
                description="Description here"
                value="other"
            />
        </RadioGroup>
    );
};

