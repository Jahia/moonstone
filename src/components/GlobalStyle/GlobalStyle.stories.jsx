import React from 'react';
import PropTypes from 'prop-types';
import {withKnobs, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import markdownNotes from './GlobalStyle_layout.md';
import classnames from 'classnames';
import '~/styles/shared/all.scss';

const justifyOptions = [null, 'center', 'reverse', 'between', 'nowrap'];
const alignOptions = ['start', 'center', 'end'];
const directionOptions = ['row', 'column'];

const cssWrap = {
    border: '2px solid red',
    height: '300px'
};

// Define an item container to provide flex context and play with positioning
const ItemContainer = ({title, direction, justify, align}) => {
    const cssDirection = direction === 'row' ? 'flexRow' : 'flexCol';
    const cssJustify = justify ? `${cssDirection}_${justify}` : cssDirection;
    const cssAlign = align ? `align${align.charAt(0).toUpperCase() + align.slice(1)}` : null;
    let css = classnames(cssJustify, cssAlign);

    return (
        <section style={{marginBottom: '48px'}}>
            <h2 className="flexRow alignCenter" style={{marginBottom: '24px'}}>{title}:
                <code style={{fontFamily: 'monospace', fontSize: '12px', padding: '4px', marginLeft: '8px', background: '#eee', borderRadius: '4px', color: '#444'}}>
                    {css}
                </code>
            </h2>
            <div className={classnames(cssJustify, cssAlign)} style={cssWrap}>
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
        <div style={{
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
                title={`${type} ${classnames(option)}`}
                direction={direction}
                justify={type === 'justify' ? option : 'center'}
                align={type === 'align' ? option : 'center'}
            />
        );
    }

    return display;
}

storiesOf('Global CSS|Layout', module)
    .addDecorator(withKnobs)
    .addParameters({
        componentSubtitle: 'Layout',
        notes: {markdown: markdownNotes}
    })
    .add('Direction', () => (
        <>
            <ItemContainer
                title="Horizontal flow"
                direction="row"
            />
            <ItemContainer
                title="Vertical flow"
                direction="col"
            />
        </>
    ))
    .add('Justify', () => (
        <>
            {displayItems('row', 'justify')}
        </>
    ))
    .add('Alignment', () => (
        <>
            {displayItems('row', 'align')}
        </>
    ))
    .add('⚽️Playground', () => (
        <ItemContainer
            title="CSS Classes"
            direction={select('Direction', directionOptions, 'row')}
            justify={select('Justify', justifyOptions, 'center')}
            align={select('Alignment', alignOptions, 'center')}
        />
    ));
