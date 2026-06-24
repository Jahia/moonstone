import {fireEvent, render, screen} from '@testing-library/react';
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
const lastValue = (handleChange: ReturnType<typeof vi.fn>) => handleChange.mock.lastCall?.[1];
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
        fireEvent.blur(timeInput);

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
        fireEvent.blur(timeInput);

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(lastValue(handleChange).toString()).toBe('2026-02-10T14:25:00');
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

    it('should keep the last visited month when reopening the calendar', async () => {
        const user = userEvent.setup();
        const {container} = render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                defaultValue="2026-03-30"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(dateField());
        expect(screen.getByText(march2026)).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        expect(screen.getByText(april2026)).toBeInTheDocument();

        const overlay = container.querySelector('[aria-hidden="true"]');
        expect(overlay).toBeInTheDocument();
        fireEvent.click(overlay as HTMLElement);

        await user.click(dateField());
        expect(screen.getByText(march2026)).toBeInTheDocument();
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
        await user.click(screen.getByText('15'));

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
});
