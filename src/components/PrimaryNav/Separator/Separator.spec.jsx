import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Separator} from './Separator';
import {PrimaryNavContext} from '../index';

describe('Separator', () => {
    it('should show expended image when it\'s expended', () => {
        const wrapper = shallow(<Separator/>, {
            externals: {
                contexts: [{
                    id: PrimaryNavContext,
                    value: {
                        isExpanded: true
                    }
                }]
            }
        });

        expect(wrapper.querySelector('svg').props.width).toBe('300');
    });

    it('should show unexpended image when it\'s not expended', () => {
        const wrapper = shallow(<Separator/>, {
            externals: {
                contexts: [{
                    id: PrimaryNavContext,
                    value: {
                        isExpanded: false
                    }
                }]
            }
        });
        expect(wrapper.querySelector('svg').props.width).toBe('56');
    });
});
