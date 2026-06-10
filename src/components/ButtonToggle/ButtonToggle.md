## Do
- Use ButtonToggle in a toolbar or panel header to represent a toggleable mode or view (e.g. grid view vs. list view).
- Use it when the pressed/active state must persist until the user explicitly toggles it off.
- Pair multiple ButtonToggles to represent independent or mutually exclusive view switches.

## Don't
- An immediate on/off setting controlling a persistent preference → use **Switch**.
- A one-shot action that triggers something without holding state → use **Button**.
- A group of related action buttons where none hold state → use **ButtonGroup**.

## Example

```jsx
import {ButtonToggle} from '@jahia/moonstone';
import {Grid} from '@jahia/moonstone/icons';

<ButtonToggle iconStart={<Grid/>} label="Grid view"/>

// Icon-only (requires aria-label — see Accessibility)
<ButtonToggle iconStart={<Grid/>} aria-label="Grid view"/>
```

## Controlled & uncontrolled

Use one mode or the other — don't mix `isPressed` (controlled) with `defaultPressed` (uncontrolled).

- **Uncontrolled** (default) — the component tracks its own pressed state. Optionally set the
  starting state with `defaultPressed`. Use when nothing else needs to read or drive the state.
  ```jsx
  <ButtonToggle label="List view" defaultPressed/>
  ```
- **Controlled** — the parent owns the state via `isPressed`, updated through `onChange`. Use
  when the pressed state is read or driven elsewhere.
  ```jsx
  const [isGridView, setIsGridView] = useState(false);

  <ButtonToggle
    label="Grid view"
    isPressed={isGridView}
    onChange={(e, pressed) => setIsGridView(pressed)}
  />
  ```

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most toolbar and panel contexts. |
| `big` | Header or prominent toolbar positions where larger touch targets are needed. |

## Voice and tone

- **Sentence case; a few words (3 max), never a sentence.**
- **Label the mode, not the action.** Write "Grid view", not "Switch to grid".
- **Be specific.** Name the view or mode the button activates.

## Accessibility
- An **icon-only** ButtonToggle (no `label`) **must** have an `aria-label` describing the mode or view it activates.
- The component sets `aria-pressed` automatically — no extra wiring needed.
- `iconEnd` is only rendered when a `label` is also provided; do not rely on it for icon-only buttons.
- Focus shows the standard focus ring — do not remove it.

## Related
- **Button** — a one-shot action button with no pressed/active state.
- **ButtonGroup** — group related buttons (including ButtonToggles) side by side.
- **Switch** — an immediate on/off setting for a persistent user preference.
- **Loader** — shown inside the button when `isLoading` is set.
