import React, { useState } from 'react';
import { action } from 'storybook/actions';

import { CustomDropdown } from './CustomDropdown';
import { Button, CardSelector, Chip, Dropdown, EmptyCardSelector, Field, FieldBoolean, FieldSelector, Fieldset, Input, MenuItem, RadioGroup, RadioItem, Separator, Textarea, Typography } from '~/components';
import { File } from '~/icons';
import * as icons from '~/icons/components';

import type { CustomDropdownProps } from './CustomDropdown.types';

export default {
    title: 'Components/CustomDropdown',
    component: CustomDropdown,
    tags: ['beta'],

    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        layout: 'centered',
        docs: {
            // Fix issues in the doc tab with firefox
            inlineStories: false,
            IframeHeight: 500,
        },
    },
    argTypes: {
        icon: {
            options: Object.keys(icons),
        },
    },
};

const TemplateSimple = (args: CustomDropdownProps) => {
    const {
        label,
        icon,
        size,
        variant,
        isDisabled,
        isLoading,
        className,
        children,
    } = args;

    return (
        <CustomDropdown
            isDisabled={isDisabled}
            isLoading={isLoading}
            className={className}
            icon={typeof icon === 'string' && icons[icon] ? React.createElement(icons[icon]) : undefined}
            label={label}
            size={size}
            variant={variant}
            onBlur={action('onblur')}
            onFocus={action('onfocus')}
        >
            {children}
        </CustomDropdown>
    );
};

export const IconButtonWithText = {

    render: TemplateSimple,

    args: {
        label: '',
        icon: 'Love',
        size: 'default',
        variant: 'ghost',
        isDisabled: false,
        isLoading: false,
        ariaLabel: 'text dropdown',
        children: (
            <Typography style={{ maxWidth: '200px' }}>
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
        ),
    },
};

export const Form = {

    render: TemplateSimple,

    args: {
        label: 'Dropdown with form',
        variant: 'default',
        isDisabled: false,
        isLoading: false,
        children: (
            <Fieldset id="form" label="Form">
                <Field
                    buttons={<><Button icon={<icons.Add/>} label="Add"/><Button icon={<icons.MoreVert/>} variant="ghost"/></>}
                    chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>}
                    helper="information"
                    id="field-multiple"
                    label="Field"
                >
                    <>
                        <FieldSelector buttons={<Button icon={<icons.MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>
                        <FieldSelector buttons={<Button icon={<icons.MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>
                        <FieldSelector buttons={<Button icon={<icons.MoreVert/>}/>} selector={<Input placeholder="Input value" size="big"/>}/>
                    </>
                </Field>
                <FieldBoolean
                    buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>}
                    chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>}
                    helper="information"
                    id="field-boolean"
                    label="Field Boolean"
                />
                <Field
                    buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>}
                    chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>}
                    helper="information"
                    id="field-dropdown"
                    label="Field"
                >
                    <FieldSelector
                        selector={(
                            <Dropdown
                                className="flexFluid"
                                data={[
                                    {
                                        label: 'option 1',
                                        value: '1',
                                    },
                                    {
                                        label: 'option 2',
                                        value: '2',
                                    },
                                    {
                                        label: 'option 3 with very long long label label label label label label label label',
                                        value: '3',
                                    },
                                ]}
                                label="Input value"
                                value=""
                                variant="outlined"
                            />
                        )}
                    />
                </Field>
                <Field
                    hasError
                    buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>}
                    chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>}
                    errorMessage="There is an error"
                    helper="information"
                    id="field-textarea"
                    label="Field"
                >
                    <FieldSelector selector={<Textarea id="moonstone-textarea" placeholder="Input value"/>}/>
                </Field>
                <Field chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>} helper="information" id="field-radio" label="Field">
                    <FieldSelector selector={<RadioGroup name="radio"><RadioItem id="radio1" label="Yes" value="Yes"/><RadioItem id="radio2" label="No" value="No"/></RadioGroup>}/>
                </Field>
                <Field
                    buttons={<Button icon={<icons.MoreVert/>} variant="ghost"/>}
                    chips={<><Chip color="accent" label="Required"/><Chip icon={<icons.Language/>} label="Shared by all languages"/></>}
                    helper="information"
                    id="field-cardselectors"
                    label="Field"
                >
                    <>
                        <FieldSelector
                            buttons={<Button icon={<icons.Close/>}/>}
                            selector={(
                                <CardSelector
                                    displayName="Item name"
                                    id="cardSelector1"
                                    information="information"
                                    systemName="system name"
                                    thumbnailType="icon"
                                />
                            )}
                        />
                        <FieldSelector
                            buttons={<Button icon={<icons.Close/>}/>}
                            selector={(
                                <CardSelector
                                    displayName="Item name"
                                    id="cardSelector2"
                                    information="information"
                                    systemName="system name"
                                    thumbnailType="icon"
                                />
                            )}
                        />
                        <FieldSelector selector={<EmptyCardSelector iconStart={<File/>} id="emptyCardSelector" label="Add item"/>}/>
                    </>
                </Field>
            </Fieldset>
        ),
    },
};

