import preview from '~/__storybook__/preview';

import {CheckboxGroup} from './index';
import {CheckboxItem} from './CheckboxItem';
import type {CheckboxGroupProps} from './CheckboxGroup.types';

const defaultCheckboxItems: CheckboxGroupProps['children'] = [
    <CheckboxItem key="cat" id="cat" label="Cat" description="Miaouw" value="cat"/>,
    <CheckboxItem key="dog" id="dog" label="Dog" description="Ouah-ouah" value="dog"/>,
    <CheckboxItem
        key="horse"
        isDisabled
        id="horse"
        label="Horse"
        description="Disabled element"
        value="horse"
    />,
    <CheckboxItem key="bird" id="bird" label="Bird without description" value="bird"/>
];

const meta = preview.meta({
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
});

const Template = (args: CheckboxGroupProps) => {
    return (
        <CheckboxGroup {...args}>
            {args.children}
        </CheckboxGroup>
    );
};

export const Default = meta.story({
    render: Template,

    args: {
        children: defaultCheckboxItems,
        name: 'default'
    }
});

export const Disabled = meta.story({
    render: Template,

    args: {
        children: defaultCheckboxItems,
        name: 'disabled',
        isDisabled: true
    }
});
