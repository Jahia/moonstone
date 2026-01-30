import preview from '~storybook/preview';
import {CardSelector} from './index';
import {Button, Chip} from '~/index';
import {Close, FileImage, Lock, Love} from '~/icons';
import type {CardSelectorProps} from './CardSelector.types';

const meta = preview.meta({
    title: 'Components/CardSelector',
    component: CardSelector,
    tags: ['new'],
    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
});

export const Default = meta.story({
    args: {
        id: 'cardSelector',
        displayName: 'Item name',
        systemName: 'system name'
    },
    render: (args: CardSelectorProps) => (
        <div style={{maxWidth: '100vw'}}>
            <CardSelector {...args}/>
        </div>
    )
});

export const Image = Default.extend({
    args: {
        thumbnail: 'https://picsum.photos/100/300',
        thumbnailAlt: 'preview-img',
        thumbnailType: 'preview',
        information: 'more information',
        chips: [
            <Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>,
            <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>
        ]
    }
});

export const Icon = Image.extend({
    args: {
        thumbnail: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
        thumbnailType: 'icon'
    }
});

export const IconComponent = Image.extend({
    args: {
        thumbnail: <Love id="test" className="test"/>,
        thumbnailType: 'icon'
    }
});

export const Actions = Image.extend({
    args: {
        cardAction: <Button key="btn" variant="ghost" icon={<Close/>}/>
    }
});

export const NoChips = Image.extend({
    args: {
        chips: null
    }
});

export const Error = Default.extend({
    args: {
        hasError: true,
        errorMessage: 'Broken reference'
    }
});
