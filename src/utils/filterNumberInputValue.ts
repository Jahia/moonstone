export const filterNumberInputValue = (value: string, allowNegative: boolean, allowDecimal: boolean, separator: string) => {
    const negativeSign = allowNegative ? '-?' : '';
    const decimalPart = allowDecimal ? `((\\${separator})\\d+)?` : '';
    const pattern = new RegExp(`^${negativeSign}(0|[1-9]\\d*)${decimalPart}$`);
    const inputType = (allowNegative && allowDecimal) ? 'both' : allowNegative ? 'negative' : allowDecimal ? 'decimal' : 'default';

    if (value === '' || value === 'NaN') {
        return '';
    }

    const filterValue = (val: string) => {
        let filtered;

        switch (inputType) {
            case 'both':
                filtered = val.replace(new RegExp(`[^\\d${separator}\\-]`, 'g'), '').replace(/(?!^)-/g, '').replace(new RegExp(`\\${separator}.*\\${separator}`, 'g'), match => match.substring(1));
                break;
            case 'negative':
                filtered = val.replace(/[^\d-]/g, '').replace(/(?!^)-/g, '');
                break;
            case 'decimal':
                filtered = val.replace(new RegExp(`[^\\d${separator}]`, 'g'), '').replace(new RegExp(`\\${separator}.*\\${separator}`, 'g'), match => match.substring(1));
                break;
            default:
                filtered = val.replace(/\D/g, '');
                break;
        }

        if (filtered.startsWith(separator)) {
            filtered = '0' + filtered;
        }

        if (filtered.startsWith(`-${separator}`)) {
            filtered = filtered.replace(new RegExp(`\\${separator}`, 'g'), `0${separator}`);
        }

        return filtered;
    };

    if (!pattern.test(value) && value !== '') {
        const filteredValue = filterValue(value);
        return filteredValue;
    }

    return value;
};
