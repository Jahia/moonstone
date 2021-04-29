import React from 'react';
import {addDecorator} from '@storybook/react';
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

export const parameters = {
    layout: 'fullscreen',
    docs: {
        extractComponentDescription: (component, { notes }) => {
            if (notes) {
                return typeof notes === 'string' ? notes : notes.markdown || notes.text;
            }
            return null;
        },
    },
    options: {
        storySort: {
            method: 'alphabetical'
        }
    }
};
