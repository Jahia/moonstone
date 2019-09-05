import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Button from './Button'
import doc from './button.md'
// import {DSProvider} from '@jahia/design-system-kit';

// import {Close, Search} from '@material-ui/icons';

// import '../../date.config';
// import { action } from '@storybook/addon-actions'

// const readOnly = () => boolean('readOnly', false);
// const disabled = () => boolean('disabled', false);
// const error = () => boolean('error', false);
// const onBlur = () => action('onBlur');
// const onChange = () => action('onChange');
// const onFocus = () => action('onFocus');

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add(
        'default',
        () => (
            <Button
                label='toto'
                // error={error()}
                // readOnly={readOnly()}
                // onBlur={onBlur()}
                // onChange={onChange()}
                // onFocus={onFocus()}
            />
        ),
        { notes: { markdown: doc } }
    )
    .add(
        'colors',
        () => (
            <div>
                <Button label='primary' />
                <Button label='secondary' classes='secondary' />
                <Button label='success' classes='success' />
                <Button label='danger' classes='danger' />
                <Button label='warning' classes='warning' />
                <Button label='disabled' classes='warning' isDisabled='true' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
// .add(
//     'number',
//     () => (
//         <DSProvider>
//             <Input
//                 type='number'
//                 disabled={disabled()}
//                 error={error()}
//                 readOnly={readOnly()}
//                 onBlur={onBlur()}
//                 onChange={onChange()}
//                 onFocus={onFocus()}
//             />
//         </DSProvider>
//     ),
//     { notes: { markdown: doc } }
// )
// .add(
//     'number long',
//     () => (
//         <DSProvider>
//             <Input
//                 type='number'
//                 decimalScale={0}
//                 disabled={disabled()}
//                 error={error()}
//                 readOnly={readOnly()}
//                 onBlur={onBlur()}
//                 onChange={onChange()}
//                 onFocus={onFocus()}
//             />
//         </DSProvider>
//     ),
//     { notes: { markdown: doc } }
// )
// .add(
//     'number decimal',
//     () => (
//         <DSProvider>
//             <Input
//                 type='number'
//                 decimalSeparator='.'
//                 decimalScale={5}
//                 disabled={disabled()}
//                 error={error()}
//                 readOnly={readOnly()}
//                 onBlur={onBlur()}
//                 onChange={onChange()}
//                 onFocus={onFocus()}
//             />
//         </DSProvider>
//     ),
//     { notes: { markdown: doc } }
// )
// .add(
//     'icon',
//     () => (
//         <DSProvider>
//             <Input
//                 variant={{ icon: <Search /> }}
//                 disabled={disabled()}
//                 error={error()}
//                 readOnly={readOnly()}
//                 onBlur={onBlur()}
//                 onChange={onChange()}
//                 onFocus={onFocus()}
//             />
//         </DSProvider>
//     ),
//     { notes: { markdown: doc } }
// )
// .add(
//     'interactive',
//     () => (
//         <DSProvider>
//             <Input
//                 variant={{ interactive: <Close /> }}
//                 disabled={disabled()}
//                 error={error()}
//                 readOnly={readOnly()}
//                 onBlur={onBlur()}
//                 onChange={onChange()}
//                 onFocus={onFocus()}
//             />
//         </DSProvider>
//     ),
//     { notes: { markdown: doc } }
// )
