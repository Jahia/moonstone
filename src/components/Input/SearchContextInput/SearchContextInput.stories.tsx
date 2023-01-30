import React, {useState} from 'react';
import {Story, ComponentMeta} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {SearchContextInput} from './index';
import type {SearchContextInputProps} from './SearchContextInput.types';

import {Person, SiteWeb, Collections} from '~/icons';
import {Dropdown} from '~/components';
import {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';

export default {
    title: 'Components/Input',
    component: SearchContextInput,
    decorators: [
        StoryCmp => (
            <div style={{width: '50vw'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    args: {
        placeholder: 'Placeholder text',
        defaultValue: 'Default value'
    },
    argTypes: {
        onChange: {action: 'onChange'},
        onClick: {action: 'onClick'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
} as ComponentMeta<typeof SearchContextInput>;

const searchContextData: DropdownDataOption[] = [
    {
        label: 'Global users',
        value: 'globalUser',
        iconStart: <Person/>
    },
    {
        label: 'Media',
        value: 'media',
        iconStart: <Collections/>
    },
    {
        label: 'Site Site|Site|Site|Site|Site|Site|Site| !!!',
        value: 'site',
        iconStart: <SiteWeb/>
    }
];

export const SearchContext: Story<SearchContextInputProps> = args => {
    const [contextOption, setContextOption] = useState(searchContextData[0]);
    const handleDropdownOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setContextOption(item);
    };

    return (
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
    );
};
