import React from 'react';
import classnames from 'clsx';
import {storiesOf} from '@storybook/react';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.module.scss';
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
const isDisabled = () => boolean('Is disabled', false);
const selectIcon = () => select('Icon', iconsName, 'Apps');

storiesOf('Components/Button', module)
    .addParameters({
        component: Button,
        componentSubtitle: 'Button',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Button with icon and label', () => (
        <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>Variant</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <h3>{color}</h3>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>default</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button icon={<IconWrapper iconName={selectIcon()}/>}
                                    label="Button"
                                    color={color}
                                    size={sizeValues()}
                                    variant="default"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>outlined</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button icon={<IconWrapper iconName={selectIcon()}/>}
                                    label="Button"
                                    color={color}
                                    size={sizeValues()}
                                    variant="outlined"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>ghost</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button icon={<IconWrapper iconName={selectIcon()}/>}
                                    label="Button"
                                    color={color}
                                    size={sizeValues()}
                                    variant="ghost"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
        </div>
    ))
    .add('Button with label only', () => (
        <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>Variant</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <h3>{color}</h3>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>default</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button label={labelValue()}
                                    color={color}
                                    size={sizeValues()}
                                    variant="default"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>outlined</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button label={labelValue()}
                                    color={color}
                                    size={sizeValues()}
                                    variant="outlined"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>ghost</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button label={labelValue()}
                                    color={color}
                                    size={sizeValues()}
                                    variant="ghost"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
        </div>
    ))
    .add('Button with icon only', () => (
        <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>Variant</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <h3>{color}</h3>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>default</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button icon={<IconWrapper iconName={selectIcon()}/>}
                                    color={color}
                                    size={sizeValues()}
                                    variant="default"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>outlined</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button icon={<IconWrapper iconName={selectIcon()}/>}
                                    color={color}
                                    size={sizeValues()}
                                    variant="outlined"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3>ghost</h3>
                </div>
                {
                    buttonColors.map(color => (
                        <div key={color} className={classnames(storyStyles.storyGridItem)}>
                            <Button icon={<IconWrapper iconName={selectIcon()}/>}
                                    color={color}
                                    size={sizeValues()}
                                    variant="ghost"
                                    isReversed={isReversed()}
                                    onClick={() => {}}/>
                        </div>
                    ))
                }
            </section>
        </div>
    ))
    .add('Playground', () => (
        <div style={isReversed() ? {backgroundColor: 'var(--color-gray_dark)'} : null}>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>Button with icon and label</h3>
                </div>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>Button with label only</h3>
                </div>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <h3 style={isReversed() ? {color: 'var(--color-white)'} : null}>Button with icon only</h3>
                </div>
            </section>
            <section className={classnames(storyStyles.storyGrid)}>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <Button icon={<IconWrapper iconName={selectIcon()}/>}
                            label={labelValue()}
                            color={colorValues()}
                            size={sizeValues()}
                            variant={variantValues()}
                            isReversed={isReversed()}
                            isDisabled={isDisabled()}
                            onClick={() => {}}/>
                </div>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <Button label={labelValue()}
                            color={colorValues()}
                            size={sizeValues()}
                            variant={variantValues()}
                            isReversed={isReversed()}
                            isDisabled={isDisabled()}
                            onClick={() => {}}/>
                </div>
                <div className={classnames(storyStyles.storyGridItem)}>
                    <Button icon={<IconWrapper iconName={selectIcon()}/>}
                            color={colorValues()}
                            size={sizeValues()}
                            variant={variantValues()}
                            isReversed={isReversed()}
                            isDisabled={isDisabled()}
                            onClick={() => {}}/>
                </div>
            </section>
        </div>
    ));
