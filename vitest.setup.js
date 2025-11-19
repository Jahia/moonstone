import '@testing-library/jest-dom/vitest';
class IntersectionObserverMock {
    constructor(callback, options) {
        // Parameters are accepted to match the real IntersectionObserver API.
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
