// @ts-expect-error preview is js not ts
import { parameters } from '../../.storybook/preview.jsx';

const sortTitles = (titles: string[]) => titles.map(title => ({ title })).sort(parameters.options.storySort).map(({ title }) => title);

describe('storySort', () => {
    it('should sort EmptyCardSelector right after CardSelector', () => {
        expect(sortTitles(['Components/EmptyCardSelector', 'Components/Checkbox', 'Components/CardSelector']))
            .toEqual(['Components/CardSelector', 'Components/EmptyCardSelector', 'Components/Checkbox']);
    });

    it('should sort a title before the titles under it', () => {
        expect(sortTitles(['Components/Input/Numbers', 'Components/Input'])).toEqual(['Components/Input', 'Components/Input/Numbers']);
    });

    it('should sort the numbers of a title by value', () => {
        expect(sortTitles(['Tokens/Spacing 10', 'Tokens/Spacing 2'])).toEqual(['Tokens/Spacing 2', 'Tokens/Spacing 10']);
    });
});
