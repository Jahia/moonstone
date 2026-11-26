import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgSquare from '~/__storybook__/assets/img-square.webp';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';

import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

export const dropdownDataImages: DropdownDataOption[] = [
    {
        label: 'option 1',
        value: 'img-1',
        image: <img alt="Vertical" src={imgVertical}/>,
        description: 'very long description for image 1 very long description for image 1 very long description for image 1',
    },
    {
        label: 'option 2',
        value: 'img-2',
        image: <img alt="Horizontal" src={imgHorizontal}/>,
    },
    {
        label: 'option 3 with very long long label label label label label label label label',
        value: 'img-3',
        image: <img alt="Square" src={imgSquare}/>,
    },
    {
        label: 'option 4 (disabled)',
        value: 'img-4',
        isDisabled: true,
        image: <img alt="Vertical" src={imgVertical}/>,
    },
    {
        label: 'option 5',
        value: 'img-5',
        image: <img alt="Horizontal" src={imgHorizontal}/>,
    },
    {
        label: 'option 6',
        value: 'img-6',
        image: <img alt="Square" src={imgSquare}/>,
        description: 'very long description for image 1 very long description for image 1 very long description for image 1',
    },
    {
        label: 'option 7',
        value: 'img-7',
        image: <img alt="Vertical" src={imgVertical}/>,
    },
    {
        label: 'option 8',
        value: 'img-8',
        image: <img alt="Horizontal" src={imgHorizontal}/>,
    },
    {
        label: 'option 9',
        value: 'img-9',
        image: <img alt="Square" src={imgSquare}/>,
    },
    {
        label: 'option 10',
        value: 'img-10',
        image: <img alt="Vertical" src={imgVertical}/>,
    },
    {
        label: 'option 11',
        value: 'img-11',
        image: <img alt="Horizontal" src={imgHorizontal}/>,
    },
];
