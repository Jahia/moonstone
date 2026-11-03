import { createContext } from 'react';

// The role of a MenuItem the consumer gives none: `menuitem` in a menu, `option` in a listbox. Outside a Menu, it keeps the role of its `<li>`
export const MenuItemRoleContext = createContext<'menuitem' | 'option' | undefined>(undefined);
