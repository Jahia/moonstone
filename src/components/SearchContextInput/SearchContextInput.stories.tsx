import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {SearchContextInput} from './index';
import {Folder, SiteWeb, Collections} from '~/icons';
import {Dropdown} from '~/components';
import {DropdownDataOptions} from '../Dropdown/Dropdown.types';

export default {
    title: 'Components/SearchContextInput',
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

export const Uncontrolled: ComponentStory<typeof SearchContextInput> = args => {
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

export const Controlled: ComponentStory<typeof SearchContextInput> = args => {
    const [inputValue, setInputValue] = useState('Default value');
    const [contextOption, setContextOption] = useState(searchContextData[0]);
    const handleDropdownOnChange = (e: React.MouseEvent, item: DropdownDataOptions) => {setContextOption(item)};

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
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                {...args}
            />
        </section>
    );
};

// export const SearchContext: ComponentStory<typeof SearchContextInput> = () => {
//     const [value, setValue] = useState('');
//     const searchContextData: DropdownDataOptions[] = [
//         {
//             label: 'Folder',
//             value: 'folder',
//             iconStart: <Folder/>
//         },
//         {
//             label: 'Media',
//             value: 'media',
//             iconStart: <Collections/>
//         },
//         {
//             label: 'Site',
//             value: 'site',
//             iconStart: <SiteWeb/>
//         }
//     ];
//     const [currentOption, setCurrentOption] = useState(searchContextData[0]);

//     const handleOnChange = (e: React.MouseEvent, item: DropdownDataOptions) => {
//         setCurrentOption(item);
//     };

//     return (
//         <section className="storyWrapper">
//             <SearchContextInput
//                 searchContext={(
//                     <Dropdown
//                         data={searchContextData}
//                         label={currentOption.label}
//                         icon={currentOption.iconStart}
//                         value={currentOption.value}
//                         onChange={handleOnChange}
//                     />
//                 )}
//                 value={value}
//                 placeholder="Placeholder text"
//                 onChange={e => setValue(e.target.value)}
//             />
//         </section>
//     );
// };
