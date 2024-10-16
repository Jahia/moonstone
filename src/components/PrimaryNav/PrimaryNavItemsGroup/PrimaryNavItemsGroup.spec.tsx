import React from 'react';
import {render, screen} from '@testing-library/react';
import {PrimaryNavItemsGroup} from './index';

describe('PrimaryNavItemsGroup', () => {
    it('should render nothing when it\'s not expanded', () => {
        render(
            <PrimaryNavItemsGroup data-testid="primaryNav-itemsGroup" isDisplayedWhenCollapsed={false}>
                <span>First child</span>
                <span>Second child</span>
            </PrimaryNavItemsGroup>);
        expect(screen.queryByTestId('primaryNav-itemsGroup')).not.toBeInTheDocument();
    });

    it('should render something when it\'s expanded but not isDisplayedWhenCollapsed', () => {
        render(
            <PrimaryNavItemsGroup data-testid="primaryNav-itemsGroup">
                <span>First child</span>
                <span>Second child</span>
            </PrimaryNavItemsGroup>);
        expect(screen.queryByTestId('primaryNav-itemsGroup')).toBeInTheDocument();
    });

    it('should render something when it\'s expanded and isDisplayedWhenCollapsed', () => {
        render(
            <PrimaryNavItemsGroup isDisplayedWhenCollapsed data-testid="primaryNav-itemsGroup">
                <span>First child</span>
                <span>Second child</span>
            </PrimaryNavItemsGroup>);
        expect(screen.queryByTestId('primaryNav-itemsGroup')).toBeInTheDocument();
    });

    it('should render children when it\'s expanded and isDisplayedWhenCollapsed', () => {
        render(
            <PrimaryNavItemsGroup>
                <span>First child</span>
                <span>Second child</span>
            </PrimaryNavItemsGroup>);
        expect(screen.queryByText('First child')).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(
            <PrimaryNavItemsGroup data-testid="primaryNav-itemsGroup" data-custom="extra">
                <span>First child</span>
                <span>Second child</span>
            </PrimaryNavItemsGroup>);
        expect(screen.getByTestId('primaryNav-itemsGroup')).toHaveAttribute('data-custom', 'extra');
    });
});
