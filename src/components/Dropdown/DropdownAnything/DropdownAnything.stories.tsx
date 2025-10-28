import React, {useState} from 'react';
import {action} from 'storybook/actions';
import {DropdownAnything} from './DropdownAnything';
import {Button, CardSelector, Chip, Dropdown, EmptyCardSelector, Field, FieldBoolean, FieldSelector, Input, MenuItem, RadioGroup, RadioItem, Separator, Textarea, Typography} from '~/components';
import * as icons from '../../../icons/components';
import {File} from '../../../icons/components';
import type {DropdownAnythingProps} from './DropdownAnything.types';
import {Fieldset} from '~/components/Fieldset';

export default {
    title: 'Components/DropdownAnything',
    component: DropdownAnything,
    tags: ['beta'],

    parameters: {
        layout: 'centered',
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

const TemplateSimple = (args: DropdownAnythingProps) => {
    const {
        label,
        value,
        icon,
        size,
        variant,
        placeholder,
        isDisabled,
        isLoading,
        className,
        children
    } = args;

    return (
        <DropdownAnything
            label={label}
            value={value}
            icon={typeof icon === 'string' && icons[icon] ? React.createElement(icons[icon]) : undefined}
            placeholder={placeholder}
            className={className}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onFocus={action('onfocus')}
            onBlur={action('onblur')}
        >
            {children}
        </DropdownAnything>
    );
};

export const WithText = {

    render: TemplateSimple,

    args: {
        label: 'Dropdown with text',
        icon: 'Love',
        size: 'medium',
        variant: 'ghost',
        placeholder: 'Open to read',
        isDisabled: false,
        isLoading: false,
        children:
    <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris porta tortor in erat pulvinar, non laoreet est tempus.
        Nulla scelerisque molestie tempor. Vestibulum ullamcorper ultrices dui quis hendrerit.
        Donec nec elit nunc. Aliquam vitae magna dictum, pharetra velit sit amet, tincidunt neque.
        Nullam dui magna, pharetra a leo non, pellentesque viverra odio. Mauris eget porttitor arcu.
        Vivamus dignissim vitae lectus nec vulputate. Sed euismod in sem feugiat finibus.
        Pellentesque pellentesque eget eros at feugiat. Mauris commodo ullamcorper eros, lacinia molestie nulla tristique id.
        Donec nec tortor enim. Donec sit amet blandit est, a blandit lectus. Donec semper nisi sit amet finibus ultrices.
        Morbi varius a mauris vel posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </Typography>
    }
};

export const Form = {

    render: TemplateSimple,

    args: {
        label: 'Dropdown with form',
        icon: 'Love',
        size: 'medium',
        variant: 'ghost',
        placeholder: 'Select something',
        isDisabled: false,
        isLoading: false,
        children:
    <Fieldset id="form" label="Form">
        <Field id="field-multiple" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<icons.Add/>} label="Add"/><Button icon={<icons.MoreVert/>} variant="ghost"/></>} helper="information">
            <>
                <FieldSelector buttons={<Button icon={<icons.MoreVert/>}/>} selector={<Input size="big" placeholder="Input value"/>}/>
                <FieldSelector buttons={<Button icon={<icons.MoreVert/>}/>} selector={<Input size="big" placeholder="Input value"/>}/>
                <FieldSelector buttons={<Button icon={<icons.MoreVert/>}/>} selector={<Input size="big" placeholder="Input value"/>}/>
            </>
        </Field>
        <FieldBoolean id="field-boolean" label="Field Boolean" helper="information" chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>}/>
        <Field id="field-dropdown" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>} helper="information">
            <FieldSelector
                    selector={<Dropdown
                    variant="outlined"
                    label="Input value"
                    className="flexFluid"
                    value=""
                    data={[
                        {
                            label: 'option 1',
                            value: '1'
                        },
                        {
                            label: 'option 2',
                            value: '2'
                        },
                        {
                            label: 'option 3 with very long long label label label label label label label label',
                            value: '3'
                        }
            ]}/>}/>
        </Field>
        <Field hasError errorMessage="There is an error" id="field-textarea" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>} helper="information">
            <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value"/>}/>
        </Field>
        <Field id="field-radio" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} helper="information">
            <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>}/>
        </Field>
        <Field id="field-cardselectors" label="Field" chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>} helper="information">
            <>
                <FieldSelector selector={<CardSelector id="cardSelector1" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>} buttons={<Button icon={<icons.Close/>}/>}/>
                <FieldSelector selector={<CardSelector id="cardSelector2" displayName="Item name" systemName="system name" information="information" thumbnailType="icon"/>} buttons={<Button icon={<icons.Close/>}/>}/>
                <FieldSelector selector={<EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>}/>
            </>
        </Field>
    </Fieldset>
    }
};

