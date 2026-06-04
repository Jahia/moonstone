import React from 'react';
import {render, act} from '@testing-library/react';
import {usePositioning} from './usePositioning';

const defaultAnchorElOrigin = {horizontal: 'left' as const, vertical: 'bottom' as const};
const defaultTransformElOrigin = {horizontal: 'left' as const, vertical: 'top' as const};
const defaultAnchorPosition = {top: 0, left: 0};

type TestComponentProps = {
    readonly isDisplayed: boolean;
    readonly anchorEl: React.RefObject<HTMLElement>;
};

const TestComponent = ({isDisplayed, anchorEl}: TestComponentProps) => {
    const [style, menuRef] = usePositioning(
        isDisplayed,
        defaultAnchorPosition,
        anchorEl as React.MutableRefObject<HTMLElement>,
        defaultAnchorElOrigin,
        defaultTransformElOrigin,
        'fixed'
    );
    return <div ref={menuRef} style={style as React.CSSProperties} data-testid="menu"/>;
};

describe('usePositioning - ResizeObserver', () => {
    let observeMock: ReturnType<typeof vi.fn>;
    let disconnectMock: ReturnType<typeof vi.fn>;
    let capturedResizeCallback: ResizeObserverCallback | null;

    beforeEach(() => {
        observeMock = vi.fn();
        disconnectMock = vi.fn();
        capturedResizeCallback = null;

        // Vi.fn().mockImplementation produces an arrow function which can't be used with `new`.
        // Use a class that closes over the mocks instead.
        class ResizeObserverMock {
            constructor(cb: ResizeObserverCallback) {
                capturedResizeCallback = cb;
            }

            observe = observeMock;
            disconnect = disconnectMock;
            unobserve = vi.fn();
        }

        window.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    const makeAnchorEl = () => {
        const el = document.createElement('div');
        return {current: el};
    };

    it('should observe the menu element when displayed', () => {
        const anchorEl = makeAnchorEl();
        render(<TestComponent isDisplayed anchorEl={anchorEl}/>);
        expect(observeMock).toHaveBeenCalled();
        expect(capturedResizeCallback).not.toBeNull();
    });

    it('should not observe when not displayed', () => {
        const anchorEl = makeAnchorEl();
        render(<TestComponent isDisplayed={false} anchorEl={anchorEl}/>);
        expect(observeMock).not.toHaveBeenCalled();
    });

    it('should disconnect the observer when isDisplayed changes to false', () => {
        const anchorEl = makeAnchorEl();
        const {rerender} = render(<TestComponent isDisplayed anchorEl={anchorEl}/>);
        expect(disconnectMock).not.toHaveBeenCalled();

        rerender(<TestComponent isDisplayed={false} anchorEl={anchorEl}/>);
        expect(disconnectMock).toHaveBeenCalled();
    });

    it('should disconnect and reconnect the observer when isDisplayed toggles back to true', () => {
        const anchorEl = makeAnchorEl();
        const {rerender} = render(<TestComponent isDisplayed anchorEl={anchorEl}/>);

        rerender(<TestComponent isDisplayed={false} anchorEl={anchorEl}/>);
        expect(disconnectMock).toHaveBeenCalledTimes(1);

        rerender(<TestComponent isDisplayed anchorEl={anchorEl}/>);
        expect(observeMock).toHaveBeenCalledTimes(2);
    });

    it('should invoke computePosition when the resize callback fires', () => {
        const anchorElement = document.createElement('div');
        const getBoundingClientRectMock = vi.fn().mockReturnValue({
            top: 0, bottom: 100, left: 75, right: 175, width: 100, height: 50
        } as DOMRect);
        anchorElement.getBoundingClientRect = getBoundingClientRectMock;
        const anchorEl = {current: anchorElement};

        render(<TestComponent isDisplayed anchorEl={anchorEl}/>);

        // ComputePosition ran once on mount
        const callsAfterMount = getBoundingClientRectMock.mock.calls.length;
        expect(callsAfterMount).toBeGreaterThan(0);

        // Fire the resize observer callback — should trigger computePosition again
        expect(capturedResizeCallback).not.toBeNull();
        act(() => {
            capturedResizeCallback?.([], null as unknown as ResizeObserver);
        });

        expect(getBoundingClientRectMock.mock.calls.length).toBeGreaterThan(callsAfterMount);
    });

    it('should not invoke computePosition when not displayed', () => {
        const anchorEl = makeAnchorEl();
        const getBoundingClientRectMock = vi.fn().mockReturnValue({
            top: 0, bottom: 100, left: 75, right: 175, width: 100, height: 50
        } as DOMRect);
        anchorEl.current!.getBoundingClientRect = getBoundingClientRectMock;

        render(<TestComponent isDisplayed={false} anchorEl={anchorEl}/>);

        // ComputePosition should not run when not displayed — menu stays off-screen
        expect(getBoundingClientRectMock).not.toHaveBeenCalled();
    });
});
