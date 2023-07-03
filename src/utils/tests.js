import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Import type {Options} from '@testing-library/user-event/dist/types/options';
// import {ReactElement} from 'react';

// export const setup = (ui: ReactElement, options?: Options) => ({
export const setup = (ui, options?) => ({
    user: userEvent.setup(options),
    ...render(ui)
});
