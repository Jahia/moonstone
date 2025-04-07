import {render, screen} from '@testing-library/react';
import {RadioItem} from './index';
import {RadioGroup} from '../RadioGroup';

describe('radio', () => {
    it('should display additional class names', () => {
        const className = 'test';
        const {container} = render(
            <RadioGroup name="test-name">
                <RadioItem id="radio-01" label="radio 01" value="01" className={className}/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(container.querySelector('.test')).toBeInTheDocument();
    });

    it('should be disabled when isDisabled is set', () => {
        render(
            <RadioGroup name="test-name">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem isDisabled id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>);
        expect(screen.getByDisplayValue('02')).toBeDisabled();
    });

    it('should be read-only when isReadOnly is set', () => {
        render(
            <RadioGroup name="test-name">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem isReadOnly id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>);
        expect(screen.getByDisplayValue('02')).toHaveAttribute('aria-readonly', 'true');
    });

    it('should display the description', () => {
        render(
            <RadioGroup name="test-name">
                <RadioItem id="radio-01" label="radio 01" value="01" description="radio description"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>);
        expect(screen.getByText('radio description')).toBeInTheDocument();
    });
});
