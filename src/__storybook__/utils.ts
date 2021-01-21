import * as Icons from '~/icons';
export const iconsName = Object.keys(Icons);

export function capitalize(str: string) {
    return str.replace(/^\w/, c => c.toUpperCase());
}

export function optionsFromArray(arr: string[]) {
    // Get rid of this any
    return arr.reduce((list: any, option) => {
        list[capitalize(option)] = option;
        return list;
    }, {});
}
