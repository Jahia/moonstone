import React, {useState} from 'react';
import {action} from 'storybook/actions';
import markdownNotes from './Dropdown.md';
import {Dropdown} from './index';
import {Love} from '~/icons';
import {Pill} from '~/components';
import * as icons from '../../icons/components';
import {
    dropdownData,
    dropdownDataGrouped,
    dropdownDataImages,
    dropdownDataTree
} from '~/data';
import type {DropdownDataOption, DropdownProps} from './Dropdown.types';
import {dropdownDataDescriptions} from '~/data/dropdownDataDescriptions';
import {dropdownGroupedDataDescriptions} from '~/data/dropdownDataGroupedDescriptions';
import {dropdownGroupedDataImages} from '~/data/dropdownDataGroupedImages';

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
        placeholder,
        isDisabled,
        isLoading,
        className,
        searchEmptyText,
        hasSearch,
        imageSize
    } = args;

    const [currentOptions, setCurrentOptions] = useState<DropdownDataOption[]>([]);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOptions(prev =>
            prev.indexOf(item) > -1 ?
                prev.filter(i => i !== item) :
                [...prev, item]
        );
        action('onChange');
        return true;
    };

    const onClear = (() => {
        setCurrentOptions([]);
        action('onClear');
    });

    return (
        <Dropdown
        /**
 * Dynamically creates a React icon component if 'icon' is a valid string key; otherwise returns undefined.
 * This check ensures that the icon prop can either be a string key for icon lookup or no icon at all.
 */
            icon={typeof icon === 'string' && icons[icon] ? React.createElement(icons[icon]) : undefined}
            hasSearch={hasSearch}
            placeholder={placeholder}
            className={className}
            values={currentOptions.map(i => i.value)}
            size={size}
            searchEmptyText={searchEmptyText}
            imageSize={imageSize}
            variant={variant}
            isDisabled={isDisabled}
            isLoading={isLoading}
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
        size: 'medium',
        variant: 'ghost',
        placeholder: 'Select something',
        isDisabled: false,
        isLoading: false,
        isTree: false,
        multiple: false,
        searchEmptyText: 'No results found'
    }
};

export const Default = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOption(item);
        };

        return (
            <Dropdown
                {...args}
                placeholder={args.placeholder || 'Select something'}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                value={currentOption?.value}
                data={dropdownData}
                onChange={handleOnChange}
            />
        );
    },
    args: {
        icon: 'Love',
        placeholder: 'Select something',
        size: 'medium',
        variant: 'ghost',
        isDisabled: false,
        isLoading: false,
        imageSize: 'small'
    }
};

export const FlatData = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
                    {...args}
                    icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    value={currentOption?.value}
                    size={args.size || 'medium'}
                    isDisabled={args.isDisabled || false}
                    data={dropdownData}
                    onChange={(e, item) => handleOnChange(e, item)}
                />

                <Dropdown
                    {...args}
                    icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                    placeholder={args.placeholder || 'Select with descriptions'}
                    value={currentOption?.value}
                    data={dropdownDataDescriptions}
                    onChange={(e, item) => handleOnChange(e, item)}
                />

                <Dropdown
                    {...args}
                    icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                    hasSearch={args.hasSearch || true}
                    variant={args.variant || 'outlined'}
                    imageSize={args.imageSize || 'small'}
                    size={args.size || 'medium'}
                    placeholder={args.placeholder || 'Select with images'}
                    value={currentOption?.value}
                    data={dropdownDataImages}
                    onChange={(e, item) => handleOnChange(e, item)}
                />

            </section>
        );
    },

    args: {
        size: 'medium',
        variant: 'ghost',
        icon: 'Love',
        isDisabled: false,
        isLoading: false
    }
};

export const Empty = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <Dropdown
                {...args}
                placeholder={args.placeholder || 'Select something'}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                value={currentOption?.value}
                data={[]}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        );
    },

    args: {
        icon: 'Love',
        placeholder: 'Select something',
        size: 'medium',
        variant: 'ghost',
        isDisabled: false,
        isLoading: false
    }
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

