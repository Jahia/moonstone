import {useState} from 'react';
import type {MouseEvent} from 'react';
import preview from '~/__storybook__/preview';
import '~/__storybook__/storybook.scss';

import {SearchContextInput} from './index';

import {Person, SiteWeb, Collections} from '~/icons';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
const meta = preview.meta({
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
});

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
        label: 'Site',
        value: 'site',
        iconStart: <SiteWeb/>
    }
];

export const SearchContext = meta.story({
    args: {
        searchContext: (
            <Dropdown
                data={searchContextData}
                icon={searchContextData[0].iconStart}
                label={searchContextData[0].label}
                value={searchContextData[0].value}
                onChange={() => undefined}
            />
        )
    },
    render(args) {
        const [contextOption, setContextOption] = useState(searchContextData[0]);

        const handleDropdownOnChange = (_e: MouseEvent, item: DropdownDataOption) => {
            setContextOption(item);
        };

        return (
            <section className="storyWrapper">
                <SearchContextInput
                    {...args}
                    placeholder="Search and press Enter"
                    searchContext={
                        <Dropdown
                            data={searchContextData}
                            icon={contextOption.iconStart}
                            label={contextOption.label}
                            value={contextOption.value}
                            onChange={handleDropdownOnChange}
                        />
                    }
                />
            </section>
        );
    }
});
