import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import markdownNotes from './Dropdown.md';

import {Dropdown, DropdownSizes} from './index';
import {Love} from '~/icons';

const data = [
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
    },
    {
        label: 'option 4',
        value: '4',
        isDisabled: true
    },
    {
        label: 'option 5',
        value: '5'
    },
    {
        label: 'option 6',
        value: '6'
    },
    {
        label: 'option 7',
        value: '7'
    },
    {
        label: 'option 8',
        value: '8'
    },
    {
        label: 'option 9',
        value: '9'
    },
    {
        label: 'option 10',
        value: '10'
    },
    {
        label: 'option 11',
        value: '11'
    }
];

const dataLanguages = [
    {
        label: 'FR',
        value: 'fr',
        iconStart: <Love/>,
        attributes: {
            id: 'option-fr'
        }
    },
    {
        label: 'EN-US',
        value: 'en',
        iconStart: <Love/>,
        attributes: {
            id: 'option-en'
        }
    },
    {
        label: 'DE',
        value: '3',
        iconStart: <Love/>,
        attributes: {
            id: 'option-de'
        }
    },
    {
        label: 'ES',
        value: '4',
        isDisabled: true,
        iconEnd: <Love/>,
        attributes: {
            id: 'option-es'
        }
    }
];

const dataGrouped = [
    {
        groupLabel: 'test',
        options: [
            {
                label: 'option 1',
                value: '1'
            },
            {
                label: 'option 2',
                value: '2'
            }
        ]
    },
    {
        groupLabel: 'test 2',
        options: [
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3'
            },
            {
                label: 'option 4',
                value: '4',
                isDisabled: true
            }

        ]
    }
];

const dataBigImages = [
    {
        groupLabel: 'Options 1-3',
        options: [
            {
                label: 'option 1',
                value: '1',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 2',
                value: '2',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            }
        ]
    },
    {
        groupLabel: 'Options 4-11',
        options: [
            {
                label: 'option 4',
                value: '4',
                isDisabled: true,
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 5',
                value: '5',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 6',
                value: '6',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 7',
                value: '7',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 8',
                value: '8',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 9',
                value: '9',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 10',
                value: '10',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            },
            {
                label: 'option 11',
                value: '11',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'big'
            }
        ]
    }
];

const dataSmallImages = [
    {
        groupLabel: 'Options 1-3',
        options: [
            {
                label: 'option 1',
                value: '1',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 2',
                value: '2',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            }
        ]
    },
    {
        groupLabel: 'Options 4-11',
        options: [
            {
                label: 'option 4',
                value: '4',
                isDisabled: true,
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 5',
                value: '5',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 6',
                value: '6',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 7',
                value: '7',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 8',
                value: '8',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 9',
                value: '9',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 10',
                value: '10',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            },
            {
                label: 'option 11',
                value: '11',
                image: <img src="https://via.placeholder.com/500x500?text=DropdownOptionImage"/>,
                imageSize: 'small'
            }
        ]
    }
];

storiesOf('Components|Dropdown', module)
    .addParameters({
        component: Dropdown,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => {
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
                <Dropdown
                    icon={<Love/>}
                    label={currentOption.label}
                    value={currentOption.value}
                    size={select('Size', DropdownSizes, DropdownSizes.SMALL)}
                    isDisabled={boolean('Disabled', false)}
                    maxWidth={text('Max width', '120px')}
                    data={data}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('With Default Value', () => {
        const [currentOption, setCurrentOption] = useState({label: dataLanguages[1].label, value: dataLanguages[1].value});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    isDisabled={boolean('Disabled', false)}
                    label={currentOption.label}
                    value={currentOption.value}
                    size={select('Size', DropdownSizes, DropdownSizes.SMALL)}
                    data={dataLanguages}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('Grouped', () => {
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    isDisabled={boolean('Disabled', false)}
                    label={currentOption.label}
                    value={currentOption.value}
                    size={select('Size', DropdownSizes, DropdownSizes.SMALL)}
                    maxWidth={text('Max width', '120px')}
                    data={dataGrouped}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('Outlined Variant with Search', () => {
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
                <Dropdown
                    hasSearch
                    isDisabled
                    variant="outlined"
                    label={currentOption.label}
                    value={currentOption.value}
                    size="small"
                    data={data}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('Outlined Variant with Search and Big Images', () => {
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
                <Dropdown
                    hasSearch
                    variant="outlined"
                    imageSize="big"
                    label={currentOption.label}
                    value={currentOption.value}
                    size="medium"
                    data={dataBigImages}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('Outlined Variant with Search and Small Images', () => {
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
                <Dropdown
                    hasSearch
                    variant="outlined"
                    imageSize="small"
                    label={currentOption.label}
                    value={currentOption.value}
                    size="medium"
                    data={dataSmallImages}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    });
