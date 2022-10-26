import React from 'react';
import PropTypes from 'prop-types';
import markdownNotes from './GlobalStyle_layout.md';
import clsx from 'clsx';

const justifyOptions = [null, 'center', 'reverse', 'between', 'nowrap'];
const alignOptions = ['start', 'center', 'end'];
// Const directionOptions = ['row', 'column'];

const cssWrap = {
    border: '2px solid red',
    height: '300px'
};

// Define an item container to provide flex context and play with positioning
const ItemContainer = ({title, direction, justify, align}) => {
    const cssDirection = direction === 'row' ? 'flexRow' : 'flexCol';
    const cssJustify = justify ? `${cssDirection}_${justify}` : cssDirection;
    const cssAlign = align ?
        `align${align.charAt(0).toUpperCase() + align.slice(1)}` :
        null;
    let css = clsx(cssJustify, cssAlign);

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

ItemContainer.propTypes = {
    title: PropTypes.string,
    justify: PropTypes.oneOf(justifyOptions),
    align: PropTypes.oneOf(alignOptions),
    direction: PropTypes.oneOf(['row', 'col'])
};

function displayItems(direction, type) {
    let display = [];
    let arrayOptions = [];

    if (type === 'justify') {
        arrayOptions = justifyOptions;
    } else if (type === 'align') {
        arrayOptions = alignOptions;
    }

    for (let option of arrayOptions) {
        display.push(
            <ItemContainer
                title={`${type} ${clsx(option)}`}
                direction={direction}
                justify={type === 'justify' ? option : 'center'}
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
