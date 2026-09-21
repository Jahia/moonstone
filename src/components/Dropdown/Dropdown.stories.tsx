import React, { useState } from 'react';
import { action } from 'storybook/actions';

import markdownNotes from './Dropdown.md';
import { Dropdown } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Pill } from '~/components';
import {
    dropdownData,
    dropdownDataGrouped,
    dropdownDataGroupedImages,
    dropdownDataGroupedPill,
    dropdownDataImages,
    dropdownDataPill,
    dropdownDataTree,
    dropdownDataTreePill,
} from '~/data';

import type { DropdownDataOption, DropdownProps } from './Dropdown.types';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,

    parameters: {
        layout: 'centered',
        notes: { markdown: markdownNotes },
        docs: {
            // Fix issues in the doc tab with firefox
            inlineStories: false,
            IframeHeight: 500,
        },
    },
    argTypes: {
        icon: iconArgType,
    },
};
export const FlatData = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);
        const [currentImage, setCurrentImage] = useState<DropdownDataOption | null>(null);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption>({
            label: 'French',
            value: 'fr',
            iconEnd: <Pill>FR</Pill>,
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
                    isDisabled={args.isDisabled || false}
                    data={dropdownData}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    value={currentOption?.value || null}
                    onChange={handleOnChange}
                />

                <Dropdown
                    {...args}
                    data={dropdownDataImages}
                    icon={args.icon}
                    imageSize={args.imageSize || 'small'}
                    placeholder={args.placeholder || 'Select an image'}
                    value={currentImage?.value || null}
                    onChange={handleOnChangeImage}
                />

                <Dropdown
                    {...args}
                    data={dropdownDataTreePill}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select a language'}
                    value={currentPill.value}
                    onChange={handleOnChangePill}
                />
            </section>
        );
    },

    args: {
        icon: 'Love',
    },
};

export const FlatDataMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionData, setCurrentOptionData] = useState<DropdownDataOption[]>([]);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);

        const handleOnChangeData = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionData(prev =>
                prev.indexOf(item) > -1
                    ? prev.filter(i => i !== item)
                    : [...prev, item],
            );
            action('onChange');
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(prev =>
                prev.indexOf(item) > -1
                    ? prev.filter(i => i !== item)
                    : [...prev, item],
            );
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">

                <Dropdown
                    {...args}
                    data={dropdownData}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    values={currentOptionData.map(v => v.value)}
                    onChange={(e, item) => handleOnChangeData(e, item)}
                />

                <Dropdown
                    {...args}
                    data={dropdownDataPill}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select languages'}
                    values={currentPill.map(v => v.value)}
                    onChange={(e, item) => handleOnChangePill(e, item)}
                />
            </section>
        );
    },

    args: {
        icon: 'Love',
    },
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
                    data={dropdownDataGrouped}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    value={currentOptionGrouped?.value || null}
                    onChange={handleChangeGrouped}
                />

                <Dropdown
                    {...args}
                    data={dropdownDataGroupedImages}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select an image'}
                    value={currentImage?.value || null}
                    onChange={handleChangeImage}
                />

                <Dropdown
                    {...args}
                    data={dropdownDataGroupedPill}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select a language'}
                    value={currentLanguage?.value || null}
                    onChange={handleChangeLanguage}
                />
            </section>
        );
    },

    args: {
        icon: 'Love',
    },
};

export const GroupedDataMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionDataGrouped, setCurrentOptionDataGrouped] = useState<DropdownDataOption[]>([]);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);

        const handleOnChangeDataGrouped = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionDataGrouped(prev =>
                prev.indexOf(item) > -1
                    ? prev.filter(i => i !== item)
                    : [...prev, item],
            );
            action('onChange');
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(prev =>
                prev.indexOf(item) > -1
                    ? prev.filter(i => i !== item)
                    : [...prev, item],
            );
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
                    {...args}
                    data={dropdownDataGrouped}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    values={currentOptionDataGrouped.map(v => v.value)}
                    onChange={(e, item) => handleOnChangeDataGrouped(e, item)}
                />

                <Dropdown
                    {...args}
                    data={dropdownDataGroupedPill}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select languages'}
                    values={currentPill.map(v => v.value)}
                    onChange={(e, item) => handleOnChangePill(e, item)}
                />
            </section>
        );
    },

    args: {
        icon: 'Love',
    },
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
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    treeData={dropdownDataTree}
                    value={currentOptionTree?.value || null}
                    onChange={handleChangeTree}
                />

                <Dropdown
                    {...args}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select a language'}
                    treeData={dropdownDataTreePill}
                    value={currentLanguage?.value || null}
                    onChange={handleChangeLanguage}
                />
            </section>
        );
    },

    args: {
        icon: 'Love',
    },
};

export const TreeDataMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOptionDataMultiple, setCurrentOptionDataMultiple] = useState<DropdownDataOption[]>([]);
        const [currentPill, setCurrentPill] = useState<DropdownDataOption[]>([]);

        const handleOnChangeDataMultiple = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOptionDataMultiple(prev =>
                prev.indexOf(item) > -1
                    ? prev.filter(i => i !== item)
                    : [...prev, item],
            );
            action('onChange');
            return true;
        };

        const handleOnChangePill = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentPill(prev =>
                prev.indexOf(item) > -1
                    ? prev.filter(i => i !== item)
                    : [...prev, item],
            );
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
                    {...args}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    treeData={dropdownDataTree}
                    values={currentOptionDataMultiple.map(v => v.value)}
                    onChange={(e, item) => handleOnChangeDataMultiple(e, item)}
                />

                <Dropdown
                    {...args}
                    icon={args.icon}
                    placeholder={args.placeholder || 'Select a language'}
                    treeData={dropdownDataTreePill}
                    values={currentPill.map(v => v.value)}
                    onChange={(e, item) => handleOnChangePill(e, item)}
                />
            </section>
        );
    },

    args: {
        icon: 'Love',
    },
};
