import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import markdownNotes from './Dropdown.md';
import {Dropdown} from './index';
import {Love} from '~/icons';
import {
    dropdownData,
    dropdownDataDescriptions,
    dropdownDataGrouped,
    dropdownDataImages,
    dropdownDataTree
} from '~/data';

import * as icons from '../../icons/components';

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
    },
    argTypes: {
        icon: {
            options: Object.keys(icons)
        }
    }
};

const TemplateSimple = args => {
    const {icon, size, variant, label, placeholder, isDisabled, className, searchEmptyText, hasSearch, imageSize, isTree, multiple, withClear} = args;
    const [currentOption, setCurrentOption] = useState(null);
    const [currentOptions, setCurrentOptions] = useState([]);

    const handleOnChange = (e, item) => {
        if (multiple) {
            setCurrentOptions(prev => prev.every(p => p.value !== item.value) ? [...prev, item] : prev.filter(i => i.value !== item.value));
        } else {
            setCurrentOption(item);
        }

        action('onChange');
        return true;
    };

    const onClear = withClear && (e => {
        e.stopPropagation();
        if (multiple) {
            setCurrentOptions([]);
        } else {
            setCurrentOption(null);
        }
    });

    return (
        <Dropdown
            icon={icons[icon] && React.createElement(icons[icon])}
            hasSearch={hasSearch}
            label={label}
            placeholder={placeholder}
            className={className}
            value={!multiple && currentOption?.value}
            values={multiple && currentOptions.map(i => i.value)}
            size={size}
            searchEmptyText={searchEmptyText}
            imageSize={imageSize}
            variant={variant}
            isDisabled={isDisabled}
            data={!isTree && dropdownData}
            treeData={isTree && dropdownDataTree}
            onClear={onClear}
            onBlur={action('onblur')}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const Playground = TemplateSimple.bind({});
Playground.args = {
    icon: 'Love',
    size: 'small',
    variant: 'ghost',
    placeholder: 'Select something',
    isDisabled: false,
    isTree: false,
    multiple: false,
    withClear: false,
    searchEmptyText: 'No results found'
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

export const Multiple = () => {
    const [currentOption, setCurrentOption] = useState([]);

    const handleOnChange = (e, item) => {
        setCurrentOption(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            icon={<Love/>}
            label="Select something"
            values={currentOption.map(v => v.value)}
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
            hasSearch
            isDisabled={false}
            variant="outlined"
            size="small"
            icon={<Love/>}
            label={currentOption.label}
            value={currentOption.value}
            treeData={dropdownDataTree}
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

export const DropdownWithTreeMultiple = () => {
    const [currentOption, setCurrentOption] = useState([]);

    const handleOnChange = (e, item) => {
        setCurrentOption(prev => prev.indexOf(item) > -1 ? prev.filter(i => i !== item) : [...prev, item]);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            hasSearch
            icon={<Love/>}
            placeholder="Select something"
            values={currentOption.map(v => v.value)}
            size="medium"
            isDisabled={false}
            data={dropdownDataTree}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

