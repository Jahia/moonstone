import React, {useState} from 'react';
import {action} from 'storybook/actions';
import markdownNotes from './Dropdown.md';
import {Dropdown} from './index';
import {Love} from '~/icons';
import {Pill} from '~/components';
import * as icons from '../../icons/components';
import {
    dropdownData,
    dropdownDataDescriptions,
    dropdownDataGrouped,
    dropdownDataImages,
    dropdownDataTree
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

const TemplateSimple = (args: DropdownProps) => {
    const {
        icon,
        size,
        variant,
        label,
        placeholder,
        isDisabled,
        isLoading,
        className,
        searchEmptyText,
        hasSearch,
        imageSize
    } = args;

    const [currentOption, setCurrentOption] = useState(null);
    const [currentOptions, setCurrentOptions] = useState<DropdownDataOption[]>([]);

    const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    const onClear = (() => {
        setCurrentOption(null);
        setCurrentOptions([]);
    });

    return (
        <Dropdown
        /**
 * Dynamically creates a React icon component if 'icon' is a valid string key; otherwise returns undefined.
 * This check ensures that the icon prop can either be a string key for icon lookup or no icon at all.
 */
            icon={typeof icon === 'string' && icons[icon] ? React.createElement(icons[icon]) : undefined}
            hasSearch={hasSearch}
            label={label}
            placeholder={placeholder}
            className={className}
            value={currentOption?.value}
            values={currentOptions.map(i => i.value)}
            size={size}
            searchEmptyText={searchEmptyText}
            imageSize={imageSize}
            variant={variant}
            isDisabled={isDisabled}
            isLoading={isLoading}
            data={dropdownData}
            treeData={dropdownDataTree}
            onClear={onClear}
            onFocus={action('onfocus')}
            onBlur={action('onblur')}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const Playground = {
    render: TemplateSimple,

    args: {
        icon: 'Love',
        size: 'small',
        variant: 'ghost',
        placeholder: 'Select something',
        isDisabled: false,
        isLoading: false,
        isTree: false,
        multiple: false,
        searchEmptyText: 'No results found'
    }
};

export const Default = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
    };

    return (
        <Dropdown
            icon={<Love/>}
            placeholder="Select something"
            value={currentOption?.value}
            data={dropdownData}
            onChange={handleOnChange}
    />
    );
};

export const Multiple = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption[]>(dropdownData.slice(0, 2));

    const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(prev =>
            prev.indexOf(item) > -1 ?
                prev.filter(i => i !== item) :
                [...prev, item]
        );
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            icon={<Love/>}
            placeholder="Select something"
            values={currentOption.map(v => v.value)}
            size="medium"
            isDisabled={false}
            data={dropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const Empty = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e:React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            icon={<Love/>}
            placeholder="Select something"
            value={currentOption?.value}
            data={[]}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const WithDefaultValue = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption>({
        label: dropdownData[1].label,
        value: dropdownData[1].value
    });

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            isDisabled={false}
            value={currentOption.value}
            size="medium"
            data={dropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const Grouped = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e : React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            isDisabled={false}
            placeholder="Select something"
            value={currentOption?.value}
            size="medium"
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const GroupedMultiple = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption[]>([]);

    const handleOnChange = (e : React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(prev =>
            prev.indexOf(item) > -1 ?
                prev.filter(i => i !== item) :
                [...prev, item]
        );
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            isDisabled={false}
            placeholder="Select something"
            values={currentOption.map(v => v.value)}
            size="medium"
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const OutlinedVariantWithSearch = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            hasSearch
            variant="outlined"
            placeholder="Select something"
            value={currentOption?.value}
            icon={<Love/>}
            size="medium"
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
    />
    );
};

export const OutlinedVariantWithBigImages = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e : React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            hasSearch
            variant="outlined"
            imageSize="big"
            value={currentOption?.value}
            size="medium"
            data={dropdownDataImages}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const OutlinedVariantWithSmallImages = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            hasSearch
            variant="outlined"
            imageSize="small"
            placeholder="Select something"
            value={currentOption?.value}
            data={dropdownDataImages}
            size="medium"
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const DropdownWithTree = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e : React.MouseEvent, item : DropdownDataOption) => {
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
            placeholder="Select something"
            value={currentOption?.value}
            treeData={dropdownDataTree}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const WithDescription = {
    render: (args: DropdownProps) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <Dropdown
                {...args}
                placeholder="Select something"
                value={currentOption?.value}
                data={dropdownDataDescriptions}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        );
    },

    args: {
        variant: 'outlined',
        size: 'medium',
        icon: <Love/>
    }
};

export const DropdownWithTreeMultiple = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption[]>([]);

    const handleOnChange = (e : React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(prev =>
            prev.indexOf(item) > -1 ?
                prev.filter(i => i !== item) :
                [...prev, item]
        );
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

export const DropdownWithPill = () => {
    const [currentOption, setCurrentOption] = useState<DropdownDataOption>(
        {label: 'French', value: 'fr', iconEnd: <Pill label="FR"/>}
    );

    const dataLanguages : DropdownDataOption[] = [
        {
            label: 'French',
            value: 'fr',
            iconEnd: <Pill label="FR"/>
        },
        {
            label: 'French (Canadian)',
            value: 'fr_ca',
            iconEnd: <Pill label="FR_CA"/>
        },
        {
            label: 'Language with very long long label label label label label label label name (country name)',
            value: 'es',
            iconEnd: <Pill label="ES"/>
        },
        {
            label: 'English',
            value: 'en',
            iconEnd: <Pill label="EN"/>
        }
    ];

    const handleOnChange = (e : React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            icon={
                Object.keys(currentOption).length > 0 ? (
                    <Pill label={currentOption.value.toUpperCase()}/>
                ) : null
            }
            placeholder="Select something"
            value={currentOption.value}
            size="small"
            isDisabled={false}
            data={dataLanguages}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

