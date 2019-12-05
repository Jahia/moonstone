import React from 'react';
import {shallow} from 'component-test-utils-react';
import TestRenderer from 'react-test-renderer';
import {Accordion} from '~/components/Accordion';
import {AccordionItem} from './index';

describe('AccordionItem', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <Accordion>
                <AccordionItem
                    id="007"
                    label="my label label"
                >
                    content here
                </AccordionItem>
            </Accordion>
        );

        expect(wrapper.html()).toContain('content here');
    });

    it('should display label', () => {
        const wrapper = shallow(
            <Accordion>
                <AccordionItem
                    id="007"
                    label="my label label"
                >
                    content here
                </AccordionItem>
            </Accordion>
        );

        expect(wrapper.html()).toContain('my label label');
    });

    it('should display the icon', () => {
        const Icon = () => <svg/>;
        const testRenderer = TestRenderer.create(
            <Accordion>
                <AccordionItem
                    id="007"
                    label="my label label"
                    icon={<Icon/>}
                >
                    content here
                </AccordionItem>
            </Accordion>
        );
        expect(testRenderer.root.findByType(Icon));
    });
});
