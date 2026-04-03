import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {DateTimeInput} from './index';
import {formatDateDisplayValue, formatDateString} from '../shared';

const nextMonthLabel = 'Next month';
const previousMonthLabel = 'Previous month';
const march2026 = 'March 2026';
const april2026 = 'April 2026';
const july2026 = 'July 2026';

describe('DateTimeInput', () => {
    it('should open the calendar and select today', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                value={{date: null}}
                placeholder="Select a date"
                labels={{today: 'Today'}}
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));
        await user.click(screen.getByText('Today'));

        const expectedDate = formatDateString(new Date());
        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({date: expectedDate})
        );
    });

    it('should disable the today shortcut when today is configured as unavailable', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        const today = new Date();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                disabledDates={[today]}
                labels={{today: 'Today'}}
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));

        expect(screen.getByRole('button', {name: 'Today'})).toBeDisabled();
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should default to the current date and time when uncontrolled', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 2, 31, 11, 56, 0));

        try {
            render(
                <DateTimeInput
                    type="datetime"
                    labels={{today: 'Today', timezone: 'Timezone'}}
                />
            );

            expect(screen.getByDisplayValue(formatDateDisplayValue('2026-03-31'))).toBeInTheDocument();
            expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        } finally {
            vi.useRealTimers();
        }
    });

    it('should render the 24h datetime layout and trigger timezone changes', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                value={{date: '2026-02-10', time: '11:56', timezone: 'Europe/Paris'}}
                labels={{today: 'Today', timezone: 'Timezone'}}
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue(formatDateDisplayValue('2026-02-10'))).toBeInTheDocument();
        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        await user.click(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'}));
        await user.type(screen.getByRole('searchbox'), 'toronto');
        await user.click(screen.getByText('Toronto (UTC -05:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({timezone: 'America/Toronto'})
        );
    });

    it('should render the 12h datetime layout with meridiem and timezone', () => {
        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                timeFormat="12h"
                value={{date: '2026-02-10', time: '23:56', timezone: 'Europe/Paris'}}
                labels={{today: 'Today', timezone: 'Timezone'}}
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

        render(
            <DateTimeInput
                type="datetime"
                timeFormat="12h"
                value={{date: '2026-02-10', time: '02:30'}}
                labels={{today: 'Today', meridiem: 'Meridiem'}}
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('02:30'));
        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM'));
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({time: '14:30'})
        );
    });

    it('should disable configured dates in the calendar', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                value={{date: '2026-03-30'}}
                disabledDates={[new Date(2026, 2, 30)]}
                labels={{today: 'Today'}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue('2026-03-30')));

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '30');
        expect(dayButton).toBeDisabled();
    });

    it('should let the user navigate to the next month without snapping back', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                value={{date: '2026-03-30'}}
                locale="en-US"
                labels={{today: 'Today', nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue('2026-03-30', 'en-US')));
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));

        expect(screen.getByText(april2026)).toBeInTheDocument();
    });

    it('should keep the last visited month when reopening the calendar', async () => {
        const user = userEvent.setup();
        const {container} = render(
            <DateTimeInput
                type="date"
                value={{date: '2026-03-30'}}
                locale="en-US"
                labels={{today: 'Today', nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        const input = screen.getByDisplayValue(formatDateDisplayValue('2026-03-30', 'en-US'));

        await user.click(input);
        expect(screen.getByText(march2026)).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        expect(screen.getByText(april2026)).toBeInTheDocument();

        const overlay = container.querySelector('.moonstone-menu_overlay');
        expect(overlay).toBeInTheDocument();
        await user.click(overlay as HTMLElement);

        await user.click(input);
        expect(screen.getByText(april2026)).toBeInTheDocument();
    });

    it('should recenter on a new controlled value date when it changes externally', async () => {
        const user = userEvent.setup();
        const {rerender} = render(
            <DateTimeInput
                type="date"
                value={{date: '2026-03-30'}}
                locale="en-US"
                labels={{today: 'Today', nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue('2026-03-30', 'en-US')));
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        expect(screen.getByText(april2026)).toBeInTheDocument();

        rerender(
            <DateTimeInput
                type="date"
                value={{date: '2026-07-15'}}
                locale="en-US"
                labels={{today: 'Today', nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        expect(screen.getByText(july2026)).toBeInTheDocument();
    });

    it('should refresh the timezone utc offset when the selected date changes', () => {
        const {rerender} = render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                value={{date: '2026-01-15', time: '11:56', timezone: 'Europe/Paris'}}
                labels={{today: 'Today', timezone: 'Timezone'}}
                onChange={() => null}
            />
        );

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        rerender(
            <DateTimeInput
                hasTimezone
                type="datetime"
                value={{date: '2026-07-15', time: '11:56', timezone: 'Europe/Paris'}}
                labels={{today: 'Today', timezone: 'Timezone'}}
                onChange={() => null}
            />
        );

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +02:00)'})).toBeInTheDocument();
    });

    it('should not display an invalid canonical date', () => {
        render(
            <DateTimeInput
                type="date"
                value={{date: '2026-02-30'}}
                placeholder="Select a date"
                labels={{today: 'Today'}}
                onChange={() => null}
            />
        );

        expect(screen.getByPlaceholderText('Select a date')).toHaveValue('');
    });
});
