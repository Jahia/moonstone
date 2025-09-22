export const filterInputValue = (value: string, allowNegative: boolean, allowDecimal: boolean) => {
    const negativeDecimal = /^-?(0|[1-9]\d*)((\.|,)\d+)?$/;
    const negative = /^-?(0|[1-9]\d*)$/;
    const decimal = /^(0|[1-9]\d*)((\.|,)\d+)?$/;
    const defaultPattern = /^(0|[1-9]\d*)$/;
    const inputType = (allowNegative && allowDecimal) ? 'both' : allowNegative ? 'negative' : allowDecimal ? 'decimal' : 'default';

    if (value === '' || value === 'NaN') {
        return '';
    }

    const getPattern = () => {
        let pattern;
        switch (inputType) {
            case 'both':
                pattern = negativeDecimal;
                break;

            case 'negative':
                pattern = negative;
                break;

            case 'decimal':
                pattern = decimal;
                break;
            default:
                pattern = defaultPattern;
                break;
        }

        return pattern;
    };

    const filterValue = (val: string) => {
        let filtered;
        switch (inputType) {
            case 'both':
                filtered = val.replace(/[^\d.,-]/g, '').replace(/(?!^)-/g, '').replace(/[.,].*[.,]/g, match => match.substring(1));
                break;
            case 'negative':
                filtered = val.replace(/[^\d-]/g, '').replace(/(?!^)-/g, '');
                break;
            case 'decimal':
                filtered = val.replace(/[^\d.,]/g, '').replace(/[.,].*[.,]/g, match => match.substring(1));
                break;
            default:
                filtered = val.replace(/\D/g, '');
                break;
        }

        return filtered;
    };

    if (!getPattern().test(value) && value !== '') {
        const filteredValue = filterValue(value);
        return filteredValue;
    }

    return value;
};