export const WithButtons = (args: CustomDropdownProps) => {
    const [labelState, setLabelState] = useState(args.label);
    const {
        label = 'Dropdown with buttons',
        icon = 'Widgets',
        size = 'default',
        variant = 'ghost',
        isDisabled = false,
        isLoading = false,
        children = (
            <>
                <Button label="Valeur 1" onClick={() => setLabelState('Valeur 1')}/>
                <Button label="Valeur 2" onClick={() => setLabelState('Valeur 2')}/>
            </>
        ),
    } = args;

    return (
        <CustomDropdown
            isDisabled={isDisabled}
            isLoading={isLoading}
            icon={React.createElement(icons[icon as keyof typeof icons])}
            label={labelState || label}
            size={size}
            variant={variant}
            onBlur={action('onblur')}
            onFocus={action('onfocus')}
        >
            {children}
        </CustomDropdown>
    );
};

export const MultipleChoices = (args: CustomDropdownProps) => {
    const [choices, setChoices] = useState([]);
    const {
        label = 'Dropdown with buttons',
        icon = 'Widgets',
        size = 'default',
        variant = 'ghost',
        isDisabled = false,
        isLoading = false,
        children =
        // eslint-disable-next-line react/jsx-indent
            <>
                <Button label="Valeur 1" onClick={() => setChoices([...choices, 'Valeur 1'])}/>
                <Button label="Valeur 2" onClick={() => setChoices([...choices, 'Valeur 2'])}/>
                <Button label="Valeur 3" onClick={() => setChoices([...choices, 'Valeur 3'])}/>
                <Button label="Valeur 4" onClick={() => setChoices([...choices, 'Valeur 4'])}/>
            </>,
    } = args;

    return (
        <CustomDropdown
            isDisabled={isDisabled}
            isLoading={isLoading}
            icon={React.createElement(icons[icon as keyof typeof icons])}
            label={choices.length > 0 ? choices.toString() : label}
            size={size}
            variant={variant}
            onBlur={action('onblur')}
            onFocus={action('onfocus')}
        >
            {children}
        </CustomDropdown>
    );
};

export const SortingDropdown = (args: CustomDropdownProps) => {
    const {
        label = 'Sorting dropdown',
        icon = 'Love',
        size = 'default',
        variant = 'outlined',
        isDisabled = false,
        isLoading = false,
        className,
    } = args;

    const firstDropdownData = [
        { value: '1', label: 'Status' },
        { value: '2', label: 'Name' },
        { value: '3', label: 'Content type' },
        { value: '4', label: 'Last modified' },
        { value: '5', label: 'Created at' },
    ];

    const secondDropdownData = [
        { value: 'asc', label: 'Ascending (A-Z)', icon: 'ArrowDown' },
        { value: 'desc', label: 'Descending (Z-A)', icon: 'ArrowUp' },
    ];

    const [sortValue, setSortValue] = useState('4');
    const [directionValue, setDirectionValue] = useState('asc');

    const onValueChange = (item: { value: string; label: string }) => {
        setSortValue(item.value);
    };

    const onIconChange = (item: { value: string; label: string; icon: string }) => {
        setDirectionValue(item.value);
    };

    const iconElement = () => {
        if (typeof directionValue === 'string') {
            const IconComponent = directionValue ? icons[secondDropdownData.find(item => item.value === directionValue)?.icon as keyof typeof icons] : icons[icon as keyof typeof icons];
            return IconComponent ? React.createElement(IconComponent) : undefined;
        }

        return directionValue;
    };

    return (
        <CustomDropdown
            isDisabled={isDisabled}
            isLoading={isLoading}
            className={className}
            icon={iconElement()}
            label={firstDropdownData.find(item => item.value === sortValue).label || label}
            size={size}
            variant={variant}
            onBlur={action('onblur')}
            onFocus={action('onfocus')}
        >
            <MenuItem label="Sort by" variant="title"/>
            <Dropdown
                data={firstDropdownData}
                value={sortValue}
                variant="outlined"
                onChange={(e, item: { value: string; label: string }) => {
                    onValueChange(item);
                }}
            />
            <Separator spacing="medium"/>
            <MenuItem label="Direction" variant="title"/>
            <Dropdown
                data={secondDropdownData}
                value={directionValue}
                variant="outlined"
                onChange={(e, item: { value: string; label: string; icon: string }) => {
                    onIconChange(item);
                }}
            />
        </CustomDropdown>
    );
};
