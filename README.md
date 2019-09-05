This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Install all packages with `yarn` command.

## Available Scripts

In the project directory, you can run:

### Start

`yarn start` run the storybook environement on `http://localhost:6006`


### Test

`yarn test` Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### ESlint

`yarn lint:js` run ESlint script to lint all javascript files with autofix enable.


### Stylelint

`yarn lint:scss` run stylelint script to lint all scss files with autofix enable.


### Linters

`yarn lint` run all lint commands (javascript and style).

### Prettier

This project use [prettier](https://prettier.io/) to format automatically your code.
You can install the plugin corresponding to your favorite IDE [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

`yarn prettier` run prettiers formatting commands. We launch this command before each commit.


### Husky

Before each push [Husky](https://github.com/typicode/husky) launch lint scripts with autofix enable to allow to only push formatted code.


-----


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
