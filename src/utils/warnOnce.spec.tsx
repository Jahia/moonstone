import { warnOnce } from './warnOnce';

describe('warnOnce', () => {
    it('should log each key once in development', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        warnOnce('a', 'first');
        warnOnce('a', 'first');
        warnOnce('b', 'second');
        expect(warn).toHaveBeenCalledTimes(2);
        expect(warn).toHaveBeenNthCalledWith(1, 'first');
        expect(warn).toHaveBeenNthCalledWith(2, 'second');
        warn.mockRestore();
    });

    it('should log nothing in production', () => {
        vi.stubEnv('NODE_ENV', 'production');
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        warnOnce('a', 'first');
        expect(warn).not.toHaveBeenCalled();
        warn.mockRestore();
        vi.unstubAllEnvs();
    });
});
