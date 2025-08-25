import React from 'react';
import clsx from 'clsx';
import './spacings.stories.scss';
import '~/__storybook__/storybook.scss';
import {Meta, StoryObj} from '@storybook/react/*';

type SpacingProps = {
    readonly name: string
}
export const Spacing: React.FC<SpacingProps> = ({name}) => {
    return (
        <div className="storyItem">
            <p>{name}</p>
            <div className={clsx([`spacing-${name}`])}/>
        </div>
    );
};

const meta: Meta = {
    title: 'Tokens/Spacings',
    excludeStories: ['Spacing']
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <section className="storyWrapper">
            <Spacing name="nano"/>
            <Spacing name="small"/>
            <Spacing name="medium"/>
            <Spacing name="large"/>
            <Spacing name="big"/>
            <Spacing name="huge"/>
        </section>
    )
};
