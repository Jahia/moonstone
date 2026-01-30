import React from 'react';
import clsx from 'clsx';
import preview from '~storybook/preview';
import './spacings.stories.scss';
import '~/__storybook__/storybook.scss';

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

const meta = preview.meta({
    title: 'Tokens/Spacings',
    excludeStories: ['Spacing']
});

export const Default = meta.story({
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
});
