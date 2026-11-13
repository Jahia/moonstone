// @ts-expect-error preview is js not ts
import { decorators, parameters } from '../../.storybook/preview.jsx';
import { iconElements } from './iconArgType';

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

describe('renderIconArgs', () => {
    const [renderIconArgs] = decorators;

    it('should render the name in an icon arg as its icon, and only there', () => {
        const Story = vi.fn();
        renderIconArgs(Story, { args: { icon: 'Add', label: 'Add' }, argTypes: { icon: { isIcon: true }, label: {} } });
        expect(Story).toHaveBeenCalledWith({ args: { icon: iconElements.Add, label: 'Add' } });
    });

    it('should leave the args alone when no icon arg holds an icon name', () => {
        const Story = vi.fn();
        renderIconArgs(Story, { args: { icon: undefined, label: 'Add' }, argTypes: { icon: { isIcon: true }, label: {} } });
        expect(Story).toHaveBeenCalledWith();
    });
});
