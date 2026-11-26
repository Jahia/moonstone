import { warnOnce } from './warnOnce';

describe('warnOnce', () => {
    it.each(['development', 'production'])('should log each key once when NODE_ENV is %s', (mode) => {
        vi.stubEnv('NODE_ENV', mode);
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        warnOnce('a', 'first');
        warnOnce('a', 'first');
        warnOnce('b', 'second');
        expect(warn).toHaveBeenCalledTimes(2);
        expect(warn).toHaveBeenNthCalledWith(1, 'first');
        expect(warn).toHaveBeenNthCalledWith(2, 'second');
        warn.mockRestore();
        vi.unstubAllEnvs();
    });
});
