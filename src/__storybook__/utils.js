export function capitalize(string) {
    return string.replace(/^\w/, c => c.toUpperCase());
}

export function optionsFromArray(array) {
    return array.reduce((list, option) => {
        list[capitalize(option)] = option;
        return list;
    }, {});
}
