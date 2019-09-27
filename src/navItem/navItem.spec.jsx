import React from 'react'
import { shallow } from 'component-test-utils-react'
import { NavItem } from './index'

describe('NavItem', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<NavItem>Content children</NavItem>)
        expect(wrapper.html()).toContain('Content children')
    })

    it('should add extra props ', () => {
        const wrapper = shallow(
            <NavItem onClick={() => {}}>Content children</NavItem>
        )
        expect(wrapper.html()).toContain('onClick')
    })

    it('should add extra className ', () => {
        const wrapper = shallow(
            <NavItem className='yoloooo'>Content children</NavItem>
        )
        expect(wrapper.props.className).toContain('yoloooo')
    })

    it('should display the icon', () => {
        const Icon = () => <svg />
        const wrapper = shallow(
            <NavItem icon={<Icon />}>Content children</NavItem>
        )

        expect(wrapper.html()).toContain('Icon')
    })

    it('should set selected the item when give selected property', () => {
        const Icon = () => <svg />
        const wrapper = shallow(
            <NavItem selected icon={<Icon />}>
                Content children
            </NavItem>
        )

        expect(wrapper.html()).toContain('navItem_selected')
    })

    it('should not set selected the item when not giving selected property', () => {
        const Icon = () => <svg />
        const wrapper = shallow(
            <NavItem icon={<Icon />}>Content children</NavItem>
        )

        expect(wrapper.html()).not.toContain('navItem_selected')
    })
})
