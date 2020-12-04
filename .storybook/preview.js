import React from 'react';
import {addDecorator} from '@storybook/react';
// import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks';
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

// addParameters({
//     docs: {
//         container: DocsContainer,
//         page: DocsPage,
//     },
// });

export const parameters = {
    layout: 'fullscreen',
};
