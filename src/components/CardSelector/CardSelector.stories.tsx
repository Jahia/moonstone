import preview from '~/__storybook__/preview';

import {CardSelector} from './index';
import {Button} from '~/components/Button';
import {Chip} from '~/components/Chip';
import {Close, FileImage, Lock, Love} from '~/icons';
import type {CardSelectorProps} from './CardSelector.types';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import imgIcon from '~/__storybook__/assets/img-icon.webp';

const meta = preview.meta({
    title: 'Components/CardSelector',
    component: CardSelector,
    tags: ['new'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
});

const Template = (args: CardSelectorProps) => {
    return <div style={{maxWidth: '100vw'}}><CardSelector {...args}/></div>;
};

const defaultArgs = {
    id: 'cardSelector',
    displayName: 'Item name',
    systemName: 'system name'
} satisfies CardSelectorProps;

const imageArgs = {
    ...defaultArgs,
    thumbnail: imgVertical,
    thumbnailAlt: 'preview-img',
    thumbnailType: 'preview',
    information: 'more information',
    chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>]
} satisfies CardSelectorProps;

export const Default = meta.story({
    args: defaultArgs,
    render: Template
});

export const Image = meta.story({
    args: imageArgs,
    render: Template
});

export const Icon = meta.story({
    args: {
        ...imageArgs,
        thumbnail: imgIcon,
        thumbnailType: 'icon'
    },
    render: Template
});

export const IconComponent = meta.story({
    args: {
        ...imageArgs,
        thumbnail: <Love id="test" className="test"/>,
        thumbnailType: 'icon'
    },
    render: Template
});

export const Actions = meta.story({
    args: {
        ...imageArgs,
        cardAction: <Button key="btn" variant="ghost" icon={<Close/>}/>
    },
    render: Template
});

export const NoChips = meta.story({
    args: {
        ...imageArgs,
        chips: null
    },
    render: Template
});

export const Error = meta.story({
    args: {
        ...defaultArgs,
        hasError: true,
        errorMessage: 'Broken reference'
    },
    render: Template
});
