import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';

// Applies Storybook's project-level annotations (decorators, globals, parameters
// from preview.jsx) to every story rendered by the Vitest addon.
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
