import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import type {DropdownDataOption} from './Dropdown.types';

import {Dropdown} from './index';
import {Love} from '~/icons';
import {dropdownData, dropdownDataGrouped, dropdownDataImages, dropdownDataTree} from '~/data';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        knobs: {disable: true},
        storysource: {disable: true}
        // Actions: {argTypesRegex: '^on.*'}
    }
} as ComponentMeta<typeof Dropdown>;

export const Default: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                icon={<Love/>}
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownData}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const WithIcon: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                icon={<Love/>}
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownData}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const Empty: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                label={currentOption.label}
                value={currentOption.value}
                data={[]}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const Grouped: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownDataGrouped}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const WithSmallImages: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownDataImages}
                imageSize="small"
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const WithBigImages: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownDataImages}
                imageSize="big"
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const Tree: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                isTree
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownDataTree}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
                />
        </div>
    );
};

// StoriesOf('Components/Dropdown', module)
//     .addParameters({
//         component: Dropdown,
//         notes: {markdown: markdownNotes}
//     })
//     .addDecorator(withKnobs)
//     .add('Default', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     hasSearch
//                     icon={<Love/>}
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     size={select('Size', DropdownSizes, DropdownSizes.Small)}
//                     isDisabled={boolean('Disabled', false)}
//                     maxWidth={text('Max width', '120px')}
//                     data={dropdownData}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Empty', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     icon={<Love/>}
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     data={[]}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('With Default Value', () => {
//         const [currentOption, setCurrentOption] = useState({label: dropdownData[1].label, value: dropdownData[1].value});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh'}}>
//                 <Dropdown
//                     isDisabled={boolean('Disabled', false)}
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     size={select('Size', DropdownSizes, DropdownSizes.Small)}
//                     data={dropdownData}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Grouped', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh'}}>
//                 <Dropdown
//                     hasSearch
//                     isDisabled={boolean('Disabled', false)}
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     size={select('Size', DropdownSizes, DropdownSizes.Small)}
//                     maxWidth={text('Max width', '120px')}
//                     data={dropdownDataGrouped}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Outlined Variant with Search', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     hasSearch
//                     variant="outlined"
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     icon={<Love/>}
//                     size="small"
//                     data={dropdownDataGrouped}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Outlined Variant with Search and Big Images', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     hasSearch
//                     variant="outlined"
//                     imageSize="big"
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     size="medium"
//                     data={dropdownDataImages}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Outlined Variant with Search and Small Images', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     hasSearch
//                     variant="outlined"
//                     imageSize="small"
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     data={dropdownDataImages}
//                     size="medium"
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Playground (without Images)', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: '6'});

//         const handleOnChange = (e, item) => {
//             console.log(item);
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     isDisabled={boolean('Disabled', false)}
//                     hasSearch={boolean('Has Search', true)}
//                     variant={select('Variant', DropdownVariants, DropdownVariants.Outlined)}
//                     size={select('Size', DropdownSizes, DropdownSizes.Small)}
//                     icon={<IconWrapper iconName={select('Icon', iconsName, 'Love')}/>}
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     data={dropdownData}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     })
//     .add('Playground (tree)', () => {
//         const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

//         const handleOnChange = (e, item) => {
//             setCurrentOption(item);
//             action('onChange');
//             return true;
//         };

//         return (
//             <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//                 <Dropdown
//                     isTree
//                     isDisabled={boolean('Disabled', false)}
//                     hasSearch={boolean('Has Search', true)}
//                     variant={select('Variant', DropdownVariants, DropdownVariants.Outlined)}
//                     size={select('Size', DropdownSizes, DropdownSizes.Small)}
//                     icon={<IconWrapper iconName={select('Icon', iconsName, 'Love')}/>}
//                     label={currentOption.label}
//                     value={currentOption.value}
//                     data={dropdownDataTree}
//                     onChange={(e, item) => handleOnChange(e, item)}
//                 />
//             </div>
//         );
//     });
