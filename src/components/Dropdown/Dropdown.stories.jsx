import React, {useState} from 'react';
// Import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import markdownNotes from './Dropdown.md';

import {Dropdown} from './index';
// Import {DropdownSizes, DropdownVariants} from './Dropdown.types';
import {Love} from '~/icons';
import {
    dropdownData,
    dropdownDataGrouped,
    dropdownDataImages,
    dropdownDataTree
} from '~/data';
// Import IconWrapper from '~/__storybook__/IconWrapper';
// import {iconsName} from '~/__storybook__/utils';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    // Decorators: [withKnobs],

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
            <Dropdown
                icon={<Love/>}
                label={currentOption.label}
                value={currentOption.value}
                size="small"
                isDisabled={false}
                maxWidth="120px"
                data={dropdownData}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

export const Empty = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
            <Dropdown
                icon={<Love/>}
                label={currentOption.label}
                value={currentOption.value}
                data={[]}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

export const WithDefaultValue = () => {
    const [currentOption, setCurrentOption] = useState({
        label: dropdownData[1].label,
        value: dropdownData[1].value
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Dropdown
                isDisabled={false}
                label={currentOption.label}
                value={currentOption.value}
                size="small"
                data={dropdownData}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

export const Grouped = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Dropdown
                isDisabled={false}
                label={currentOption.label}
                value={currentOption.value}
                size="small"
                maxWidth="120px"
                data={dropdownDataGrouped}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

export const OutlinedVariantWithSearch = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
            <Dropdown
                hasSearch
                variant="outlined"
                label={currentOption.label}
                value={currentOption.value}
                icon={<Love/>}
                size="small"
                data={dropdownDataGrouped}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

export const OutlinedVariantWithBigImages = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
            <Dropdown
                hasSearch
                variant="outlined"
                imageSize="big"
                label={currentOption.label}
                value={currentOption.value}
                size="medium"
                data={dropdownDataImages}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

export const OutlinedVariantWithSmallImages = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
            <Dropdown
                hasSearch
                variant="outlined"
                imageSize="small"
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownDataImages}
                size="medium"
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};

// Export const PlaygroundWithoutImages = () => {
//     const [currentOption, setCurrentOption] = useState({
//         label: 'Select something',
//         value: null
//     });

//     const handleOnChange = (e, item) => {
//         setCurrentOption(item);
//         action('onChange');
//         return true;
//     };

//     return (
//         <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
//             <Dropdown
//                 hasSearch
//                 isDisabled={false}
//                 variant="outlined"
//                 size="small"
//                 icon={<Love/>}
//                 label={currentOption.label}
//                 value={currentOption.value}
//                 data={dropdownData}
//                 onChange={(e, item) => handleOnChange(e, item)}
//             />
//         </div>
//     );
// };

// PlaygroundWithoutImages.story = {
//     name: 'Playground (without Images)'
// };

export const DropdownWithTree = () => {
    const [currentOption, setCurrentOption] = useState({
        label: 'Select something',
        value: null
    });

    const handleOnChange = (e, item) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
            <Dropdown
                isTree
                hasSearch
                isDisabled={false}
                variant="outlined"
                size="Small"
                icon={<Love/>}
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownDataTree}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        </div>
    );
};
