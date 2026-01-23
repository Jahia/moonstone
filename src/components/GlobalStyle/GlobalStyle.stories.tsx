import React from 'react';
import preview from '../../../.storybook/preview';
import markdownNotes from './GlobalStyle_layout.md';
import clsx from 'clsx';

const justifyOptions = [null, 'center', 'reverse', 'between', 'nowrap'];
type JustifyOption = typeof justifyOptions[number];

const alignOptions = ['start', 'center', 'end'];
type AlignOption = typeof alignOptions[number];

type Direction = 'row' | 'col';

type ItemContainerProps = {
    readonly title?: string;
    readonly justify?: JustifyOption;
    readonly align?: AlignOption;
    readonly direction?: Direction;
};

const cssWrap = {
    border: '2px solid red',
    height: '300px'
};

const ItemContainer: React.FC<ItemContainerProps> = ({title, direction, justify, align}) => {
    const cssDirection = direction === 'row' ? 'flexRow' : 'flexCol';
    const cssJustify = justify ? `${cssDirection}_${justify}` : cssDirection;
    const cssAlign = align ?
        `align${align.charAt(0).toUpperCase() + align.slice(1)}` :
        null;
    const css = clsx(cssJustify, cssAlign);

    return (
        <section style={{marginBottom: '48px'}}>
            <h2 className="flexRow alignCenter" style={{marginBottom: '24px'}}>
                {title}:
                <code
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        padding: '4px',
                        marginLeft: '8px',
                        background: '#eee',
                        borderRadius: '4px',
                        color: '#444'
                    }}
                >
                    {css}
                </code>
            </h2>
            <div className={clsx(cssJustify, cssAlign)} style={cssWrap}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </section>
    );
};

const Item = () => {
    return (
        <div
            style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#ccc',
                border: '1px solid #000'
            }}
        />
    );
};

function displayItems(direction: Direction, type: 'justify' | 'align') {
    const display = [];
    let arrayOptions: JustifyOption[] | AlignOption[] | [] = [];

    if (type === 'justify') {
        arrayOptions = justifyOptions;
    } else if (type === 'align') {
        arrayOptions = alignOptions;
    }

    for (const option of arrayOptions) {
        display.push(
            <ItemContainer
                key={String(option)}
                title={`${type} ${clsx(option)}`}
                direction={direction}
                justify={type === 'justify' ? option : 'center'}
                align={type === 'align' ? option : 'center'}
            />
        );
    }

    return display;
}

const meta = preview.meta({
    title: 'Utilities/Layout',
    parameters: {
        componentSubtitle: 'Layout',
        notes: {markdown: markdownNotes}
    }
});

export const Direction = meta.story({
    render: () => (
        <>
            <ItemContainer title="Horizontal flow" direction="row"/>
            <ItemContainer title="Vertical flow" direction="col"/>
        </>
    )
});

export const Justify = meta.story({
    render: () => <>{displayItems('row', 'justify')}</>
});

export const Alignment = meta.story({
    render: () => <>{displayItems('row', 'align')}</>
});
