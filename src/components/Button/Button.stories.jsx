import React from 'react';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

import markdownNotes from './Button.md';
import {Button} from './index';
import {buttonColors, buttonSizes, buttonVariants} from './Button.types';

const labelValue = () => text('Label', 'Button');
const colorValues = () => select('Color', buttonColors, 'default');
const sizeValues = () => select('Size', buttonSizes, 'default');
const variantValues = () => select('Variant', buttonVariants, 'default');
const isReversed = () => boolean('Is reversed', false);
const isLoading = () => boolean('Is Loading', false);
const isDisabled = () => boolean('Is disabled', false);
const selectIcon = () => select('Icon', iconsName, 'Apps');

export default {
    title: 'Components/Button',
    decorators: [withKnobs],

    parameters: {
        component: Button,
        componentSubtitle: 'Button',
        notes: {markdown: markdownNotes}
    }
};

export const ButtonWithIconAndLabel = () => (
    <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        label="Button"
                        color={color}
                        size={sizeValues()}
                        variant="default"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        label="Button"
                        color={color}
                        size={sizeValues()}
                        variant="outlined"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        label="Button"
                        color={color}
                        size={sizeValues()}
                        variant="ghost"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

ButtonWithIconAndLabel.story = {
    name: 'Button with icon and label'
};

export const ButtonDisabled = () => (
    <div
    style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}
    >
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        label="Button"
                        color={color}
                        size={sizeValues()}
                        variant="default"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        label="Button"
                        color={color}
                        size={sizeValues()}
                        variant="outlined"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        label="Button"
                        color={color}
                        size={sizeValues()}
                        variant="ghost"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

ButtonDisabled.story = {
    name: 'Button disabled'
};

export const ButtonWithLabelOnly = () => (
    <div
    style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}
    >
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
                        label={labelValue()}
                        color={color}
                        size={sizeValues()}
                        variant="default"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        label={labelValue()}
                        color={color}
                        size={sizeValues()}
                        variant="outlined"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        label={labelValue()}
                        color={color}
                        size={sizeValues()}
                        variant="ghost"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

ButtonWithLabelOnly.story = {
    name: 'Button with label only'
};

export const ButtonWithIconOnly = () => (
    <div
    style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}
    >
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        color={color}
                        size={sizeValues()}
                        variant="default"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        color={color}
                        size={sizeValues()}
                        variant="outlined"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
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
                        icon={<IconWrapper iconName={selectIcon()}/>}
                        color={color}
                        size={sizeValues()}
                        variant="ghost"
                        isReversed={isReversed()}
                        isLoading={isLoading()}
                        onClick={() => null}
                    />
                </div>
      ))}
        </section>
    </div>
);

ButtonWithIconOnly.story = {
    name: 'Button with icon only'
};

export const Playground = () => (
    <div
    style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}
    >
        <section className="storyGrid">
            <div className="storyGridItem">
                <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>
                    Button with icon and label
                </h3>
            </div>
            <div className="storyGridItem">
                <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>
                    Button with label only
                </h3>
            </div>
            <div className="storyGridItem">
                <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>
                    Button with icon only
                </h3>
            </div>
        </section>
        <section className="storyGrid">
            <div className="storyGridItem">
                <Button
                    icon={<IconWrapper iconName={selectIcon()}/>}
                    label={labelValue()}
                    color={colorValues()}
                    size={sizeValues()}
                    variant={variantValues()}
                    isReversed={isReversed()}
                    isLoading={isLoading()}
                    isDisabled={isDisabled()}
                    onClick={() => null}
                    />
            </div>
            <div className="storyGridItem">
                <Button
                    label={labelValue()}
                    color={colorValues()}
                    size={sizeValues()}
                    variant={variantValues()}
                    isReversed={isReversed()}
                    isLoading={isLoading()}
                    isDisabled={isDisabled()}
                    onClick={() => null}
                    />
            </div>
            <div className="storyGridItem">
                <Button
                    icon={<IconWrapper iconName={selectIcon()}/>}
                    color={colorValues()}
                    size={sizeValues()}
                    variant={variantValues()}
                    isReversed={isReversed()}
                    isLoading={isLoading()}
                    isDisabled={isDisabled()}
                    onClick={() => null}
                    />
            </div>
        </section>
    </div>
);
