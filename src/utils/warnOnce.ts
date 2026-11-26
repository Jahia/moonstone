const warned = new Set<string>();

// The one place of the library that writes to the console
export const warnOnce = (key: string, message: string): void => {
    if (warned.has(key)) {
        return;
    }

    warned.add(key);
    console.warn(message);
};

// For the test setup only, so that each test starts with no key logged
export const resetWarnOnce = (): void => {
    warned.clear();
};
