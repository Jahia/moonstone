import React, {useState} from 'react';
import {action} from 'storybook/actions';
import markdownNotes from './Dropdown.md';
import {Dropdown} from './index';
import {Pill} from '~/components';
import * as icons from '../../icons/components';
import {
    dropdownData,
    dropdownDataGrouped,
    dropdownDataGroupedImages,
    dropdownDataGroupedPill,
    dropdownDataImages,
    dropdownDataPill,
    dropdownDataTree,
    dropdownDataTreePill
} from '~/data';
import type {DropdownDataOption, DropdownProps} from './Dropdown.types';

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
export const FlatData = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);
        const [currentImage, setCurrentImage] = useState<DropdownDataOption | null>(null);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption>({
            label: 'French',
            value: 'fr',
            iconEnd: <Pill label="FR"/>
        });

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange')(e, item);
            return true;
        };

        const handleOnChangeImage = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentImage(item);
            action('onChangeImage')(e, item);
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(item);
            action('onChangePill')(e, item);
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select something'}
                value={currentOption?.value || null}
                isDisabled={args.isDisabled || false}
                data={dropdownData}
                onChange={handleOnChange}
        />

                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                imageSize={args.imageSize || 'small'}
                placeholder={args.placeholder || 'Select an image'}
                value={currentImage?.value || null}
                data={dropdownDataImages}
                onChange={handleOnChangeImage}
        />

                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select a language'}
                value={currentPill.value}
                data={dropdownDataTreePill}
                onChange={handleOnChangePill}
        />
            </section>
        );
    },

    args: {
        icon: 'Love'
    }
};

export const FlatDataMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionData, setCurrentOptionData] = useState<DropdownDataOption[]>([]);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);

        const handleOnChangeData = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionData(prev =>
                prev.indexOf(item) > -1 ?
                    prev.filter(i => i !== item) :
                    [...prev, item]
            );
            action('onChange');
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(prev =>
                prev.indexOf(item) > -1 ?
                    prev.filter(i => i !== item) :
                    [...prev, item]
            );
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">

                <Dropdown
               {...args}
               icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
               values={currentOptionData.map(v => v.value)}
               placeholder={args.placeholder || 'Select something'}
               data={dropdownData}
               onChange={(e, item) => handleOnChangeData(e, item)}
            />

                <Dropdown
               {...args}
               icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
               values={currentPill.map(v => v.value)}
               placeholder={args.placeholder || 'Select languages'}
               data={dropdownDataPill}
               onChange={(e, item) => handleOnChangePill(e, item)}
            />
            </section>
        );
    },

    args: {
        icon: 'Love'
    }
};

export const GroupedData = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionGrouped, setCurrentOptionGrouped] = useState<DropdownDataOption | null>(null);
        const [currentImage, setCurrentImage] = useState<DropdownDataOption | null>(null);
        const [currentLanguage, setCurrentLanguage] = useState<DropdownDataOption | null>(null);

        const handleChangeGrouped = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionGrouped(item);
            action('onChangeGrouped')(e, item);
            return true;
        };

        const handleChangeImage = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentImage(item);
            action('onChangeImage')(e, item);
            return true;
        };

        const handleChangeLanguage = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentLanguage(item);
            action('onChangeLanguage')(e, item);
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select something'}
                value={currentOptionGrouped?.value || null}
                data={dropdownDataGrouped}
                onChange={handleChangeGrouped}
        />

                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select an image'}
                value={currentImage?.value || null}
                data={dropdownDataGroupedImages}
                onChange={handleChangeImage}
        />

                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select a language'}
                value={currentLanguage?.value || null}
                data={dropdownDataGroupedPill}
                onChange={handleChangeLanguage}
        />
            </section>
        );
    },

    args: {
        icon: 'Love'
    }
};

export const GroupedDataMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionDataGrouped, setCurrentOptionDataGrouped] = useState<DropdownDataOption[]>([]);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);

        const handleOnChangeDataGrouped = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionDataGrouped(prev =>
                prev.indexOf(item) > -1 ?
                    prev.filter(i => i !== item) :
                    [...prev, item]
            );
            action('onChange');
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(prev =>
                prev.indexOf(item) > -1 ?
                    prev.filter(i => i !== item) :
                    [...prev, item]
            );
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
               {...args}
               icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
               values={currentOptionDataGrouped.map(v => v.value)}
               placeholder={args.placeholder || 'Select something'}
               data={dropdownDataGrouped}
               onChange={(e, item) => handleOnChangeDataGrouped(e, item)}
            />

                <Dropdown
               {...args}
               icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
               values={currentPill.map(v => v.value)}
               placeholder={args.placeholder || 'Select languages'}
               data={dropdownDataGroupedPill}
               onChange={(e, item) => handleOnChangePill(e, item)}
            />
            </section>
        );
    },

    args: {
        icon: 'Love'
    }
};

export const TreeData = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionTree, setCurrentOptionTree] = useState<DropdownDataOption | null>(null);
        const [currentLanguage, setCurrentLanguage] = useState<DropdownDataOption | null>(null);

        const handleChangeTree = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionTree(item);
            action('onChangeTree')(e, item);
            return true;
        };

        const handleChangeLanguage = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentLanguage(item);
            action('onChangeLanguage')(e, item);
            return true;
        };

        return (
            <section>
                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select something'}
                value={currentOptionTree?.value || null}
                treeData={dropdownDataTree}
                onChange={handleChangeTree}
        />

                <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select a language'}
                value={currentLanguage?.value || null}
                treeData={dropdownDataTreePill}
                onChange={handleChangeLanguage}
        />
            </section>
        );
    },

    args: {
        icon: 'Love'
    }
};

export const TreeDataMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionDataMultiple, setCurrentOptionDataMultiple] = useState<DropdownDataOption[]>([]);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);

        const handleOnChangeDataMultiple = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionDataMultiple(prev =>
                prev.indexOf(item) > -1 ?
                    prev.filter(i => i !== item) :
                    [...prev, item]
            );
            action('onChange');
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(prev =>
                prev.indexOf(item) > -1 ?
                    prev.filter(i => i !== item) :
                    [...prev, item]
            );
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
               {...args}
               icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
               values={currentOptionDataMultiple.map(v => v.value)}
               placeholder={args.placeholder || 'Select something'}
               treeData={dropdownDataTree}
               onChange={(e, item) => handleOnChangeDataMultiple(e, item)}
            />

                <Dropdown
                 {...args}
                 icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                 values={currentPill.map(v => v.value)}
                 placeholder={args.placeholder || 'Select a language'}
                 treeData={dropdownDataTreePill}
                 onChange={(e, item) => handleOnChangePill(e, item)}
            />
            </section>
        );
    },

    args: {
        icon: 'Love'
    }
};

