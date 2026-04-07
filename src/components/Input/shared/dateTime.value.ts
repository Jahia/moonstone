import type {DateTimeInputValue} from './dateTime.types';

export const emptyDateTimeInputValue: DateTimeInputValue = {
    date: null,
    time: null,
    timezone: null
};

export const createDateTimeInputValue = (value?: DateTimeInputValue | null): DateTimeInputValue => ({
    date: value?.date ?? null,
    time: value?.time ?? null,
    timezone: value?.timezone ?? null
});
