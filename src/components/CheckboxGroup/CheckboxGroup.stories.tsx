import preview from '../../../.storybook/preview';
import {CheckboxGroup} from './index';
import {CheckboxItem} from './CheckboxItem';

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

const defaultChildren = [
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

export const Default = meta.story({
    args: {
        name: 'default',
        children: defaultChildren
    }
});

export const Disabled = Default.extend({
    args: {
        name: 'disabled',
        isDisabled: true
    }
});
