import React from 'react';
import {addDecorator, addParameters, configure} from '@storybook/react';
import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks';
import {GlobalStyle} from '../src/globalstyle';

// automatically import all files ending in *.stories.js
// const req = require.context('../src', true, /\.stories\.jsx$/);

// function loadStories() {
//     req.keys().forEach(filename => req(filename));
// }

addDecorator(story => (
    <>
        <GlobalStyle/>
        {story()}
    </>
));

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

configure(require.context('../src', true, /\.stories\.(jsx|mdx)$/), module);
