import preview from '~/__storybook__/preview';
import {PrimaryNavItemsGroup} from './index';
import {PrimaryNavItem} from '~/components/PrimaryNav/PrimaryNavItem';
import {Edit} from '~/icons';
import markdownNotes from './PrimaryNavItemsGroup.md';
import {reset} from '~/globals/css-utils.js';

const meta = preview.meta({
    title: 'Components/PrimaryNavItemsGroup',
    component: PrimaryNavItemsGroup,
    parameters: {
        docs: {description: {component: markdownNotes}},
        layout: 'fullscreen'
    },
    decorators: [
        Story => (
            <div
                className={reset}
                style={{
                    backgroundColor: '#131c21',
                    width: '18.75rem',
                    height: '100vh'
                }}
            >
                <Story/>
            </div>
        )
    ]
});

export const Default = meta.story({
    render: () => (
        <PrimaryNavItemsGroup>
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem icon={<Edit/>} label="NavItem"/>
        </PrimaryNavItemsGroup>
    )
});

export const CollapsedGroup = meta.story({
    render: () => (
        <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
            <PrimaryNavItem icon={<Edit/>} label="Hidden when collapsed"/>
            <PrimaryNavItem icon={<Edit/>} label="Hidden when collapsed too"/>
        </PrimaryNavItemsGroup>
    )
});

