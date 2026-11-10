import { composeStories } from '@storybook/react';
import { render } from 'vitest-browser-react';

// @ts-expect-error preview is js not ts
import * as projectAnnotations from '../.storybook/preview.jsx';
import * as AccordionStories from './components/Accordion/Accordion.stories';

const { Reversed } = composeStories(AccordionStories, projectAnnotations);

describe('Reversed story canvas', () => {
    it('draws the dark background under Vitest, where axe measures the contrast', async () => {
        const probe = document.createElement('div');
        probe.style.background = 'var(--moon-color-gray_dark)';
        document.body.append(probe);
        const darkBackground = getComputedStyle(probe).backgroundColor;
        probe.remove();

        await render(<Reversed/>);

        expect(getComputedStyle(document.body).backgroundColor).toBe(darkBackground);
    });
});
