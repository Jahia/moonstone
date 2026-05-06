import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgSquare from '~/__storybook__/assets/img-square.webp';

export const dropdownDataImages : DropdownDataOption[] = [
    {
        label: 'option 1',
        value: 'img-1',
        image: <img src={imgVertical} alt="Vertical"/>,
        description: 'very long description for image 1 very long description for image 1 very long description for image 1'
    },
    {
        label: 'option 2',
        value: 'img-2',
        image: <img src={imgHorizontal} alt="Horizontal"/>
    },
    {
        label: 'option 3 with very long long label label label label label label label label',
        value: 'img-3',
        image: <img src={imgSquare} alt="Square"/>
    },
    {
        label: 'option 4 (disabled)',
        value: 'img-4',
        isDisabled: true,
        image: <img src={imgVertical} alt="Vertical"/>
    },
    {
        label: 'option 5',
        value: 'img-5',
        image: <img src={imgHorizontal} alt="Horizontal"/>
    },
    {
        label: 'option 6',
        value: 'img-6',
        image: <img src={imgSquare} alt="Square"/>,
        description: 'very long description for image 1 very long description for image 1 very long description for image 1'
    },
    {
        label: 'option 7',
        value: 'img-7',
        image: <img src={imgVertical} alt="Vertical"/>
    },
    {
        label: 'option 8',
        value: 'img-8',
        image: <img src={imgHorizontal} alt="Horizontal"/>
    },
    {
        label: 'option 9',
        value: 'img-9',
        image: <img src={imgSquare} alt="Square"/>
    },
    {
        label: 'option 10',
        value: 'img-10',
        image: <img src={imgVertical} alt="Vertical"/>
    },
    {
        label: 'option 11',
        value: 'img-11',
        image: <img src={imgHorizontal} alt="Horizontal"/>
    }
];
