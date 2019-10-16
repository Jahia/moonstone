import React from 'react';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
import './colors.scss';

export const Colors = ({backgroundColor, name}) => {
    return (
        <div style={{margin: '0 10px 0 10px'}}>
            <div
                style={{
                    width: '128px',
                    height: '128px',
                    borderRadius: '3px',
                    backgroundColor: backgroundColor,
                    border: '1px solid black'
                }}
            />
            <p
                style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                {name}
            </p>
        </div>
    );
};

storiesOf('Tokens|Colors', module)
    .add('default', () => (
        <div style={{display: 'flex'}}>
            <div style={{margin: '0 auto', display: 'flex'}}>
                <Colors backgroundColor="#131c21" name="dark"/>
                <Colors backgroundColor="#fdfdfd" name="neutral"/>
                <Colors backgroundColor="#00a0e3" name="accent"/>
            </div>
        </div>
    ))
    .add('grey', () => (
        <div style={{display: 'flex'}}>
            <div style={{margin: '0 auto', display: 'flex'}}>
                <Colors backgroundColor="#565050" name="grey"/>
                <Colors backgroundColor="#dadada" name="grey-light"/>
            </div>
        </div>
    ));

Colors.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
