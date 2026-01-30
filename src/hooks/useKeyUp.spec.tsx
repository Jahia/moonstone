import {useState} from 'react';
import {useKeyUp} from './useKeyUp'; // Assuming the hook is renamed
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('useKeyUp', () => {
  type KeyUpDivProps = {
    isDisabled?: boolean;
  };

  const KeyUpDiv = ({isDisabled = false}: KeyUpDivProps) => {
      const [label, setLabel] = useState('default');
      return (
          <div
        data-testid="keyup-div"
        aria-disabled={isDisabled}
        {...useKeyUp({
          onKeyUp: () => setLabel('key pressed'),
          disabled: isDisabled
        })}
          >
              {label}
          </div>
      );
  };

  it('should call onKeyUp when spacebar is pressed', async () => {
      const user = userEvent.setup();
      render(<KeyUpDiv/>);
      await user.keyboard('[Tab]');
      await user.keyboard('[Space]');
      expect(screen.queryByText('key pressed')).toBeInTheDocument();
  });

  it('should call onKeyUp when enter key is pressed', async () => {
      const user = userEvent.setup();
      render(<KeyUpDiv/>);
      await user.keyboard('[Tab]');
      await user.keyboard('[Enter]');
      expect(screen.queryByText('key pressed')).toBeInTheDocument();
  });

  it('should add role button', () => {
      render(<KeyUpDiv/>);
      expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not call onKeyUp when disabled', async () => {
      const user = userEvent.setup();
      render(<KeyUpDiv isDisabled/>);
      await user.keyboard('[Tab]');
      await user.keyboard('[Enter]');
      expect(screen.queryByText('default')).toBeInTheDocument();
  });
});
