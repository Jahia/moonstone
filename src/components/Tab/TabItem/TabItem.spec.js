import React from 'react';
import {render, screen} from '@testing-library/react';
import {TabItem} from './index';
import {tabItemSizes} from './TabItem.types';
import {Love} from '~/icons';

describe('TabItem', () => {
    it('should render', () => {
        render(<TabItem/>);
        expect(screen.getByRole('button')).toHaveClass('moonstone-tab-item');
    });

    it('should have the specified label', () => {
        render(<TabItem label="TabItem Toto"/>);
        expect(screen.queryByText('TabItem Toto')).toBeInTheDocument();
    });

    it('should use label variant heading & weight light on size big', () => {
        render(<TabItem label="TabItem Toto" size="big"/>);
        expect(screen.getByText('TabItem Toto')).toHaveClass('moonstone-variant_heading');
        expect(screen.getByText('TabItem Toto')).toHaveClass('moonstone-weight_light');
    });

    it('should display the icon', () => {
        render(<TabItem icon={<Love data-testid="svg"/>}/>);
        expect(screen.queryByTestId('svg')).toBeInTheDocument();
    });

    it('should display the icon at default size on size big', () => {
        render(<TabItem size="big" icon={<Love data-testid="svg"/>}/>);
        expect(screen.queryByTestId('svg')).toHaveClass('moonstone-icon_default');
    });

    it('should have the specified label and an icon', () => {
        render(<TabItem label="TabItem Toto" icon={<Love data-testid="svg"/>}/>);
        expect(screen.queryByText('TabItem Toto')).toBeInTheDocument();
        expect(screen.queryByTestId('svg')).toBeInTheDocument();
    });

    it('should use the variant ghost by default', () => {
        render(<TabItem data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-variant_ghost');
    });

    it('should use the specified variant', () => {
        render(<TabItem data-testid="tab-item" variant="outlined"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-variant_outlined');
    });

    it('should use the reverse mode', () => {
        render(<TabItem isReversed data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-reverse');
    });

    it('should be disabled', () => {
        render(<TabItem isDisabled data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).toHaveAttribute('disabled');
    });

    it('should be selected', () => {
        render(<TabItem isSelected data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-selected');
    });

    it('should not be selected', () => {
        render(<TabItem isSelected={false} data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).not.toHaveClass('moonstone-selected');
    });

    it('should use the color default', () => {
        render(<TabItem data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-color_default');
    });

    it('should use the specified color', () => {
        render(<TabItem data-testid="tab-item" color="accent"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-color_accent');
    });

    it('should use the default size', () => {
        render(<TabItem data-testid="tab-item"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('moonstone-size_default');
    });

    test.each(tabItemSizes)('should use the specified size', size => {
        render(<TabItem data-testid="tab-item" size={size}/>);
        expect(screen.getByTestId('tab-item')).toHaveClass(`moonstone-size_${size}`);
    });

    it('should have extra attribute', () => {
        render(<TabItem data-testid="tab-item" data-custom="extra"/>);
        expect(screen.getByTestId('tab-item')).toHaveAttribute('data-custom', 'extra');
    });

    it('should have extra className', () => {
        render(<TabItem data-testid="tab-item" className="extra"/>);
        expect(screen.getByTestId('tab-item')).toHaveClass('extra');
    });
});
