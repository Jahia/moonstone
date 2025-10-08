The Input component is built in two sizes. It also uses the Icon token as a leading icon which indicates the purpose of the Input.

## Design
[Figma Link](https://www.figma.com/file/939bW74C3TLW5VAzK23uox/%F0%9F%8C%99moonstone-components?node-id=4631%3A365)

## Search Variant
To use the search variant of the Input, use `variant="search"` for the Input.
This displays the Search/magnifying glass icon at the beginning of the Input.

Also, ensure that an `onClear` callback is provided which will cause the Cancel icon to appear at the end of the input.
The purpose of the `onClear` prop is to provide a callback which will clear the text in the Input.

## Number Input
Only allows numbers to be typed inside & '-' as first character if `allowNegative` is true (default).

`min`, `max` & `step` props take numbers and are only used for arrow incrementation. NumberInput's value validation must be done on the form level.

`NumberInput`'s value is typed as a string.