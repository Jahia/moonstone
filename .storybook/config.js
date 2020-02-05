import React from 'react';
import {addDecorator, addParameters, configure} from '@storybook/react';
import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks';
import {withA11y} from '@storybook/addon-a11y';
import {GlobalStyle} from '../src';
import {MDXContext} from '@mdx-js/react';

addDecorator(story => {
    let contextComponents = React.useContext(MDXContext);
    const isInDocs = Boolean(contextComponents.h1);
    const style = isInDocs ?
        {display: 'flex', flexDirection: 'column', height: '400px'} :
        {display: 'flex', flexDirection: 'column', height: '100vh'}
    return <>
        <GlobalStyle/>
        <div style={style}>
            {story()}
        </div>
    </>
});

addDecorator(withA11y);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

configure(require.context('../src', true, /\.stories\.(jsx|mdx)$/), module);
