import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

// @ts-expect-error preview is js not ts
import * as projectAnnotations from '../../.storybook/preview.jsx';
import * as components from './index';
import { Button, ControlledButtonToggle, Drawer, Dropdown, UncontrolledButtonToggle } from './index';

import type { ComposedStory } from '../visualStoriesSuite';

const stories = import.meta.glob<never>('./**/*.stories.{tsx,jsx}', { eager: true });

// Exports that render no element of their own
const noElement = new Set(['AccordionContext', 'GlobalStyle', 'PrimaryNavContext']);

// Never shown by a story: the stories show them closed, or wrapped in a component whose name wins
const notInStories = ['ControlledButtonToggle', 'Drawer', 'DropdownMenu', 'TreeViewMenu', 'UncontrolledButtonToggle'];

const exportedComponents = Object.keys(components)
    .filter(name => /^[A-Z]/.test(name) && !noElement.has(name))
    .sort();

const collect = (found: Set<string>) => document.body.querySelectorAll('[data-moonstone]').forEach((element) => {
    found.add(element.getAttribute('data-moonstone')!);
});

describe('data-moonstone', () => {
    it('names every exported component in the stories', async () => {
        const found = new Set<string>();

        for (const imports of Object.values(stories)) {
            for (const Story of Object.values<ComposedStory>(composeStories(imports, projectAnnotations))) {
                const { container, unmount } = render(<Story/>);
                if (Story.play) {
                    await Story.play({ canvasElement: container });
                }

                collect(found);
                unmount();
            }
        }

        expect(exportedComponents.filter(name => !found.has(name) && !notInStories.includes(name))).toEqual([]);
    });

    it('names the components that the stories do not show', async () => {
        const found = new Set<string>();

        const { unmount } = render(
            <>
                <ControlledButtonToggle isPressed={false} label="Controlled"/>
                <UncontrolledButtonToggle label="Uncontrolled"/>
                <Drawer isOpen>Content</Drawer>
            </>,
        );
        collect(found);
        unmount();

        const openDropdown = async (dropdown: React.ReactElement) => {
            const { unmount: unmountDropdown } = render(dropdown);
            screen.getByRole('listbox').focus();
            await userEvent.keyboard('{Enter}');
            await screen.findByRole('list');
            collect(found);
            unmountDropdown();
        };
        await openDropdown(<Dropdown data={[{ label: 'Apple', value: 'apple' }]} placeholder="Fruit" value="" onChange={() => undefined}/>);
        await openDropdown(<Dropdown placeholder="Fruit" treeData={[{ id: 'apple', label: 'Apple', value: 'apple' }]} value="" onChange={() => undefined}/>);

        expect(notInStories.filter(name => !found.has(name))).toEqual([]);
    });

    it('sets the name on the root, beside the data attributes of the consumer', () => {
        render(<Button data-sel-role="save" label="Save"/>);
        expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('data-moonstone', 'Button');
        expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('data-sel-role', 'save');
    });
});