export const WithButtons = (args: DropdownAnythingProps) => {
    const [value, setValue] = useState(args.value);
    const {
        label = 'Dropdown with buttons',
        icon = 'Widgets',
        size = 'medium',
        variant = 'ghost',
        placeholder = 'Select something',
        isDisabled = false,
        isLoading = false,
        children =
        // eslint-disable-next-line react/jsx-indent
        <>
            <Button label="Valeur 1" onClick={() => setValue('Valeur 1')}/>
            <Button label="Valeur 2" onClick={() => setValue('Valeur 2')}/>
        </>
    } = args;

    return (
        <DropdownAnything
            label={label}
            value={value}
            icon={React.createElement(icons[icon as keyof typeof icons])}
            placeholder={placeholder}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onFocus={action('onfocus')}
            onBlur={action('onblur')}
        >
            {children}
        </DropdownAnything>
    );
};

export const SortingDropdown = (args: DropdownAnythingProps) => {
    const {
        label = 'Sorting dropdown',
        icon = 'Love',
        size = 'medium',
        variant = 'ghost',
        placeholder = 'Select something',
        isDisabled = false,
        isLoading = false,
        value,
        className
    } = args;

    const firstDropdownData = [
        {value: '1', label: 'Status'},
        {value: '2', label: 'Name'},
        {value: '3', label: 'Content type'},
        {value: '4', label: 'Last modified'},
        {value: '5', label: 'Created at'}
    ];

    const secondDropdownData = [
        {value: 'asc', label: 'Ascending (A-Z)', icon: 'ArrowDown'},
        {value: 'desc', label: 'Descending (Z-A)', icon: 'ArrowUp'}
    ];

    const [sortValue, setSortValue] = useState('4');
    const [directionValue, setDirectionValue] = useState('asc');
    const [parentValue, setParentValue] = useState(firstDropdownData.find(item => item.value === sortValue).label || value);
    const [parentIcon, setParentIcon] = useState(secondDropdownData.find(item => item.value === directionValue)?.icon || icon);

    const onValueChange = (item: {value: string, label: string}) => {
        console.log({item});
        setSortValue(item.value);
        setParentValue(item.label);
    };

    const onIconChange = (item: {value: string, label: string, icon: string}) => {
        setDirectionValue(item.value);
        setParentIcon(item.icon);
    };

    const iconElement = React.useMemo(() => {
        if (typeof parentIcon === 'string') {
            const IconComponent = icons[parentIcon as keyof typeof icons];
            return IconComponent ? React.createElement(IconComponent) : undefined;
        }

        return parentIcon;
    }, [parentIcon]);

    return (
        <DropdownAnything
            label={label}
            value={parentValue}
            icon={iconElement}
            placeholder={placeholder}
            className={className}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onFocus={action('onfocus')}
            onBlur={action('onblur')}
        >
            <MenuItem label="Sort by" variant="title"/>
            <Dropdown
                        variant="outlined"
                        data={firstDropdownData}
                        value={sortValue}
                        onChange={(e, item: {value: string, label: string}) => {
                            onValueChange(item);
                        }}
                    />
            <Separator/>
            <MenuItem label="Direction" variant="title"/>
            <Dropdown
                        variant="outlined"
                        data={secondDropdownData}
                        value={directionValue}
                        onChange={(e, item: {value: string, label: string, icon: string}) => {
                            onIconChange(item);
                        }}
                    />
        </DropdownAnything>
    );
};
