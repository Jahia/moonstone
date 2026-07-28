import {beforeAll} from 'vitest';
import preview from './preview';

// Applies Storybook's project-level annotations (decorators, globals, parameters
// from preview.jsx) to every story rendered by the Vitest addon.
beforeAll(preview.composed.beforeAll);
