import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import markdownNotes from './Dropdown.md';
import {Dropdown} from './index';
import {Love} from '~/icons';
import {
    dropdownData,
    dropdownDataGrouped,
    dropdownDataImages,
    dropdownDataTree,
    dropdownDataDescriptions
} from '~/data';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes},
        docs: {
            // Fix issues in the doc tab with firefox
            inlineStories: false,
            IframeHeight: 500
        }
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
        <Dropdown
            icon={<Love/>}
            label={currentOption.label}
            value={currentOption.value}
            size="small"
            isDisabled={false}
            data={dropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
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
        <Dropdown
            icon={<Love/>}
            label={currentOption.label}
            value={currentOption.value}
            data={[]}
            onChange={(e, item) => handleOnChange(e, item)}
        />
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
        <Dropdown
            isDisabled={false}
            label={currentOption.label}
            value={currentOption.value}
            size="small"
            data={dropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
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
        <Dropdown
            isDisabled={false}
            label={currentOption.label}
            value={currentOption.value}
            size="small"
            maxWidth="120px"
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
        />
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
    );
};

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
    );
};

export const WithDescription = args => {
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
        <Dropdown
            {...args}
            label={currentOption.label}
            value={currentOption.value}
            data={dropdownDataDescriptions}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

WithDescription.args = {
    variant: 'outlined',
    size: 'medium',
    icon: <Love/>
};
