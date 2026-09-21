import clsx from 'clsx';
import React from 'react';

import markdownNotes from './GlobalStyle_layout.md';
import { layout } from '~/globals/css-utils.js';
import { capitalize } from '~/utils/helpers.js';

type JustifyOption = null | 'center' | 'reverse' | 'between' | 'nowrap';
const justifyOptions: readonly JustifyOption[] = [null, 'center', 'reverse', 'between', 'nowrap'];

const alignOptions = ['start', 'center', 'end'] as const;
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
    height: '300px',
};

// Define an item container to provide flex context and play with positioning
const ItemContainer: React.FC<ItemContainerProps> = ({
    title, direction, justify, align,
}) => {
    const cssDirection = direction === 'row' ? 'flexRow' : 'flexCol';
    const cssJustify = justify ? `${cssDirection}_${justify}` as const : cssDirection;
    const cssAlign = align
        ? `align${capitalize(align)}` as const
        : null;
    const css = clsx(cssJustify, cssAlign);

    return (
        <section style={{ marginBottom: '48px' }}>
            <h2 className={clsx('flexRow', layout.flexRow, 'alignCenter', layout.alignCenter)} style={{ fontSize: '100%', marginBottom: '24px', fontWeight: 'normal' }}>
                {title}
                :
                <code
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        padding: '4px',
                        marginLeft: '8px',
                        background: '#eee',
                        borderRadius: '4px',
                        color: '#444',
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
                border: '1px solid #000',
            }}
        />
    );
};

function displayItems(direction: Direction, type: 'justify' | 'align') {
    if (type === 'align') {
        return alignOptions.map(align => (
            <ItemContainer
                align={align}
                direction={direction}
                justify="center"
                key={align}
                title={`align ${align}`}
            />
        ));
    }

    return justifyOptions.map(justify => (
        <ItemContainer
            align="center"
            direction={direction}
            justify={justify}
            key={clsx(justify)}
            title={`justify ${clsx(justify)}`}
        />
    ));
}

export default {
    title: 'Utilities/Layout',

    parameters: {
        componentSubtitle: 'Layout',
        notes: { markdown: markdownNotes },
    },
};

export const Direction = () => (
    <>
        <ItemContainer direction="row" title="Horizontal flow"/>
        <ItemContainer direction="col" title="Vertical flow"/>
    </>
);

export const Justify = () => <>{displayItems('row', 'justify')}</>;

export const Alignment = () => <>{displayItems('row', 'align')}</>;
