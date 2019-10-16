import React from 'react';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';

export const Spacing = ({spacing, name}) => {
    return (
        <div
            style={{
                display: 'flex',
                margin: '16px 40px',
                'align-items': 'center'
            }}
        >
            <p
                style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    width: '100px'
                }}
            >
                {name}
            </p>
            <div
                style={{
                    width: `${spacing}px`,
                    height: `${spacing}px`,
                    backgroundColor: '#00a0e3'
                }}
            />
        </div>
    );
};

storiesOf('Tokens|Spacing', module).add('default', () => (
    <div style={{display: 'flex'}}>
        <div style={{margin: '0 auto'}}>
            <Spacing spacing={4} name="nano"/>
            <Spacing spacing={8} name="small"/>
            <Spacing spacing={16} name="medium"/>
            <Spacing spacing={24} name="large"/>
            <Spacing spacing={40} name="big"/>
            <Spacing spacing={56} name="huge"/>
        </div>
    </div>
));

Spacing.propTypes = {
    spacing: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
