import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TimeInput} from './index';

describe('TimeInput', () => {
    it('should default to the current time when uncontrolled', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 2, 31, 11, 56, 0));

        try {
            render(<TimeInput labels={{hours: 'Hours', minutes: 'Minutes'}}/>);

            expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        } finally {
            vi.useRealTimers();
        }
    });

    it('should call onChange with a canonical 24h value', () => {
        const handleChange = vi.fn();

        render(<TimeInput onChange={handleChange}/>);

        fireEvent.change(screen.getByPlaceholderText('HH:MM'), {target: {value: '1430'}});

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), '14:30');
    });

    it('should display a canonical value in 12h mode', () => {
        render(<TimeInput timeFormat="12h" value="14:30" onChange={() => null}/>);

        expect(screen.getByDisplayValue('02:30')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
    });

    it('should parse a 12h display value and keep canonical output', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput timeFormat="12h" value={null} onChange={handleChange}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM'));
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), '14:30');
    });

    it('should display midnight and noon correctly in 12h mode', () => {
        const {rerender} = render(<TimeInput timeFormat="12h" value="00:00" onChange={() => null}/>);

        expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
        expect(screen.getByText('AM')).toBeInTheDocument();

        rerender(<TimeInput timeFormat="12h" value="12:00" onChange={() => null}/>);

        expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
    });

    it('should ignore impossible 24h values while typing', () => {
        render(<TimeInput value="11:56" onChange={() => null}/>);

        fireEvent.change(screen.getByDisplayValue('11:56'), {target: {value: '2897'}});

        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        expect(screen.queryByDisplayValue('28:97')).not.toBeInTheDocument();
    });
});
