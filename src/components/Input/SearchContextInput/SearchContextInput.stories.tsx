import React, { useState } from 'react';

import { SearchContextInput } from './index';
import markdownNotes from './SearchContextInput.md?raw';
import { Dropdown } from '~/components';
import { Collections, Person, SiteWeb } from '~/icons';

import type { SearchContextInputProps } from './SearchContextInput.types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/Input/SearchContextInput',
    component: SearchContextInput,
    decorators: [
        StoryCmp => (
            <div style={{ width: '50vw' }}>
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'A search field with a Dropdown that sets where the search runs.',
        docs: { description: { component: markdownNotes } },
    },
    args: {
        placeholder: 'Placeholder text',
        defaultValue: 'Default value',
    },
    argTypes: {
        onChange: { action: 'onChange' },
        onClick: { action: 'onClick' },
        onBlur: { action: 'onBlur' },
        onFocus: { action: 'onFocus' },
    },
} as Meta<typeof SearchContextInput>;

const searchContextData: DropdownDataOption[] = [
    {
        label: 'Global users',
        value: 'globalUser',
        iconStart: <Person/>,
    },
    {
        label: 'Media',
        value: 'media',
        iconStart: <Collections/>,
    },
    {
        label: 'Site',
        value: 'site',
        iconStart: <SiteWeb/>,
    },
];

export const SearchContext: StoryObj<SearchContextInputProps> = {
    render: (args) => {
        const [contextOption, setContextOption] = useState(searchContextData[0]);
        const handleDropdownOnChange = (
            e: React.MouseEvent,
            item: DropdownDataOption,
        ) => {
            setContextOption(item);
        };

        return (
            <section className="storyWrapper">
                <SearchContextInput
                    placeholder="Search and press Enter"
                    searchContext={(
                        <Dropdown
                            data={searchContextData}
                            icon={contextOption.iconStart}
                            label={contextOption.label}
                            value={contextOption.value}
                            onChange={handleDropdownOnChange}
                        />
                    )}
                    {...args}
                />
            </section>
        );
    },
};
