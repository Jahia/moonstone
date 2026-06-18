import preview from '~/__storybook__/preview';

import {FieldSelector} from './index';
import markdownNotes from './FieldSelector.md';
import {Button, Input, Dropdown, RadioGroup, RadioItem} from '~/components';
import {Close, MoreVert} from '~/icons';

const meta = preview.meta({
    title: 'Components/Field/FieldSelector',
    component: FieldSelector,
    tags: ['beta'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        docs: {description: {component: markdownNotes}}
    },
    argTypes: {

        buttons: {
            control: false
        },
        selector: {
            control: false
        }
    }
});

const defaultArgs = {
    buttons: <><Button icon={<MoreVert/>}/><Button icon={<Close/>}/></>,
    selector: <Input size="big" placeholder="Input value"/>
};

export const Default = meta.story({
    args: defaultArgs
});

export const WithDropdown = meta.story({
    args: {
        ...defaultArgs,
        selector: <Dropdown
            variant="outlined"
            size="medium"
            label="Input value"
            value=""
            data={[
                {
                    label: 'option 1',
                    value: '1'
                },
                {
                    label: 'option 2',
                    value: '2'
                },
                {
                    label: 'option 3 with very long long label label label label label label label label',
                    value: '3'
                }
            ]}
        />
    }
});

export const WithTextarea = meta.story({
    args: {
        ...defaultArgs,
        selector: <textarea style={{width: '100%'}} placeholder="Input value"/>
    }
});

export const WithRadio = meta.story({
    args: {
        ...defaultArgs,
        buttons: <Button icon={<Close/>}/>,
        selector: <RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>
    }
});

