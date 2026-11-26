import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';

import * as projectAnnotations from './preview';

// Applies Storybook's project-level annotations (decorators, globals, parameters
// from preview.jsx) to every story rendered by the Vitest addon. A setup file disables the
// automatic injection of addons, so the a11y addon is added here for axe to report on each story.
const project = setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

beforeAll(project.beforeAll);
