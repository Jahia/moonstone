export const filterInput = (value: string, allowNegative: boolean, allowDecimal = false) => {
    console.log('filtering: ' + value);
    const pattern = allowNegative && allowDecimal ? /^-?(0|[1-9]\d*)(\.\d+)?$/ : allowNegative ? /^-?(0|[1-9]\d*)$/ : allowDecimal ? /^(0|[1-9]\d*)(\.\d+)?$/ : /^(0|[1-9]\d*)$/;

    if (value === '' || value === 'NaN') {
        return '';
    }

    if (!pattern.test(value) && value !== '') {
        console.log('need filter');
        const filteredValue = allowNegative && allowDecimal ? value.replace(/[^\d.-]/g, '').replace(/(?!^)-/g, '').replace(/\..*\./g, match => match.substring(1)) :
            allowNegative ? value.replace(/[^\d-]/g, '').replace(/(?!^)-/g, '') :
                allowDecimal ? value.replace(/[^\d.]/g, '').replace(/\..*\./g, match => match.substring(1)) :
                    value.replace(/\D/g, '');
        console.log('filtered = ' + filteredValue);
        return filteredValue;
    }

    return value;
};
