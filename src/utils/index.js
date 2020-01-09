export function capitalize(string) {
    return string.replace(/^\w/, c => c.toUpperCase());
}

export function optionsFromArray(array) {
    let list = {};

    array.forEach(option => {
        list[capitalize(option)] = option;
    });

    return list;
}
