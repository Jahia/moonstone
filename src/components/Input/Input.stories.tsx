import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '~/__storybook__/storybook.scss';

// Import markdownNotes from './Input.md';
import {Input} from './index';
import {Love, Folder, SiteWeb, Collections} from '~/icons';
import {Dropdown} from '~/components';
import {DropdownDataOptions} from '../Dropdown/Dropdown.types';

export default {
    title: 'Components/Input',
    component: Input,
    layout: 'centered',
    parameters: {
        knobs: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    args: {
        placeholder: 'Placeholder text',
        defaultValue: 'Default value'
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
    <section className="storyWrapper">
        <Input {...args}/>
    </section>
);

export const Controlled: ComponentStory<typeof Input> = args => {
    const [value, setValue] = useState('this is the default!');

    return (
        <section className="storyWrapper">
            <Input
                {...args}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </section>
    );
};

Controlled.args = {
    defaultValue: undefined
};

export const Uncontrolled = Template.bind({});

export const Search = Template.bind({});
Search.args = {
    variant: 'search',
    focusOnField: true
};

export const Icon = Template.bind({});
Icon.args = {
    variant: 'search',
    isShowClearButton: true,
    icon: <Love/>
};

export const SearchContext: ComponentStory<typeof Input> = () => {
    const [value, setValue] = useState('');
    const searchContextData: DropdownDataOptions[] = [
        {
            label: 'Folder',
            value: 'folder',
            iconStart: <Folder/>
        },
        {
            label: 'Media',
            value: 'media',
            iconStart: <Collections/>
        },
        {
            label: 'Site',
            value: 'site',
            iconStart: <SiteWeb/>
        }
    ];
    const [currentOption, setCurrentOption] = useState(searchContextData[0]);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOptions) => {
        setCurrentOption(item);
    };

    return (
        <section className="storyWrapper">
            <Input
                variant="search"
                searchContext={(
                    <Dropdown
                        data={searchContextData}
                        label={currentOption.label}
                        icon={currentOption.iconStart}
                        value={currentOption.value}
                        onChange={handleOnChange}
                    />
                )}
                value={value}
                placeholder="Placeholder text"
                onChange={e => setValue(e.target.value)}
            />
        </section>
    );
};
