import React from 'react';
import '~/__storybook__/storybook.scss';
import IconWrapper from '~/__storybook__/IconWrapper';

import markdownNotes from './Button.md';
import {Button} from './index';
import {buttonColors} from './Button.types';
import {Love} from '~/icons';

export default {
    title: 'Components/Button',
    component: Button,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default = args => <Button {...args}/>;
Default.args = {
    variant: 'default',
    size: 'default',
    icon: <Love/>,
    label: 'Button'
};

export const Ghost = args => <Button {...args}/>;
Ghost.args = {
    variant: 'ghost',
    size: 'default',
    icon: <Love/>,
    label: 'Button'
};

export const Outlined = args => <Button {...args}/>;
Outlined.args = {
    variant: 'outlined',
    size: 'default',
    icon: <Love/>,
    label: 'Button'
};

export const ButtonWithIconAndLabel = () => (
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

export const ButtonsDisabled = () => (
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

export const ButtonsWithLabelOnly = () => (
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

export const ButtonsWithIconOnly = () => (
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
