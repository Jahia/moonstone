import React from 'react';
// Import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';
import IconWrapper from '~/__storybook__/IconWrapper';
// Import {iconsName} from '~/__storybook__/utils';

import markdownNotes from './Button.md';
import {Button} from './index';
import {buttonColors} from './Button.types';

// Const labelValue = () => text('Label', 'Button');
// const colorValues = () => select('Color', buttonColors, 'default');
// const sizeValues = () => select('Size', buttonSizes, 'default');
// const variantValues = () => select('Variant', buttonVariants, 'default');
// const isReversed = () => boolean('Is reversed', false);
// const isLoading = () => boolean('Is Loading', false);
// const isDisabled = () => boolean('Is disabled', false);
// const selectIcon = () => select('Icon', iconsName, 'Apps');

export default {
    title: 'Components/Button',
    component: Button,

    parameters: {
        componentSubtitle: 'Button',
        notes: {markdown: markdownNotes}
    }
};

export const ButtonWithIconAndLabel = () => (
    // <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
    <div>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>Variant</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <h3>{color}</h3>
                </div>
            ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>default</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        icon={<IconWrapper iconName="Love"/>}
                        label="Button"
                        color={color}
                        size="default"
                        variant="default"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
            ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>outlined</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        icon={<IconWrapper iconName="Love"/>}
                        label="Button"
                        color={color}
                        size="default"
                        variant="outlined"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
            ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>ghost</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        icon={<IconWrapper iconName="Love"/>}
                        label="Button"
                        color={color}
                        size="default"
                        variant="ghost"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
            ))}
        </section>
    </div>
);

export const ButtonDisabled = () => (
    // <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
    <div>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>Variant</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <h3>{color}</h3>
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>default</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        isDisabled
                        icon={<IconWrapper iconName="Love"/>}
                        label="Button"
                        color={color}
                        size="default"
                        variant="default"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>outlined</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        isDisabled
                        icon={<IconWrapper iconName="Love"/>}
                        label="Button"
                        color={color}
                        size="default"
                        variant="outlined"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>ghost</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        isDisabled
                        icon={<IconWrapper iconName="Love"/>}
                        label="Button"
                        color={color}
                        size="default"
                        variant="ghost"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

export const ButtonWithLabelOnly = () => (
    // <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
    <div>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>Variant</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <h3>{color}</h3>
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>default</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        label="button"
                        color={color}
                        size="big"
                        variant="default"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>outlined</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        label="button"
                        color={color}
                        size="big"
                        variant="outlined"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>ghost</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        label="button"
                        color={color}
                        size="big"
                        variant="ghost"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

export const ButtonWithIconOnly = () => (
    // <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
    <div>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>Variant</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <h3>{color}</h3>
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>default</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        icon={<IconWrapper iconName="Love"/>}
                        color={color}
                        size="default"
                        variant="default"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>outlined</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        icon={<IconWrapper iconName="Love"/>}
                        color={color}
                        size="default"
                        variant="outlined"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3>ghost</h3>
            </div>
            {buttonColors.map(color => (
                <div key={color} className="storyGridItem">
                    <Button
                        icon={<IconWrapper iconName="Love"/>}
                        color={color}
                        size="default"
                        variant="ghost"
                        isReversed={false}
                        isLoading={false}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

// Export const Playground = () => (
//     <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
//         <section className="storyGrid">
//             <div className="storyGridItem">
//                 <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>
//                     Button with icon and label
//                 </h3>
//             </div>
//             <div className="storyGridItem">
//                 <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>
//                     Button with label only
//                 </h3>
//             </div>
//             <div className="storyGridItem">
//                 <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>
//                     Button with icon only
//                 </h3>
//             </div>
//         </section>
//         <section className="storyGrid">
//             <div className="storyGridItem">
//                 <Button
//                     icon={<IconWrapper iconName={selectIcon()}/>}
//                     label={labelValue()}
//                     color={colorValues()}
//                     size={sizeValues()}
//                     variant={variantValues()}
//                     isReversed={isReversed()}
//                     isLoading={isLoading()}
//                     isDisabled={isDisabled()}
//                     onClick={() => null}
//                 />
//             </div>
//             <div className="storyGridItem">
//                 <Button
//                     label={labelValue()}
//                     color={colorValues()}
//                     size={sizeValues()}
//                     variant={variantValues()}
//                     isReversed={isReversed()}
//                     isLoading={isLoading()}
//                     isDisabled={isDisabled()}
//                     onClick={() => null}
//                 />
//             </div>
//             <div className="storyGridItem">
//                 <Button
//                     icon={<IconWrapper iconName={selectIcon()}/>}
//                     color={colorValues()}
//                     size={sizeValues()}
//                     variant={variantValues()}
//                     isReversed={isReversed()}
//                     isLoading={isLoading()}
//                     isDisabled={isDisabled()}
//                     onClick={() => null}
//                 />
//             </div>
//         </section>
//     </div>
// );
