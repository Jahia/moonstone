# Component stories

A story has three uses: the preview of the Docs page, a visual test with one screenshot
(`src/visualStoriesSuite.tsx`), and an example of implementation for a developer or an agent (the
manifest of `@storybook/addon-mcp` holds the code of each story). A story that serves none of the
three is removed.

The rules below are grouped by use: the rules of every story, then the rules of the visual tests,
then the rules of the Docs page.

## Every story

- **One story shows one thing**, a feature or a usage of the component, and its name says which.
  There is no fixed list of stories for every component.
- **A story shows what it is about.** A menu, a modal, a tooltip or a calendar is shown open, not
  only its trigger. Open it with a prop when the component has one. Otherwise, open it with a
  `play` function.
- **Two stories never have the same screenshot.** Merge them, or remove one. When both stay as
  examples of implementation, such as `Controlled` and `Uncontrolled`, one of them leaves the
  visual tests with the `!visual` tag (see *The visual tests*).
- **The code of a story is a correct example**, because the manifest gives it to an agent as the
  way to use the component:
  - Type the meta and every story (`Meta<typeof Component>`, `StoryObj`), so the type check
    refuses an arg that the component refuses.
  - Give an icon as an element, `icon: <Love/>`, never by its name, `icon: 'Love'`. A name works
    in Storybook only, and it crashed the visual tests. See *Element props* in `structure.md`.
  - No workaround for a test: no `data-testid`, no delay, no mock of a component. A fixed value
    that makes the render the same on every run, such as a fixed date, is not a workaround.
  - A short `play` function. It only brings the story to what the story shows: the action that
    opens the overlay, found by its role, then the wait for the overlay. No assertion: a test goes
    in `<Component>.spec.tsx` or `<Component>.browser.spec.tsx`.

```tsx
play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Open modal' }));
    await within(document.body).findByRole('dialog');
},
```

- **Every story stays in the manifest.** Never add `!manifest` to a story, except to an internal
  component (see *Internal components* in `structure.md`).

## The visual tests

- **Every story has one screenshot**, unless its tags hold `!visual`.
- **A story is static and deterministic**: no network request, no random image or value, no
  current date, no animation. The same code gives the same screenshot on every run. A story that
  needs dynamic content serves the Docs page only, and leaves the visual tests with `!visual`.
- **Each `variant`, `color` and `size` prop has a story** that shows all its values side by side,
  named `Variants`, `Colors` or `Sizes`. Render it with `PropValues`
  (`src/__storybook__/PropValues.tsx`), and take the values from the `as const` array of
  `<Component>.types.ts`, such as `buttonSizes`:

```tsx
export const Sizes: Story = {
    args: { label: 'Button' },
    render: args => <PropValues args={args} component={Button} prop="size" values={buttonSizes}/>,
};
```

- **Two props share one story only when their values change the render together**, such as the
  `variant` and the `color` of `Button`. The story is named after both, `VariantsAndColors`, and
  `PropValues` renders a table with `rowProp` and `rowValues`. The ban of a combined matrix in
  *The Appearance pattern* of `structure.md` covers the tables of `<Component>.md` only.
- **A component too big for one screenshot**, such as a `Modal` that covers the page, has one
  story for each value, named after the prop and the value: `SizeSmall`, `SizeLarge`.
- **The states.** <!-- PENDING Jahia/moonstone#1732: how a story shows the hover, active and focus
  states. Write the chosen method here once it is merged. -->
- **A story leaves the visual tests with the `!visual` tag**, never with the `ignore` set of
  `src/visualStoriesSuite.tsx`. That set holds only the unstable stories, each with the link of
  its issue.

```tsx
export const Uncontrolled: Story = {
    tags: ['!visual'],
};
```

## The Docs page

- **The first story of the file is the preview** of the Docs page, with its Controls (see
  *Wiring into Storybook* in `structure.md`). Drive it by `args`, so every Control acts on it.
- **A story keeps the interaction of the component**: hovering the trigger of a tooltip shows the
  tooltip. A story shown open for its screenshot still opens and closes as the component does.

## Storybook 11 and CSF 4

Stories stay in the CSF 3 format (`Meta`, `StoryObj`) until Jahia/moonstone#1714 ends. Never write
a story in CSF 4 before, and never mix the two formats.

This rule states what a story shows, its `args`, its `tags` and its `play` function. It does not
depend on the format: the move to CSF 4 changes how a story is declared, and keeps the list of
stories, their names and their screenshots.
