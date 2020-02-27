import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ButtonGroup} from './index';
import {Button} from '~/components/Button';

describe('ButtonGroup', () => {
    it('should render ButtonGroup', () => {
        const buttonGroup = shallow(
            <ButtonGroup>
                <Button label="One" onClick={() => {}}/>
                <Button label="Two" onClick={() => {}}/>
            </ButtonGroup>
        );
        expect(buttonGroup.html());
    });

    it('should no render error', () => {
        const buttonGroup = shallow(
            <ButtonGroup>
                test
            </ButtonGroup>
        );
        expect(buttonGroup.html());
    });

    it('should pass color variant to buttons', () => {
        const buttonGroup = shallow(
            <ButtonGroup color="accent">
                <Button label="One" onClick={() => {}}/>
                <Button label="One" onClick={() => {}}/>
            </ButtonGroup>
        );
        expect(buttonGroup.html()).toContain('accent');
    });

    it('should pass size to buttons', () => {
        const buttonGroup = shallow(
            <ButtonGroup size="big">
                <Button label="One" onClick={() => {}}/>
                <Button label="One" onClick={() => {}}/>
            </ButtonGroup>
        );

        expect(buttonGroup.html()).toContain('big');
    });

    it('should add additional classname', () => {
        const buttonGroup = shallow(
            <ButtonGroup className="test">
                <Button label="One" onClick={() => {}}/>
                <Button label="One" onClick={() => {}}/>
            </ButtonGroup>
        );
        expect(buttonGroup.querySelector('.test').exists()).toBeTruthy();
    });

    it('should add additional attribute', () => {
        const buttonGroup = shallow(
            <ButtonGroup data-custom="test">
                <Button label="One" onClick={() => {}}/>
                <Button label="One" onClick={() => {}}/>
            </ButtonGroup>
        );
        expect(buttonGroup.querySelector('[data-custom="test"]').exists()).toBeTruthy();
    });
});
