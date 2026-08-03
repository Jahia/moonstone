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
        notes: {markdown: markdownNotes}
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

export const Default = meta.story({
    args: {
        buttons: (
            <>
                <Button icon={<MoreVert/>}/>
                <Button icon={<Close/>}/>
            </>
        ),
        selector: <Input size="big" placeholder="Input value"/>
    }
});

export const WithDropdown = meta.story({
    args: {
        ...Default.input.args,
        selector: (
            <Dropdown
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
        )
    }
});

export const WithTextarea = meta.story({
    args: {
        ...Default.input.args,
        selector: (
            <textarea style={{width: '100%'}} placeholder="Input value"/>
        )
    }
});

export const WithRadio = meta.story({
    args: {
        ...Default.input.args,
        buttons: <Button icon={<Close/>}/>,
        selector: (
            <RadioGroup name="radio">
                <RadioItem id="radio1" label="Yes" value="Yes"/>
                <RadioItem id="radio2" label="No" value="No"/>
            </RadioGroup>
        )
    }
});
