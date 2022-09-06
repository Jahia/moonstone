import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import type {DropdownDataOption, DropdownDataTree} from './BaseDropdown/BaseDropdown.types';

import {Dropdown, MultipleDropdown} from './index';
import {Love} from '~/icons';
import {dropdownData, dropdownDataGrouped, dropdownDataImages, dropdownDataTree} from '~/data';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        knobs: {disable: true},
        storysource: {disable: true}
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

export const Outlined: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                variant="outlined"
                label={currentOption.label}
                value={currentOption.value}
                data={dropdownData}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
            />
        </div>
    );
};

export const WithSearch: ComponentStory<typeof Dropdown> = args => {
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <Dropdown
                hasSearch
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
        console.log('call handleOnCHange');
        console.log(item);
        console.log('-----');
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
    const [currentOption, setCurrentOption] = useState({label: 'Select something', value: undefined});

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

export const MultipleSimple: ComponentStory<typeof MultipleDropdown> = args => {
    const [values, setValues] = useState([]);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setValues(previousValues => {
            if (values.includes(item.value)) {
                return previousValues.filter(v => v !== item.value);
            }

            return [...previousValues, item.value];
        });
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <MultipleDropdown
                label="Select something"
                values={values}
                data={dropdownData}
                onChange={(e, item) => handleOnChange(e, item)}
                {...args}
                />
        </div>
    );
};

export const MultipleTree: ComponentStory<typeof MultipleDropdown> = args => {
    const [values, setValues] = useState([]);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataTree) => {
        setValues(previousValues => {
            if (values.includes(item.value)) {
                return previousValues.filter(v => v !== item.value);
            }

            return [...previousValues, item.value];
        });
        return true;
    };

    return (
        <div style={{padding: '110px'}}>
            <MultipleDropdown
                isTree
                label="Select something"
                values={values}
                data={dropdownDataTree}
                onChange={(e, item: DropdownDataTree) => handleOnChange(e, item)}
                {...args}
                />
        </div>
    );
};
