import '@testing-library/jest-dom/vitest';
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
