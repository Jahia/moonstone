import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Collapsible} from './index';

describe('Collapsible', () => {
    it('should display additional className', () => {
        render(<Collapsible data-testid="moonstone-collapsible" label="test" className="extra"/>);
        expect(screen.getByTestId('moonstone-collapsible')).toHaveClass('extra');
    });
});

describe('UncontrolledCollapsible', () => {
    it('should be collapsed by default', () => {
        render(<Collapsible label="test"/>);
        expect(screen.getByRole('button', {expanded: false})).toBeInTheDocument();
    });
    it('should be expanded when isDefaultExpanded is set to true', () => {
        render(<Collapsible isDefaultExpanded label="test"/>);
        expect(screen.getByRole('button', {expanded: true})).toBeInTheDocument();
    });

    it('should be collpased when I click on it when it is expanded', () => {
        render(<Collapsible isDefaultExpanded label="test"/>);
        const collapsibleButton = screen.getByRole('button');
        userEvent.click(collapsibleButton);
        expect(screen.getByRole('button', {expanded: false})).toBeInTheDocument();
    });

    it('should be collapsed when isDefaultExpanded is set to false', () => {
        render(<Collapsible isDefaultExpanded={false} label="test"/>);
        expect(screen.getByRole('button', {expanded: false})).toBeInTheDocument();
    });

    it('should be expanded when I click on it when it is collapsed', () => {
        render(<Collapsible isDefaultExpanded={false} label="test"/>);
        const collapsibleButton = screen.getByRole('button');
        userEvent.click(collapsibleButton);
        expect(screen.getByRole('button', {expanded: true})).toBeInTheDocument();
    });

    it('should call the onClick function', () => {
        const onClick = jest.fn();
        render(<Collapsible label="test" onClick={onClick}/>);
        userEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalled();
    });
});

describe('ControlledCollapsible', () => {
    it('should be collapsed by default', () => {
        render(<Collapsible label="test"/>);
        expect(screen.getByRole('button', {expanded: false})).toBeInTheDocument();
    });

    it('should be expanded when isExpanded is set to true', () => {
        render(<Collapsible isExpanded label="test"/>);
        expect(screen.getByRole('button', {expanded: true})).toBeInTheDocument();
    });

    it('should be collapsed when isExpanded is set to false', () => {
        render(<Collapsible isExpanded={false} label="test"/>);
        expect(screen.getByRole('button', {expanded: false})).toBeInTheDocument();
    });

    it('should call the onClick function', () => {
        const onClick = jest.fn();
        render(<Collapsible isExpanded label="test" onClick={onClick}/>);
        userEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalled();
    });
});

