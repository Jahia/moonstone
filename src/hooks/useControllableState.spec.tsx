import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useControllableState } from './useControllableState';

describe('useControllableState', () => {
    type HarnessProps = {
        readonly value?: string;
        readonly onChange?: (value: string) => void;
    };

    const Harness = ({ value, onChange }: HarnessProps) => {
        const [current, setCurrent] = useControllableState({ value, defaultValue: 'first', onChange, name: 'Harness value' });
        return <button type="button" onClick={() => setCurrent('next')}>{current}</button>;
    };

    it('starts on the default value and owns the state in the uncontrolled form', async () => {
        const onChange = vi.fn();
        render(<Harness onChange={onChange}/>);
        expect(screen.getByRole('button')).toHaveTextContent('first');
        await userEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveTextContent('next');
        expect(onChange).toHaveBeenCalledWith('next');
    });

    it('shows the value and only reports a change in the controlled form', async () => {
        const onChange = vi.fn();
        render(<Harness value="owned" onChange={onChange}/>);
        await userEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveTextContent('owned');
        expect(onChange).toHaveBeenCalledWith('next');
    });

    it('warns when the component changes from one form to the other', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        const { rerender } = render(<Harness/>);
        expect(warn).not.toHaveBeenCalled();
        rerender(<Harness value="owned"/>);
        expect(warn).toHaveBeenCalledWith('Harness value changes from uncontrolled to controlled. Keep one form for the life of the component');
        warn.mockRestore();
    });
});
