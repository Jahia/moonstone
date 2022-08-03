import * as Icons from '~/icons';
export const iconsName = Object.keys(Icons);

export function capitalize(str: string) {
    return str.replace(/^\w/, c => c.toUpperCase());
}
