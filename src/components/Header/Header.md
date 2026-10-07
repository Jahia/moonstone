## Example
```jsx
import {Breadcrumb, BreadcrumbItem, Button, Header} from '@jahia/moonstone';

<Header
    title="Home page"
    breadcrumb={(
        <Breadcrumb>
            <BreadcrumbItem label="Digitall" onClick={handleOpenSite}/>
            <BreadcrumbItem label="Home page" onClick={handleOpenPage}/>
        </Breadcrumb>
    )}
    mainActions={[
        <Button key="preview" label="Preview" size="big" variant="outlined" onClick={handlePreview}/>,
        <Button key="publish" color="accent" label="Publish" size="big" onClick={handlePublish}/>,
    ]}
/>
```

## Do
- Use it at the top of a page to show the page title and the main actions of the page.
- Use it to give the context of the item shown on the page, such as its location in a **Breadcrumb**, its content type, or its status with a **Chip**.
- Use it to hold a toolbar of controls that act on the page content, such as a **Tab**, a **Dropdown**, or view switchers.
- Use it as the header of a **LayoutContent**.

## Don't
- Don't use it for the navigation of the application. Use **PrimaryNav** or **SecondaryNav** instead.
- Don't use it to title a section inside a page. Use **Typography** instead.
- Don't use it as the header of a modal. Use **ModalHeader** instead.
- Don't use it to title a secondary navigation panel. Use **SecondaryNavHeader** instead.

## Voice and tone
- Write the title in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the page or the item it shows, such as "Home page" or "Users".
- Write the labels of the main actions as Button labels: start with a verb that names the action, such as "Publish" or "Preview", and never write "OK".

## Accessibility
- The title is rendered as the page's main heading (`h1`). Use a single Header per page, and don't add another `h1` to the page.
- An icon-only Button in the toolbar or in the main actions must have an `aria-label` that describes the action.
- The toolbar is exposed as a toolbar to assistive technologies. Put only controls in it.
- In the toolbar, the Left and Right arrow keys move the focus between buttons (soon).
- Home and End move the focus to the first and last toolbar buttons (soon).
