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

    it('should keep the longest valid prefix while typing', async () => {
        const user = userEvent.setup();

        render(<TimeInput onChange={() => null}/>);

        const input = screen.getByPlaceholderText('HH:MM');
        await user.type(input, '2897');

        expect(input).toHaveValue('2');
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
});
