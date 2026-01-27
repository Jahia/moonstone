import React, {useState} from 'react';
import {action} from 'storybook/actions';
import preview from '~storybook/preview';
import {CustomDropdown} from './CustomDropdown';
import type {CustomDropdownProps} from './CustomDropdown.types';
import {Button, Fieldset, CardSelector, Chip, Dropdown, EmptyCardSelector, Field, FieldBoolean, FieldSelector, Input, MenuItem, RadioGroup, RadioItem, Separator, Textarea, Typography} from '~/components';
import * as icons from '~/icons/components';
import {File} from '~/icons';

type CustomDropdownStoryArgs = Omit<CustomDropdownProps, 'icon' | 'children'> & {
    icon?: keyof typeof icons | React.ReactElement;
    children?: React.ReactElement | React.ReactElement[];
};

const meta = preview.meta({
    title: 'Components/CustomDropdown',
    component: CustomDropdown as React.FC<CustomDropdownStoryArgs>,
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
});

const getIconElement = (icon: CustomDropdownStoryArgs['icon']): React.ReactElement | undefined => {
    if (!icon) {
        return undefined;
    }

    if (typeof icon === 'string' && icon in icons) {
        return React.createElement(icons[icon]);
    }

    return icon as React.ReactElement;
};

const TemplateSimple = (args: CustomDropdownStoryArgs) => {
    const {
        label,
        icon,
        size,
        variant,
        isDisabled,
        isLoading,
        className,
        children
    } = args;

    return (
        <CustomDropdown
            label={label}
            icon={getIconElement(icon)}
            className={className}
            size={size}
            variant={variant}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onFocus={action('onfocus')}
            onBlur={action('onblur')}
        >
            {children}
        </CustomDropdown>
    );
};

export const IconButtonWithText = meta.story({
    render: TemplateSimple,
    args: {
        label: '',
        icon: 'Love',
        size: 'default',
        variant: 'ghost',
        isDisabled: false,
        isLoading: false,
        children: (
            <Typography style={{maxWidth: '200px'}}>
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
        )
    }
});

export const Form = meta.story({
    render: TemplateSimple,
    args: {
        label: 'Dropdown with form',
        variant: 'outlined',
        isDisabled: false,
        isLoading: false,
        children: (
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
        )
    }
});

export const WithButtons = meta.story({
    args: {
        label: 'Dropdown with buttons',
        icon: 'Widgets',
        size: 'default',
        variant: 'ghost',
        isDisabled: false,
        isLoading: false,
        children: (
            <>
                <Button label="Valeur 1"/>
                <Button label="Valeur 2"/>
            </>
        )
    },
    render: (args: CustomDropdownStoryArgs) => {
        const [labelState, setLabelState] = useState(args.label);

        return (
            <CustomDropdown
                label={labelState || args.label}
                icon={getIconElement(args.icon)}
                size={args.size}
                variant={args.variant}
                isDisabled={args.isDisabled}
                isLoading={args.isLoading}
                onFocus={action('onfocus')}
                onBlur={action('onblur')}
            >
                <Button label="Valeur 1" onClick={() => setLabelState('Valeur 1')}/>
                <Button label="Valeur 2" onClick={() => setLabelState('Valeur 2')}/>
            </CustomDropdown>
        );
    }
});

export const MultipleChoices = meta.story({
    args: {
        label: 'Dropdown with buttons',
        icon: 'Widgets',
        size: 'default',
        variant: 'ghost',
        isDisabled: false,
        isLoading: false,
        children: (
            <>
                <Button label="Valeur 1"/>
                <Button label="Valeur 2"/>
                <Button label="Valeur 3"/>
                <Button label="Valeur 4"/>
            </>
        )
    },
    render: (args: CustomDropdownStoryArgs) => {
        const [choices, setChoices] = useState<string[]>([]);

        return (
            <CustomDropdown
                label={choices.length > 0 ? choices.toString() : args.label}
                icon={getIconElement(args.icon)}
                size={args.size}
                variant={args.variant}
                isDisabled={args.isDisabled}
                isLoading={args.isLoading}
                onFocus={action('onfocus')}
                onBlur={action('onblur')}
            >
                <Button label="Valeur 1" onClick={() => setChoices([...choices, 'Valeur 1'])}/>
                <Button label="Valeur 2" onClick={() => setChoices([...choices, 'Valeur 2'])}/>
                <Button label="Valeur 3" onClick={() => setChoices([...choices, 'Valeur 3'])}/>
                <Button label="Valeur 4" onClick={() => setChoices([...choices, 'Valeur 4'])}/>
            </CustomDropdown>
        );
    }
});

export const SortingDropdown = meta.story({
    args: {
        label: 'Sorting dropdown',
        icon: 'Love',
        size: 'default',
        variant: 'outlined',
        isDisabled: false,
        isLoading: false,
        children: <span/>
    },
    render: (args: CustomDropdownStoryArgs) => {
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

        const onValueChange = (item: {value: string; label: string}) => {
            setSortValue(item.value);
        };

        const onIconChange = (item: {value: string; label: string; icon: string}) => {
            setDirectionValue(item.value);
        };

        const iconElement = () => {
            if (typeof directionValue === 'string') {
                const IconComponent = directionValue ? icons[secondDropdownData.find(item => item.value === directionValue)?.icon as keyof typeof icons] : icons[args.icon as keyof typeof icons];
                return IconComponent ? React.createElement(IconComponent) : undefined;
            }

            return undefined;
        };

        return (
            <CustomDropdown
                label={firstDropdownData.find(item => item.value === sortValue)?.label || args.label}
                icon={iconElement()}
                className={args.className}
                size={args.size}
                variant={args.variant}
                isDisabled={args.isDisabled}
                isLoading={args.isLoading}
                onFocus={action('onfocus')}
                onBlur={action('onblur')}
            >
                <MenuItem label="Sort by" variant="title"/>
                <Dropdown
                    variant="outlined"
                    data={firstDropdownData}
                    value={sortValue}
                    onChange={(e, item: {value: string; label: string}) => {
                        onValueChange(item);
                    }}
                />
                <Separator spacing="medium"/>
                <MenuItem label="Direction" variant="title"/>
                <Dropdown
                    variant="outlined"
                    data={secondDropdownData}
                    value={directionValue}
                    onChange={(e, item: {value: string; label: string; icon: string}) => {
                        onIconChange(item);
                    }}
                />
            </CustomDropdown>
        );
    }
});