export const Grouped = {
    render: (args: Omit <DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <section className="storyGrid">
                <Dropdown
                    {...args}
                    icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    value={currentOption?.value}
                    data={dropdownDataGrouped}
                    onChange={(e, item) => handleOnChange(e, item)}
        />

                <Dropdown
                    {...args}
                    icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    value={currentOption?.value}
                    data={dropdownGroupedDataDescriptions}
                    onChange={(e, item) => handleOnChange(e, item)}
        />

                <Dropdown
                    {...args}
                    icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                    placeholder={args.placeholder || 'Select something'}
                    value={currentOption?.value}
                    data={dropdownGroupedDataImages}
                    onChange={(e, item) => handleOnChange(e, item)}
        />
            </section>
        );
    },
    args: {
        variant: 'outlined',
        icon: 'Love'
    }
};

export const GroupedMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption[]>([]);

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
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
               {...args}
               icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
               values={currentOption.map(v => v.value)}
               placeholder={args.placeholder || 'Select something'}
               data={dropdownDataGrouped}
               onChange={(e, item) => handleOnChange(e, item)}
            />
        );
    },

    args: {
        size: 'medium',
        variant: 'ghost',
        icon: 'Love',
        isDisabled: false,
        isLoading: false
    }
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

// Export const OutlinedVariantWithBigImages = () => {
//     const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

//     const handleOnChange = (e : React.MouseEvent, item: DropdownDataOption) => {
//         setCurrentOption(item);
//         action('onChange');
//         return true;
//     };

//     return (
//         <Dropdown
//             hasSearch
//             placeholder="Select something"
//             variant="outlined"
//             imageSize="big"
//             value={currentOption?.value}
//             size="medium"
//             data={dropdownDataImages}
//             onChange={(e, item) => handleOnChange(e, item)}
//         />
//     );
// };

// Export const OutlinedVariantWithSmallImages = () => {
//     const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

//     const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
//         setCurrentOption(item);
//         action('onChange');
//         return true;
//     };

//     return (
//         <Dropdown
//             hasSearch
//             variant="outlined"
//             imageSize="small"
//             placeholder="Select something"
//             value={currentOption?.value}
//             data={dropdownDataImages}
//             size="medium"
//             onChange={(e, item) => handleOnChange(e, item)}
//         />
//     );
// };

export const DropdownWithTree = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <Dropdown
                 {...args}
                 hasSearch={args.hasSearch || true}
                 isDisabled={args.isDisabled || false}
                 variant={args.variant || 'outlined'}
                 size={args.size || 'medium'}
                 icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                 placeholder={args.placeholder || 'Select something'}
                 value={currentOption?.value}
                 treeData={dropdownDataTree}
                 onChange={(e, item) => handleOnChange(e, item)}
            />
        );
    },

    args: {
        hasSearch: true,
        variant: 'outlined',
        size: 'small',
        icon: 'Love',
        placeholder: 'Select something',
        isDisabled: false,
        isLoading: false
    }
};

export const WithDescription = {
    render: (args: Omit <DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <Dropdown
                {...args}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select something'}
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

export const DropdownWithTreeMultiple = {
    render: (args: Omit<DropdownProps, 'value' | 'values' | 'data' | 'treeData'>) => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption[]>([]);

        const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
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
                hasSearch={args.hasSearch || true}
                icon={typeof args.icon === 'string' && icons[args.icon] ? React.createElement(icons[args.icon]) : args.icon}
                placeholder={args.placeholder || 'Select something'}
                values={currentOption.map(v => v.value)}
                size={args.size || 'medium'}
                isDisabled={args.isDisabled || false}
                data={dropdownDataTree}
                onChange={(e, item) => handleOnChange(e, item)}
            />
        );
    },

    args: {
        icon: 'Love',
        placeholder: 'Select something'
    }
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

