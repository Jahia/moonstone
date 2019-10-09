import React from 'react';
import {addDecorator, configure} from '@storybook/react';
import {GlobalStyle} from '../src/globalstyle';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
    <>
        <GlobalStyle/>
        {story()}
    </>
));

configure(loadStories, module);
