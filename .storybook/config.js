import React from 'react';
import {addDecorator, addParameters, configure} from '@storybook/react';
import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks';
import {withA11y} from '@storybook/addon-a11y';
import {GlobalStyle} from '../src';

addDecorator(story => (
    <>
        <GlobalStyle/>
        {story()}
    </>
));

addDecorator(withA11y);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

configure(require.context('../src', true, /\.stories\.(jsx|mdx)$/), module);
