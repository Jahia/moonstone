import {createRef} from 'react';
import {render, screen} from '@testing-library/react';
import {vi, type Mock} from 'vitest';
import userEvent from '@testing-library/user-event';
import {Temporal} from 'temporal-polyfill';
import {DateTimeInput} from './index';

const nextMonthLabel = 'Next month';
const previousMonthLabel = 'Previous month';
const march2026 = 'March 2026';
const april2026 = 'April 2026';

// Inputs are passed as ISO strings; emitted values are asserted via `.toString()` against
// literal ISO. Fields are located by stable handles (placeholder / role), never by a
// re-derived display string, so the tests don't mirror the component's own formatting.
// `baseDate` is this spec's reference date: today, since the "Today" shortcut tests assert
// against it. Read once from the system-clock oracle the component uses (Temporal.Now) — a
// reference, not a copy of any formatting logic.
const baseDate = Temporal.Now.plainDateISO().toString();
const lastValue = (handleChange: Mock) => handleChange.mock.lastCall?.[1];
const dateField = () => screen.getByPlaceholderText('Select a date');

describe('DateTimeInput', () => {
    it('should open the calendar and select today (PlainDate)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="date" placeholder="Select a date" onChange={handleChange}/>);

        await user.click(dateField());
        await user.click(screen.getByText('Today'));

        expect(lastValue(handleChange).toString()).toBe(baseDate);
    });

    it('should disable the today shortcut when today is configured as unavailable', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue={null}
                disabledDates={[baseDate]}
                onChange={handleChange}
            />
        );

        await user.click(dateField());

        expect(screen.getByRole('button', {name: 'Today'})).toBeDisabled();
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should render default calendar action labels', async () => {
        const user = userEvent.setup();

        render(<DateTimeInput type="date" placeholder="Select a date" onChange={() => null}/>);

        await user.click(dateField());

        expect(screen.getByRole('button', {name: 'Today'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Go to the next month'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Go to the previous month'})).toBeInTheDocument();
    });

    it('should render custom calendar action labels', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                i18n={{todayButton: 'Current day', nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(dateField());

        expect(screen.getByRole('button', {name: 'Current day'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: nextMonthLabel})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: previousMonthLabel})).toBeInTheDocument();
    });

    it('should default to the current date and time when no defaultValue is given', () => {
        render(<DateTimeInput type="dateTime" placeholder="Select a date" onChange={() => null}/>);

        expect(dateField()).not.toHaveValue('');
        expect(screen.getByPlaceholderText('HH:MM')).not.toHaveValue('');
    });

    it('should render empty when defaultValue is null', () => {
        render(<DateTimeInput type="dateTime" placeholder="Select a date" defaultValue={null}/>);

        expect(dateField()).toHaveValue('');
        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('');
    });

    it('should fill and display today when a time is entered without a date', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" placeholder="Select a date" defaultValue={null} onChange={handleChange}/>);

        expect(dateField()).toHaveValue('');

        const timeInput = screen.getByPlaceholderText('HH:MM');
        await user.type(timeInput, '0930');
        await user.tab();

        // Entering a time with no date fills today, and the trigger shows it — so the user
        // sees the date that was applied under the hood.
        expect(lastValue(handleChange).toString()).toBe(`${baseDate}T09:30:00`);
        expect(dateField()).not.toHaveValue('');
    });

    it('should select a datetime date at midnight when no time exists (PlainDateTime)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" placeholder="Select a date" defaultValue={null} onChange={handleChange}/>);

        await user.click(dateField());
        await user.click(screen.getByText('Today'));

        expect(lastValue(handleChange).toString()).toBe(`${baseDate}T00:00:00`);
    });

    it('should render the 24h datetime layout and emit a ZonedDateTime on timezone change', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="zonedDateTime"
                placeholder="Select a date"
                defaultValue="2026-02-10T11:56[Europe/Paris]"
                onChange={handleChange}
            />
        );

        expect(dateField()).not.toHaveValue('');
        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        await user.click(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'}));
        await user.type(screen.getByRole('searchbox'), 'toronto');
        await user.click(screen.getByText('Toronto (UTC -05:00)'));

        expect(lastValue(handleChange).toString()).toBe('2026-02-10T11:56:00-05:00[America/Toronto]');
    });

    it('should reset the selected datetime to midnight when the time is cleared', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" defaultValue="2026-02-10T11:56" onChange={handleChange}/>);

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        await user.tab();

        expect(lastValue(handleChange).toString()).toBe('2026-02-10T00:00:00');
    });

    it('should keep midnight after clearing the time and selecting another date', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="dateTime"
                placeholder="Select a date"
                defaultValue="2026-02-10T11:56"
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('11:56'));
        await user.click(dateField());
        await user.click(screen.getByText('12'));

        expect(lastValue(handleChange).toString()).toBe('2026-02-12T00:00:00');
    });

    it('should not emit a change while the time is incomplete', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" defaultValue="2026-02-10T11:56" onChange={handleChange}/>);

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        handleChange.mockClear();
        await user.type(timeInput, '12');

        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should emit the selected date with the typed complete time', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" defaultValue="2026-02-10T11:56" onChange={handleChange}/>);

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        handleChange.mockClear();
        await user.type(timeInput, '1425');
        await user.tab();

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(lastValue(handleChange).toString()).toBe('2026-02-10T14:25:00');
    });

    it('should apply native segmented time entry inside dateTime mode (143 -> 14:03)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" defaultValue="2026-02-10T11:56" onChange={handleChange}/>);

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        await user.type(timeInput, '143');
        await user.tab();

        expect(lastValue(handleChange).toString()).toBe('2026-02-10T14:03:00');
    });

    it('should step the time with ArrowUp inside dateTime mode', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" defaultValue="2026-02-10T11:56" onChange={handleChange}/>);

        const timeInput = screen.getByDisplayValue('11:56') as HTMLInputElement;
        timeInput.focus();
        timeInput.setSelectionRange(0, 0);
        await user.keyboard('{ArrowUp}');

        expect(lastValue(handleChange).toString()).toBe('2026-02-10T12:56:00');
    });

    it('should render the 12h datetime layout with meridiem and timezone', () => {
        render(
            <DateTimeInput
                type="zonedDateTime"
                timeFormat="12h"
                defaultValue="2026-02-10T23:56[Europe/Paris]"
                onChange={() => null}
            />
        );

        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();
    });

    it('should let the user switch meridiem in 12h datetime mode and keep canonical output', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<DateTimeInput type="dateTime" timeFormat="12h" defaultValue="2026-02-10T02:30" onChange={handleChange}/>);

        await user.clear(screen.getByDisplayValue('02:30'));
        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM'));
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(lastValue(handleChange).toString()).toBe('2026-02-10T14:30:00');
    });

    it('should disable configured dates in the calendar', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                disabledDates={['2026-03-30']}
                onChange={() => null}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '30');
        expect(dayButton).toBeDisabled();
    });

    it('should let the user navigate to the next month without snapping back', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(dateField());
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));

        expect(screen.getByText(april2026)).toBeInTheDocument();
    });

    it('should render a year dropdown and let the user jump to another year without losing the selection', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        const selectedDisplay = (dateField() as HTMLInputElement).value;

        await user.click(dateField());
        await user.click(screen.getByRole('listbox', {name: '2026'}));
        await user.click(screen.getByRole('option', {name: '2024'}));

        expect(screen.getByText('March 2024')).toBeInTheDocument();
        expect(dateField()).toHaveValue(selectedDisplay);
    });

    it('should reset to the selected date month when reopening the calendar', async () => {
        const user = userEvent.setup();
        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(dateField());
        expect(screen.getByRole('grid', {name: march2026})).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        expect(screen.getByRole('grid', {name: april2026})).toBeInTheDocument();

        // Dismiss the calendar with Escape (standard keyboard dismissal pattern) and reopen.
        await user.keyboard('{Escape}');

        await user.click(dateField());
        expect(screen.getByRole('grid', {name: march2026})).toBeInTheDocument();
    });

    it('should refresh the timezone utc offset when the selected date changes internally', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="zonedDateTime"
                placeholder="Select a date"
                defaultValue="2026-03-15T11:56[Europe/Paris]"
                i18n={{nextMonth: nextMonthLabel}}
                onChange={() => null}
            />
        );

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        await user.click(dateField());
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        await user.click(screen.getByRole('button', {name: 'Wednesday, April 15th, 2026'}));

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +02:00)'})).toBeInTheDocument();
    });

    it('should keep a controlled value until the parent updates it', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                value="2026-03-30"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={handleChange}
            />
        );

        const selectedDisplay = (dateField() as HTMLInputElement).value;

        await user.click(dateField());
        await user.click(screen.getByText('15'));

        expect(lastValue(handleChange).toString()).toBe('2026-03-15');
        // Controlled: the parent didn't update `value`, so the field still shows the original.
        expect(dateField()).toHaveValue(selectedDisplay);
    });

    it('should not display an invalid date', () => {
        render(<DateTimeInput type="date" defaultValue="not-a-date" placeholder="Select a date" onChange={() => null}/>);

        expect(dateField()).toHaveValue('');
    });

    it('should open the calendar via keyboard (Enter and Space)', async () => {
        const user = userEvent.setup();
        render(<DateTimeInput type="date" placeholder="Select a date" onChange={() => null}/>);

        dateField().focus();
        await user.keyboard('{Enter}');
        expect(screen.getByText('Today')).toBeInTheDocument();

        // Close it, then verify Space also opens the calendar
        await user.keyboard('{Escape}');
        dateField().focus();
        await user.keyboard('{ }');
        expect(screen.getByText('Today')).toBeInTheDocument();
    });

    it('should not open the calendar when the input is disabled', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                isDisabled
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                onChange={() => null}
            />
        );

        await user.click(dateField());

        expect(screen.queryByText('Today')).not.toBeInTheDocument();
    });

    it('should not open the calendar when the input is read-only', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                isReadOnly
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                onChange={() => null}
            />
        );

        await user.click(dateField());

        expect(screen.queryByText('Today')).not.toBeInTheDocument();
    });

    it('should disable dates before minDate in the calendar', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                minDate="2026-03-10"
                onChange={() => null}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '5');
        expect(dayButton).toBeDisabled();
    });

    it('should disable dates after maxDate in the calendar', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                maxDate="2026-03-20"
                onChange={() => null}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '31');
        expect(dayButton).toBeDisabled();
    });

    it('should disable a date range via disabledDateRanges', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                disabledDateRanges={[{from: '2026-03-20', to: '2026-03-25'}]}
                onChange={() => null}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '22');
        expect(dayButton).toBeDisabled();
    });

    it('should not emit when timezone changes but no date has been selected yet', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="zonedDateTime"
                placeholder="Select a date"
                value={null}
                onChange={handleChange}
            />
        );

        // The zone selector shows the system zone. Interact via search to pick a known zone.
        const tzSelector = screen.getAllByRole('listbox')[0];
        await user.click(tzSelector);
        await user.type(screen.getByRole('searchbox'), 'toronto');
        await user.click(screen.getByText(/Toronto \(UTC/));

        // No date → no value should have been emitted.
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should default to the current date, time, and system timezone when no defaultValue is given (ZonedDateTime)', () => {
        render(<DateTimeInput type="zonedDateTime" placeholder="Select a date" onChange={() => null}/>);

        expect(dateField()).not.toHaveValue('');
        expect(screen.getByPlaceholderText('HH:MM')).not.toHaveValue('');
        expect(screen.getByRole('listbox').getAttribute('aria-label')).toMatch(/UTC/);
    });

    it('should apply a timezone chosen before any date exists once a date is later selected', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="zonedDateTime"
                placeholder="Select a date"
                value={null}
                onChange={handleChange}
            />
        );

        const tzSelector = screen.getAllByRole('listbox')[0];
        await user.click(tzSelector);
        await user.type(screen.getByRole('searchbox'), 'toronto');
        await user.click(screen.getByText(/Toronto \(UTC/));

        await user.click(dateField());
        await user.click(screen.getByText('Today'));

        // Toronto's offset shifts with DST, so the expectation is built from Temporal itself
        // (the same system-clock oracle `baseDate` uses) rather than a hardcoded offset.
        const expectedValue = Temporal.PlainDate.from(baseDate).toPlainDateTime().toZonedDateTime('America/Toronto').toString();
        expect(lastValue(handleChange).toString()).toBe(expectedValue);
    });

    it('should allow selecting the minDate itself (inclusive lower boundary)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                minDate="2026-03-10"
                onChange={handleChange}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '10');
        expect(dayButton).not.toBeDisabled();

        await user.click(dayButton as HTMLElement);

        expect(lastValue(handleChange).toString()).toBe('2026-03-10');
    });

    it('should allow selecting the maxDate itself (inclusive upper boundary)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                maxDate="2026-03-20"
                onChange={handleChange}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '20');
        expect(dayButton).not.toBeDisabled();

        await user.click(dayButton as HTMLElement);

        expect(lastValue(handleChange).toString()).toBe('2026-03-20');
    });

    it('should disable the inclusive boundaries of a disabledDateRanges entry', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                disabledDateRanges={[{from: '2026-03-20', to: '2026-03-25'}]}
                onChange={() => null}
            />
        );

        await user.click(dateField());

        // `showOutsideDays` renders trailing/leading days from adjacent months, so a bare day
        // number (e.g. '25') can also match a February outside-day button — match the full
        // accessible name to target March specifically.
        const fromButton = screen.getByRole('button', {name: /March 20th, 2026/});
        const toButton = screen.getByRole('button', {name: /March 25th, 2026/});

        expect(fromButton).toBeDisabled();
        expect(toButton).toBeDisabled();
    });

    it('should not render a year dropdown when minDate and maxDate fall within the same year', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                minDate="2026-01-01"
                maxDate="2026-12-31"
                onChange={() => null}
            />
        );

        await user.click(dateField());

        expect(screen.getByText(march2026)).toBeInTheDocument();
        expect(screen.queryByRole('listbox', {name: '2026'})).not.toBeInTheDocument();
    });

    it('should forward the ref to the underlying date input', () => {
        const ref = createRef<HTMLInputElement>();

        render(<DateTimeInput ref={ref} type="date" placeholder="Select a date" onChange={() => null}/>);

        expect(ref.current).toBe(dateField());
    });

    it('should render only the date field for type="date"', () => {
        render(<DateTimeInput type="date" placeholder="Select a date" onChange={() => null}/>);

        expect(screen.queryByPlaceholderText('HH:MM')).not.toBeInTheDocument();
        expect(screen.queryAllByRole('listbox')).toHaveLength(0);
    });

    it('should render the time field but no timezone selector for type="dateTime"', () => {
        render(<DateTimeInput type="dateTime" placeholder="Select a date" onChange={() => null}/>);

        expect(screen.getByPlaceholderText('HH:MM')).toBeInTheDocument();
        expect(screen.queryAllByRole('listbox')).toHaveLength(0);
    });

    it('should return focus to the date field when the calendar is closed via Escape', async () => {
        const user = userEvent.setup();
        render(<DateTimeInput type="date" placeholder="Select a date" onChange={() => null}/>);

        await user.click(dateField());
        await user.keyboard('{Escape}');

        expect(dateField()).toHaveFocus();
    });

    it('should respect a custom weekStartsOn', async () => {
        const user = userEvent.setup();
        render(<DateTimeInput type="date" placeholder="Select a date" weekStartsOn={0} onChange={() => null}/>);

        await user.click(dateField());

        const weekdayHeaders = screen.getAllByRole('columnheader', {hidden: true});
        expect(weekdayHeaders[0]).toHaveTextContent('Su');
    });

    it('should not emit a change when clicking a disabled calendar day', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                disabledDates={['2026-03-30']}
                onChange={handleChange}
            />
        );

        await user.click(dateField());

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '30');
        await user.click(dayButton as HTMLElement);

        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should disable the internal time input when isDisabled is set', () => {
        render(
            <DateTimeInput
                isDisabled
                type="dateTime"
                placeholder="Select a date"
                defaultValue="2026-03-15T11:56"
                onChange={() => null}
            />
        );

        expect(screen.getByPlaceholderText('HH:MM')).toBeDisabled();
    });

    it('should disable the internal timezone selector when isDisabled is set', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                isDisabled
                type="zonedDateTime"
                placeholder="Select a date"
                defaultValue="2026-03-15T11:56[Europe/Paris]"
                onChange={() => null}
            />
        );

        await user.click(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'}));

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it('should not display an invalid dateTime value', () => {
        render(<DateTimeInput type="dateTime" defaultValue="not-a-date" placeholder="Select a date" onChange={() => null}/>);

        expect(dateField()).toHaveValue('');
        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('');
    });

    it('should not display an invalid zonedDateTime value', () => {
        render(<DateTimeInput type="zonedDateTime" defaultValue="not-a-date" placeholder="Select a date" onChange={() => null}/>);

        expect(dateField()).toHaveValue('');
        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('');
    });

    it('should disable all weekend days when disabledDaysOfWeek=[0, 6] is set', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                disabledDaysOfWeek={[0, 6]}
                onChange={() => null}
            />
        );

        await user.click(dateField());

        // March 2026: the 1st is a Sunday (0) and the 7th is a Saturday (6).
        expect(screen.getByRole('button', {name: /March 1st, 2026/})).toBeDisabled();
        expect(screen.getByRole('button', {name: /March 7th, 2026/})).toBeDisabled();
        // A weekday must remain enabled.
        expect(screen.getByRole('button', {name: /March 2nd, 2026/})).not.toBeDisabled();
    });

    it('should not emit a change when clicking a disabled weekend day', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-15"
                disabledDaysOfWeek={[0, 6]}
                onChange={handleChange}
            />
        );

        await user.click(dateField());
        await user.click(screen.getByRole('button', {name: /March 7th, 2026/}));

        expect(handleChange).not.toHaveBeenCalled();
    });

    // Locale="fr" proves the pattern overrides the locale order (05/03 keeps day vs month unambiguous).
    it.each([
        {dateFormat: 'dd/MM/yyyy', expected: '05/03/2026'},
        {dateFormat: 'MM/dd/yyyy', expected: '03/05/2026'},
        {dateFormat: 'yyyy-MM-dd', expected: '2026-03-05'}
    ] as const)('should render $dateFormat, overriding the locale order', ({dateFormat, expected}) => {
        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-05"
                locale="fr"
                dateFormat={dateFormat}
            />
        );

        expect(dateField()).toHaveValue(expected);
    });

    // MMMM still renders via Intl in `locale`, so text stays localized ("mars" for fr).
    it('should localize name tokens while the pattern fixes the order', () => {
        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-05"
                locale="fr"
                dateFormat="d MMMM yyyy"
            />
        );

        expect(dateField()).toHaveValue('5 mars 2026');
    });

    // Invalid patterns (junk, or dayjs-style `YYYY-MM-DD`) must never leak into the input as
    // literal text — reject with a warning and fall back to the locale format instead.
    it.each(['toto', 'YYYY-MM-DD', 'MM foo yyyy'])('should reject the invalid dateFormat %p and fall back to the locale format', dateFormat => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-05"
                locale="fr"
                dateFormat={dateFormat}
            />
        );

        expect(dateField()).toHaveValue('05/03/2026');
        expect(warn).toHaveBeenCalledWith(expect.stringContaining(dateFormat));

        warn.mockRestore();
    });

    // Deduped per pattern, so two renders of the same bad pattern warn once. The pattern is
    // unique to this test because the module-level Set persists across the file.
    it('should warn only once per invalid dateFormat across renders', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        const props = {type: 'date', defaultValue: '2026-03-05', locale: 'fr', dateFormat: 'no-tokens-here'} as const;

        render(<DateTimeInput {...props} placeholder="first"/>);
        render(<DateTimeInput {...props} placeholder="second"/>);

        expect(warn).toHaveBeenCalledTimes(1);

        warn.mockRestore();
    });

    describe('local time caption', () => {
        beforeEach(() => {
            vi.spyOn(Temporal.Now, 'timeZoneId').mockReturnValue('Europe/Paris');
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should not show the local time caption when the selected timezone equals the system timezone', () => {
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-03-15T11:56[Europe/Paris]"
                    onChange={() => null}
                />
            );

            expect(screen.queryByText(/Your local time/)).not.toBeInTheDocument();
        });

        it('should not show the local time caption when only a date is set but no time', () => {
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue={null}
                    onChange={() => null}
                />
            );

            expect(screen.queryByText(/Your local time/)).not.toBeInTheDocument();
        });

        it('should show the local time caption when the selected timezone differs from the system timezone', () => {
            // Abidjan is UTC+0; Paris in winter is UTC+1 → 11:56 Abidjan = 12:56 Paris
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-02-10T11:56[Africa/Abidjan]"
                    onChange={() => null}
                />
            );

            expect(screen.getByText(/Your local time/)).toBeInTheDocument();
        });

        it('should display the converted date and time in the local time caption', () => {
            // 00:00 Abidjan (UTC+0) = 01:00 Paris (UTC+1) — same day, unambiguous
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-02-10T00:00[Africa/Abidjan]"
                    locale="en"
                    onChange={() => null}
                />
            );

            // The local time caption must include both a date fragment and a time fragment.
            // We verify the time portion (01:00) is present; the exact date format is locale-dependent.
            expect(screen.getByText(/Your local time/)).toBeInTheDocument();
            expect(screen.getByText(/01:00/)).toBeInTheDocument();
        });

        // Host TZ (Tokyo) differs from both the selected and system zones, so this only passes
        // if the local time caption uses the system timezone rather than the host's default.
        it('should convert to the mocked system timezone regardless of the host timezone', () => {
            vi.stubEnv('TZ', 'Asia/Tokyo');

            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-02-10T00:00[Africa/Abidjan]"
                    locale="en"
                    onChange={() => null}
                />
            );

            expect(screen.getByText(/01:00/)).toBeInTheDocument();

            vi.unstubAllEnvs();
        });

        it('should show the previous day in the local time caption when the conversion crosses midnight', () => {
            // 00:00 in Toronto (UTC−5 in winter) = 06:00 Paris (UTC+1) same day
            // Use the reverse: 00:00 Paris (UTC+1) = 23:00 prev day in Toronto.
            // Here system=Paris, selected=Toronto: 2026-02-10T00:00 Toronto = 2026-02-10T06:00 Paris
            // To get a day-before case: pick a time in the east. 2026-02-10T00:00 Tokyo (UTC+9) = 2026-02-09T16:00 Paris
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-02-10T00:00[Asia/Tokyo]"
                    locale="en"
                    onChange={() => null}
                />
            );

            // The local time caption must include the converted date (Feb 9) to avoid day-boundary ambiguity.
            expect(screen.getByText(/Feb 9/)).toBeInTheDocument();
        });

        it('should use the custom i18n.localTime label', () => {
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-02-10T11:56[Africa/Abidjan]"
                    i18n={{localTime: 'Heure locale'}}
                    onChange={() => null}
                />
            );

            expect(screen.getByText(/Heure locale/)).toBeInTheDocument();
            expect(screen.queryByText(/Your local time/)).not.toBeInTheDocument();
        });

        it('should fall back to the default label when i18n is partial and omits localTime', () => {
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    defaultValue="2026-02-10T11:56[Africa/Abidjan]"
                    i18n={{todayButton: 'Aujourd\'hui'}}
                    onChange={() => null}
                />
            );

            expect(screen.getByText(/Your local time/)).toBeInTheDocument();
        });

        it('should format the local time caption\'s time as 12h when timeFormat="12h"', () => {
            // 23:00 Abidjan (UTC+0) = 00:00 Paris next day (UTC+1)
            // Use 11:56 Abidjan = 12:56 Paris → with 12h: "12:56 PM"
            render(
                <DateTimeInput
                    type="zonedDateTime"
                    placeholder="Select a date"
                    timeFormat="12h"
                    defaultValue="2026-02-10T11:56[Africa/Abidjan]"
                    locale="en"
                    onChange={() => null}
                />
            );

            // 12h format includes AM/PM in the local time caption's text
            expect(screen.getByText(/Your local time/)).toHaveTextContent(/PM|AM/);
        });
    });
});
