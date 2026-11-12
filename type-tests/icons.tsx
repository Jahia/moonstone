// The icons entry point resolves with its types, and the root still exports the same icons
import { Add as RootAdd } from '@jahia/moonstone';
import { Add } from '@jahia/moonstone/icons';

export const rootIcon: typeof Add = RootAdd;

export const usages = (
    <>
        <Add/>
        <RootAdd/>
    </>
);
