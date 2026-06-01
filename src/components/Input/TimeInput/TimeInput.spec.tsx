import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TimeInput} from './index';

describe('TimeInput', () => {
    it('should render empty when uncontrolled without a default value', () => {
        render(<TimeInput/>);

        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('');
    });

    it('should call onChange with a canonical 24h value', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput defaultValue={null} onChange={handleChange}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '1430');

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), '14:30');
    });

    it('should display a default time format placeholder', () => {
        render(<TimeInput defaultValue={null} onChange={() => null}/>);

        expect(screen.getByPlaceholderText('HH:MM')).toBeInTheDocument();
    });

    it('should let consumers override the time placeholder', () => {
        render(<TimeInput defaultValue={null} placeholder="Enter time" onChange={() => null}/>);

        expect(screen.getByPlaceholderText('Enter time')).toBeInTheDocument();
    });

    it('should display a canonical value in 12h mode', () => {
        render(<TimeInput timeFormat="12h" defaultValue="14:30" onChange={() => null}/>);

        expect(screen.getByDisplayValue('02:30')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
    });

    it('should parse a 12h display value and keep canonical output', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput timeFormat="12h" defaultValue={null} onChange={handleChange}/>);

        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM'));
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), '14:30');
    });

    it('should display midnight correctly in 12h mode', () => {
        render(<TimeInput timeFormat="12h" defaultValue="00:00" onChange={() => null}/>);

        expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
        expect(screen.getByText('AM')).toBeInTheDocument();
    });

    it('should display noon correctly in 12h mode', () => {
        render(<TimeInput timeFormat="12h" defaultValue="12:00" onChange={() => null}/>);

        expect(screen.getByDisplayValue('12:00')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
    });

    it('should ignore impossible 24h values while typing', async () => {
        const user = userEvent.setup();

        render(<TimeInput defaultValue="11:56" onChange={() => null}/>);

        const input = screen.getByDisplayValue('11:56');
        await user.click(input);
        await user.keyboard('{Control>}a{/Control}{Backspace}');
        await user.type(input, '2897');

        expect(screen.getByDisplayValue('2')).toBeInTheDocument();
        expect(screen.queryByDisplayValue('28:97')).not.toBeInTheDocument();
    });

    it('should keep the partial value when deleting', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimeInput defaultValue="11:56" onChange={handleChange}/>);

        await user.click(screen.getByDisplayValue('11:56'));
        await user.keyboard('{End}{Backspace}');

        expect(screen.getByDisplayValue('11:5')).toBeInTheDocument();
        expect(handleChange).not.toHaveBeenCalled();
    });
});
