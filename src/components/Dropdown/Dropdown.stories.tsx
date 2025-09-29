import React, {useState} from 'react';
import {action} from 'storybook/actions';
import markdownNotes from './Dropdown.md';
import {Dropdown} from './index';
import {Love} from '~/icons';
import {Pill, Typography} from '~/components';
import * as icons from '../../icons/components';
import {dropdownData} from '~/data/dropdownData';
import {dropdownDataTree} from '~/data/dropdownDataTree';
import {dropdownDataGrouped} from '~/data/dropdownDataGrouped';
import {dropdownDataImages} from '~/data/dropdownDataImages';
import {dropdownDataDescriptions} from '~/data/dropdownDataDescriptions';
import {DropdownData, DropdownDataOption, DropdownImageSize, DropdownPill, DropdownProps, DropdownSize} from './Dropdown.types';

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
        imageSize,
        isTree,
        multiple,
        withClear
    } = args;

    const [currentOption, setCurrentOption] = useState(null);
    const [currentOptions, setCurrentOptions] = useState([]);

    const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
        if (multiple) {
            setCurrentOptions(prev =>
                prev.every(p => p.value !== item.value) ?
                    [...prev, item] :
                    prev.filter(i => i.value !== item.value)
            );
        } else {
            setCurrentOption(item);
        }

        action('onChange');
        return true;
    };

    const onClear = withClear && (() => {
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
            isLoading={isLoading}
            data={isTree ? null : dropdownData}
            treeData={isTree ? dropdownDataTree : null}
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
        withClear: false,
        searchEmptyText: 'No results found'
    }
};

export const Default = () => { // Fix Default func type issue with Storybook
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

export const Multiple = () => { // Fix Multiple func type issue with Storybook
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
            size={'big' as DropdownImageSize} // Fix issue with Storybook and DropdownSize type
            isDisabled={false}
            data={dropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const Empty = () => { // Fix Empty func type issue with Storybook
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e:React.MouseEvent, item: DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            icon={<Love/>}
            label={currentOption?.label || 'Select something'}
            value={currentOption?.value || 'Select something'}
            data={[]}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const WithDefaultValue = () => { // Fix WithDefaultValue func type issue with Storybook
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
            label={currentOption.label}
            value={currentOption.value}
            size={'big' as DropdownImageSize} // Fix issue with Storybook and DropdownSize type
            data={dropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const Grouped = () => { // Fix Grouped func type issue with Storybook
    const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

    const handleOnChange = (e : React.MouseEvent, item : DropdownDataOption) => {
        setCurrentOption(item);
        action('onChange');
        return true;
    };

    return (
        <Dropdown
            isDisabled={false}
            label={currentOption?.label || 'Select something'}
            value={currentOption?.value || 'Select something'}
            size={'big' as DropdownImageSize} // Fix issue with Storybook and DropdownSize type
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const GroupedMultiple = () => { // Fix GroupedMultiple func type issue with Storybook
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
            size={'big' as DropdownImageSize} // Fix issue with Storybook and DropdownSize type
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const OutlinedVariantWithSearch = () => { // Fix OutlinedVariantWithSearch func type issue with Storybook
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
            label={currentOption?.label || 'Select something'}
            value={currentOption?.value || 'Select something'}
            icon={<Love/>}
            size={'big' as DropdownSize} // Fix issue with Storybook and DropdownSize type
            data={dropdownDataGrouped}
            onChange={(e, item) => handleOnChange(e, item)}
    />
    );
};

export const OutlinedVariantWithBigImages = () => { // Fix OutlinedVariantWithBigImages func type issue with Storybook
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
            label={currentOption?.label || 'Select something'}
            value={currentOption?.value || 'Select something'}
            size={'medium' as DropdownSize} // Fix issue with Storybook and DropdownSize type
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
            label={currentOption?.label || 'Select something'}
            value={currentOption?.value || 'Select something'}
            data={dropdownDataImages}
            size="medium"
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const DropdownWithTree = () => { // Fix DropdownWithTree func type issue with Storybook
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
            size={'small' as DropdownSize} // Fix issue with Storybook and DropdownSize type
            icon={<Love/>}
            label={currentOption?.label || 'Select something'}
            value={currentOption?.value || 'Select something'}
            treeData={dropdownDataTree}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

export const WithDescription = {
    render: args => {
        const [currentOption, setCurrentOption] = useState<DropdownDataOption | null>(null);

        const handleOnChange = (e: React.MouseEvent, item : DropdownDataOption) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <Dropdown
                {...args}
                label={currentOption?.label || 'Select something'}
                value={currentOption?.value || 'Select something'}
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

export const DropdownWithTreeMultiple = () => { // Fix DropdownWithTreeMultiple func type issue with Storybook
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

export const DropdownWithPill = () => { // Fix DropdownWithPill func type issue with Storybook
    const [currentOption, setCurrentOption] = useState<DropdownDataOption>(
        {label: 'French', value: 'fr', iconEnd: <Pill label="FR"/>}
    );

    const dataLanguages : DropdownPill = [
        {
            label: 'French',
            value: 'fr',
            iconEnd: <Pill label="FR"/>
        },
        {
            label: (
                <>
                    French{' '}
                    <Typography
                        component="span"
                        variant="caption"
                        style={{color: 'darkgray'}}
                    >
                        (Canadian)
                    </Typography>
                </>
            ),
            value: 'fr_ca',
            iconEnd: <Pill label="FR_CA"/>
        },
        {
            label: (
                <>
                    Language with very long long label label label label label label label
                    name{' '}
                    <Typography
                        component="span"
                        variant="caption"
                        style={{color: 'darkgray'}}
                    >
                        (country name)
                    </Typography>
                </>
            ),
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
            isReversed
            icon={
                Object.keys(currentOption).length > 0 ? (
                    <Pill label={currentOption.value.toUpperCase()}/>
                ) : null
            }
            label={currentOption.label}
            placeholder="Select something"
            value={currentOption.value}
            size="small"
            isDisabled={false}
            data={dataLanguages as DropdownData}
            onChange={(e, item) => handleOnChange(e, item)}
        />
    );
};

