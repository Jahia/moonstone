import { resetWarnOnce } from './src/utils/warnOnce';

import '@testing-library/jest-dom/vitest';

afterEach(resetWarnOnce);
class IntersectionObserverMock {
    constructor(callback, options) {
        this.callback = callback;
        this.options = options;
    }

    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
        return [];
    }
}

global.IntersectionObserver = IntersectionObserverMock;
window.IntersectionObserver = IntersectionObserverMock;

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;
window.ResizeObserver = ResizeObserverMock;
