import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {FieldSelector} from './index';
import {Button} from '~/components';
import {Add, Love} from '~/icons';

describe('FieldSelector', () => {
    it('should display additional class names', () => {
        render(
            <FieldSelector
                data-testid="field-selector"
                className="extra"
                selector={<textarea placeholder="Input value"/>}
            />
        );
        expect(screen.getByTestId('field-selector')).toHaveClass('extra');
    });

    it('should display the selector', () => {
        render(<FieldSelector selector={<textarea value="Input value"/>}/>);
        expect(screen.queryByText('Input value')).toBeInTheDocument();
    });

    it('should display the button', () => {
        render(
            <FieldSelector
                buttons={<Button label="Click me"/>}
                selector={<textarea value="Input value"/>}
            />
        );
        expect(screen.queryByText('Click me')).toBeInTheDocument();
    });

    it('should display multiple buttons', () => {
        render(
            <FieldSelector
                buttons={
                    <>
                        <Button icon={<Add/>} label="Click me"/>
                        <Button icon={<Love/>} label="Click me"/>
                    </>
                }
                selector={<textarea value="Input value"/>}
            />
        );
        expect(screen.queryAllByText('Click me')).toHaveLength(2);
    });

    it('should display the dragIcon', () => {
        const {container} = render(
            <FieldSelector
                isDraggable
                selector={<textarea placeholder="Input value"/>}
            />
        );
        expect(
            container.querySelector('div.moonstone-cardSelector_dragIcon')
        ).toBeInTheDocument();
    });

    it('should call onClick when button is clicked', async () => {
        const onClick = vi.fn();
        render(
            <FieldSelector
                buttons={<Button data-testid="testButton" label="Click me" onClick={onClick}/>}
                selector={<textarea placeholder="Input value"/>}
            />
        );
        await userEvent.click(
            screen.getByTestId('testButton')
        );
        expect(onClick).toHaveBeenCalled();
    });
});
