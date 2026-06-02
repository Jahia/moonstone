import React from 'react';
import markdownNotes from './GlobalStyle_layout.md';
import clsx from 'clsx';
import {layout, reset} from '~/globals/css-utils.js';
import {capitalize} from '~/utils/helpers.js';

const justifyOptions = [null as null, 'center', 'reverse', 'between', 'nowrap'] as const;
type JustifyOption = typeof justifyOptions[number];

const alignOptions = ['start', 'center', 'end'] as const;
type AlignOption = typeof alignOptions[number];

type Direction = 'row' | 'col';

type ItemContainerProps = {
    readonly title?: string,
    readonly justify?: JustifyOption,
    readonly align?: AlignOption,
    readonly direction?: Direction
};

const cssWrap = {
    border: '2px solid red',
    height: '300px'
};

// Define an item container to provide flex context and play with positioning
const ItemContainer : React.FC<ItemContainerProps> = ({title, direction, justify, align}) => {
    const cssDirection = direction === 'row' ? 'flexRow' : 'flexCol';
    const cssJustify = justify ? `${cssDirection}_${justify}` as const : cssDirection;
    const cssAlign = align ?
        `align${capitalize(align)}` as const :
        null;
    const css = clsx(cssJustify, cssAlign);

    return (
        <section style={{marginBottom: '48px'}}>
            <h2 className={clsx(reset, 'flexRow', layout.flexRow, 'alignCenter', layout.alignCenter)} style={{marginBottom: '24px', fontWeight: 'normal'}}>
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
            <div
                className={clsx(cssJustify, layout[cssJustify], cssAlign, layout[cssAlign])}
                style={cssWrap}
            >
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

// Just an item to positioning
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
    let arrayOptions: JustifyOption[] | AlignOption[] = [];

    if (type === 'justify') {
        // @ts-expect-error let's not touch that for now
        arrayOptions = justifyOptions;
    } else if (type === 'align') {
        // @ts-expect-error let's not touch that for now
        arrayOptions = alignOptions;
    }

    for (const option of arrayOptions) {
        display.push(
            <ItemContainer
        title={`${type} ${clsx(option)}`}
        direction={direction}
        // @ts-expect-error let's not touch that for now
        justify={type === 'justify' ? option : 'center'}
        // @ts-expect-error let's not touch that for now
        align={type === 'align' ? option : 'center'}
      />
        );
    }

    return display;
}

export default {
    title: 'Utilities/Layout',

    parameters: {
        componentSubtitle: 'Layout',
        notes: {markdown: markdownNotes}
    }
};

export const Direction = () => (
    <>
        <ItemContainer title="Horizontal flow" direction="row"/>
        <ItemContainer title="Vertical flow" direction="col"/>
    </>
);

export const Justify = () => <>{displayItems('row', 'justify')}</>;

export const Alignment = () => <>{displayItems('row', 'align')}</>;
