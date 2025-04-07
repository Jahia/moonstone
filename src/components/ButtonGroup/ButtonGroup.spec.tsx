import React from 'react';
import {render, screen} from '@testing-library/react';
import {ButtonGroup} from './index';
import {Button} from '~/components/Button';

describe('ButtonGroup', () => {
    it('should render ButtonGroup', () => {
        render(
            <ButtonGroup>
                <Button label="One" onClick={() => null}/>
                <Button label="Two" onClick={() => null}/>
            </ButtonGroup>
        );
        expect(screen.queryByRole('group')).toBeInTheDocument();
    });

    it('should not render error', () => {
        // @ts-expect-error testing invalid children
        render(<ButtonGroup>test</ButtonGroup>);
        expect(screen.queryByRole('group')).toBeInTheDocument();
    });

    it('should display nothing when no children is provided', () => {
        // @ts-expect-error testing with no children
        render(<ButtonGroup/>);
        expect(screen.queryByRole('group')).not.toBeInTheDocument();
    });

    it('should display nothing when children is empty', () => {
        render(<ButtonGroup>{[]}</ButtonGroup>);
        expect(screen.queryByRole('group')).not.toBeInTheDocument();
    });

    it('should pass color variant to buttons', () => {
        render(
            <ButtonGroup color="accent">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>
        );
        expect(screen.getByRole('group').firstChild).toHaveClass('moonstone-button_accent');
        expect(screen.getByRole('group').lastChild).toHaveClass('moonstone-button_accent');
    });

    it('should pass size to buttons', () => {
        render(
            <ButtonGroup size="big">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>
        );
        expect(screen.getByRole('group').firstChild).toHaveClass('moonstone-button_big');
        expect(screen.getByRole('group').lastChild).toHaveClass('moonstone-button_big');
    });

    it('should add additional classname', () => {
        render(
            <ButtonGroup className="extra">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>
        );
        expect(screen.getByRole('group')).toHaveClass('extra');
    });

    it('should add additional attribute', () => {
        render(
            <ButtonGroup data-custom="extra">
                <Button label="One" onClick={() => null}/>
                <Button label="One" onClick={() => null}/>
            </ButtonGroup>
        );
        expect(screen.getByRole('group')).toHaveAttribute('data-custom', 'extra');
    });
});
