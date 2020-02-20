import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ControlledTreeView} from './ControlledTreeView';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import Love from '~/src/asset/Love.svg';
import Cloud from '~/src/asset/Cloud.svg';
import ChevronDown from '~/src/asset/ChevronDown.svg';
import ChevronRight from '~/src/asset/ChevronRight.svg';

const tree = [
    {
        id: 'A',
        label: 'A level1',
        iconStart: 'https://image.flaticon.com/icons/svg/1973/1973617.svg',
        iconEnd: <Cloud/>,
        children: [
            {id: 'A1', label: 'A-1 level2', icon: <Love/>}
        ]
    }
];

describe('TreeView', () => {
    it('should display TreeView', () => {
        const wrapper = shallow(<ControlledTreeView data={tree}/>);
        expect(wrapper.html());
    });

    it('should not display icon for items without children', () => {
        const wrapper = shallow(<ControlledTreeView data={[{id: 'A', label: 'A level1'}]}/>);
        expect(wrapper.querySelector('.treeView_itemToggle svg')).toHaveProperty('nodeNotExistError');
    });

    it('should open node set in openItems', () => {
        const wrapper = shallow(<ControlledTreeView data={tree} openedItems={['A']}/>);

        expect(wrapper.html()).toContain('A-1 level2');
    });

    it('should display ChevronRight when node is closed', () => {
        const wrapper = shallow(<ControlledTreeView data={tree}/>);

        expect(wrapper.html()).toContain(<ChevronRight/>);
    });

    it('should display ChevronDown when node is opened', () => {
        const wrapper = shallow(<ControlledTreeView data={tree} openedItems={['A']}/>);

        expect(wrapper.html()).toContain(<ChevronDown/>);
    });

    it('should open a node by clicking on arrow icon', () => {
        const wrapper = shallow(
            <UncontrolledTreeView data={tree}/>, {mocks: {ControlledTreeView: true}}
        );

        wrapper.querySelector('.treeView_itemToggle').dispatchEvent('click');
        expect(wrapper.html()).toContain('A-1 level2');
    });

    it('should display icon provide by an external source', () => {
        const wrapper = shallow(
            <ControlledTreeView data={tree}/>
        );

        expect(wrapper.html()).toContain('https://image.flaticon.com/icons/svg/1973/1973617.svg');
    });

    it('should display icon provide by moonstone', () => {
        const wrapper = shallow(
            <ControlledTreeView data={tree}/>
        );

        expect(wrapper.html()).toContain(<Love/>);
    });

    it('should display end icon of treeView_item', () => {
        const wrapper = shallow(
            <ControlledTreeView data={tree}/>
        );

        expect(wrapper.html()).toContain(<Cloud/>);
    });

    it('should display loading icon if node is loading', () => {
        const wrapper = shallow(
            <ControlledTreeView data={[{...tree[0], isLoading: true}]}/>
        );

        expect(wrapper.html()).toContain('moonstone-icon_isLoading');
    });

    it('should not display iconEnd if node is loading', () => {
        const wrapper = shallow(
            <ControlledTreeView data={[{...tree[0], isLoading: true, iconEnd: 'fakeURL'}]}/>
        );

        expect(wrapper.html()).not.toContain('fakeURL');
    });

    it('should add specific class if TreeView is reversed', () => {
        const wrapper = shallow(
            <ControlledTreeView isReversed data={tree}/>
        );

        expect(wrapper.html()).toContain('reversed');
    });

    it('should add specific class if a node is selected', () => {
        const wrapper = shallow(
            <ControlledTreeView isReversed data={tree} selectedItems={['A']}/>
        );

        expect(wrapper.html()).toContain('selected');
    });

    it('should not throw error when there is no onDoubleClick defined', () => {
        const wrapper = shallow(
            <ControlledTreeView data={tree}/>
        );

        // No error should occur when there is no onDoubleClick defined
        wrapper.querySelector('.treeView_itemLabel').dispatchEvent('doubleClick');
    });

    it('should call onDoubleClick when double click on an item', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(
            <ControlledTreeView data={tree} onDoubleClickItem={clickHandler}/>
        );

        wrapper.querySelector('.treeView_itemLabel').dispatchEvent('doubleClick');

        expect(clickHandler).toHaveBeenCalled();
    });

    it('should not throw error when there is no onClick defined', () => {
        const wrapper = shallow(
            <ControlledTreeView data={tree}/>
        );

        // No error should occur when there is no onClick defined
        wrapper.querySelector('.treeView_itemLabel').dispatchEvent('click');
    });

    it('should call onClick when clicking on label', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(
            <ControlledTreeView data={tree} onClickItem={clickHandler}/>
        );
        wrapper.querySelector('.treeView_itemLabel').dispatchEvent('click');
        expect(clickHandler).toHaveBeenCalled();
    });

    it('should call onClickToOpen when the node opens', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(
            <ControlledTreeView data={tree} onOpenItem={clickHandler}/>
        );

        wrapper.querySelector('.treeView_itemToggle').dispatchEvent('click');

        expect(clickHandler).toHaveBeenCalled();
    });

    it('should not call onClickToOpen when the node closes', () => {
        const clickHandler = jest.fn();
        const openedItems = ['A'];

        const wrapper = shallow(
            <ControlledTreeView data={tree} openedItems={openedItems} onOpenItem={clickHandler}/>
        );

        wrapper.querySelector('.treeView_itemToggle').dispatchEvent('click');

        expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(
            <ControlledTreeView data-custom="test" data={tree}/>
        );
        expect(wrapper.html()).toContain('data-custom="test"');
    });
});
