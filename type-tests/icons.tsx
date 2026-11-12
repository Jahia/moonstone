// The icons entry point resolves with its types, and an icon of the root keeps the same type
import { Add as RootAdd } from '@jahia/moonstone';
import { Add } from '@jahia/moonstone/icons';

export const rootIcon: typeof Add = RootAdd;

export const usages = (
    <>
        <Add/>
        <RootAdd/>
    </>
);
