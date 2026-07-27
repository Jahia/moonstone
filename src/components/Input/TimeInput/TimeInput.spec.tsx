import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Temporal} from 'temporal-polyfill';
import {TimeInput} from './index';

const emittedTime = (handleChange: ReturnType<typeof vi.fn>) =>
    (handleChange.mock.lastCall?.[1] as Temporal.PlainTime | null)?.toString({smallestUnit: 'minute'}) ?? null;

describe('TimeInput', () => {
    it('should render empty when uncontrolled without a default value', () => {
        render(<TimeInput/>);

        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('');
    });

    it('should commit a typed time on blur', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '1430');
        expect(handleChange).not.toHaveBeenCalled();

        fireEvent.blur(input);
        expect(emittedTime(handleChange)).toBe('14:30');
    });

    it('should complete a partial entry on blur (1 -> 01:00)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '1');
        fireEvent.blur(input);

        expect(emittedTime(handleChange)).toBe('01:00');
        expect(input).toHaveValue('01:00');
    });

    it('should accept a Temporal.PlainTime default value', () => {
        render(<TimeInput defaultValue={Temporal.PlainTime.from('14:30')} onChange={() => null}/>);

        expect(screen.getByDisplayValue('14:30')).toBeInTheDocument();
    });

    it('should display a 12h default value with meridiem', () => {
        render(<TimeInput timeFormat="12h" defaultValue="14:30" onChange={() => null}/>);

        expect(screen.getByDisplayValue('02:30')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
    });

    it('should commit a 12h entry with the chosen meridiem', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput timeFormat="12h" onChange={handleChange}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM')); // Open the meridiem dropdown
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(emittedTime(handleChange)).toBe('14:30');
    });

    it('should treat a lone minute digit as its units (91 -> 09:01)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '91');
        fireEvent.blur(input);

        expect(emittedTime(handleChange)).toBe('09:01');
    });

    it('should not emit while typing, only on blur', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '0930');
        expect(handleChange).not.toHaveBeenCalled();

        fireEvent.blur(input);
        expect(emittedTime(handleChange)).toBe('09:30');
    });

    it('should emit null when the field is cleared and blurred', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput defaultValue="11:56" onChange={handleChange}/>);

        const input = screen.getByDisplayValue('11:56');
        await user.clear(input);
        fireEvent.blur(input);

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), null);
    });

    it('should keep a controlled value until the parent updates it', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput value="11:56" onChange={handleChange}/>);

        const input = screen.getByDisplayValue('11:56');
        await user.clear(input);
        await user.type(input, '0900');
        fireEvent.blur(input);

        expect(emittedTime(handleChange)).toBe('09:00');
        // Controlled: the parent didn't update `value`, so the field reverts to it.
        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
    });

    it('should auto-advance a leading hour digit greater than 2 in 24h mode (3 -> 03)', async () => {
        const user = userEvent.setup();

        render(<TimeInput onChange={() => null}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '3');

        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('03');
    });

    it('should auto-advance a leading hour digit greater than 1 in 12h mode (2 -> 02)', async () => {
        const user = userEvent.setup();

        render(<TimeInput timeFormat="12h" onChange={() => null}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '2');

        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('02');
    });

    it('should complete a lone minute digit as its units on blur (143 -> 14:03)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '143');
        fireEvent.blur(input);

        expect(emittedTime(handleChange)).toBe('14:03');
    });

    it('should commit a minute first digit greater than 5 as padded units (146 -> 14:06)', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '146');
        fireEvent.blur(input);

        expect(emittedTime(handleChange)).toBe('14:06');
    });

    it('should display midnight (00:00) as 12:00 AM in 12h mode', () => {
        render(<TimeInput timeFormat="12h" value={Temporal.PlainTime.from('00:00')} onChange={() => null}/>);

        expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
        expect(screen.getByText('AM')).toBeInTheDocument();
    });

    it('should display noon (12:00) as 12:00 PM in 12h mode', () => {
        render(<TimeInput timeFormat="12h" value={Temporal.PlainTime.from('12:00')} onChange={() => null}/>);

        expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
    });

    it('should emit midnight when 12 with AM is committed in 12h mode', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput timeFormat="12h" onChange={handleChange}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '1200');
        fireEvent.blur(screen.getByPlaceholderText('HH:MM'));

        expect(emittedTime(handleChange)).toBe('00:00');
    });

    it('should emit noon when 12 with PM is committed in 12h mode', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput timeFormat="12h" value={Temporal.PlainTime.from('14:30')} onChange={handleChange}/>);

        const input = screen.getByDisplayValue('02:30');
        await user.clear(input);
        await user.type(input, '1200');
        fireEvent.blur(input);

        expect(emittedTime(handleChange)).toBe('12:00');
    });

    describe('keyboard', () => {
        it('should seed midnight on the first ArrowUp of an empty field', async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<TimeInput onChange={handleChange}/>);

            const input = screen.getByPlaceholderText('HH:MM');
            input.focus();
            await user.keyboard('{ArrowUp}');

            expect(emittedTime(handleChange)).toBe('00:00');
        });

        it('should increment the hour segment with ArrowUp and wrap past 23', async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<TimeInput defaultValue="23:30" onChange={handleChange}/>);

            const input = screen.getByDisplayValue('23:30') as HTMLInputElement;
            input.focus();
            input.setSelectionRange(0, 0);
            await user.keyboard('{ArrowUp}');

            expect(emittedTime(handleChange)).toBe('00:30');
        });

        it('should increment the minute segment without carrying into the hour', async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<TimeInput defaultValue="14:59" onChange={handleChange}/>);

            const input = screen.getByDisplayValue('14:59') as HTMLInputElement;
            input.focus();
            input.setSelectionRange(4, 4);
            await user.keyboard('{ArrowUp}');

            expect(emittedTime(handleChange)).toBe('14:00');
        });

        it('should switch to the minute segment with ArrowRight before stepping', async () => {
            const user = userEvent.setup();
            const handleChange = vi.fn();

            render(<TimeInput defaultValue="14:30" onChange={handleChange}/>);

            const input = screen.getByDisplayValue('14:30') as HTMLInputElement;
            input.focus();
            input.setSelectionRange(0, 0);
            await user.keyboard('{ArrowRight}{ArrowDown}');

            expect(emittedTime(handleChange)).toBe('14:29');
        });
    });
});
