import * as Icons from '~/tokens/icons/asset';
export const iconsName = Object.keys(Icons);

export function capitalize(string) {
    return string.replace(/^\w/, c => c.toUpperCase());
}

export function optionsFromArray(array) {
    return array.reduce((list, option) => {
        list[capitalize(option)] = option;
        return list;
    }, {});
}
