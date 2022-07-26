import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {SearchContextInput} from './index';
import {Folder, SiteWeb, Collections} from '~/icons';
import {Dropdown} from '~/components';
import {DropdownDataOptions} from '~/components/Dropdown/Dropdown.types';

export default {
    title: 'Components/Input',
    component: SearchContextInput,
    layout: 'centered',
    parameters: {
        knobs: {disable: true},
    },
    args: {
        placeholder: 'Placeholder text',
        defaultValue: 'Default value'
    },
    argTypes: {
        onChange: { action: 'onChange'},
        onClick: { action: 'onClick' },
        onBlur: { action: 'onBlur'},
        onFocus: { action: 'onFocus'}
    },
} as ComponentMeta<typeof SearchContextInput>;

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

export const SearchContext: ComponentStory<typeof SearchContextInput> = args => {
    const [contextOption, setContextOption] = useState(searchContextData[0]);
    const handleDropdownOnChange = (e: React.MouseEvent, item: DropdownDataOptions) => {setContextOption(item)};

    return(
        <section className="storyWrapper">
            <SearchContextInput
                searchContext={
                    (
                        <Dropdown
                            data={searchContextData}
                            label={contextOption.label}
                            icon={contextOption.iconStart}
                            value={contextOption.value}
                            onChange={handleDropdownOnChange}
                        />
                    )
                }
                placeholder="Search and press Enter"
                {...args}/>
        </section>
    )
};
