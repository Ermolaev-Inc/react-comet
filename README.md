![reactcomet](https://user-images.githubusercontent.com/57585370/128564780-426af1ce-6ac1-47bf-9aa7-ca83fe31f4f4.png)

## Installation
Just click on "Use this template" or clone via ssh

## Comet CLI
We recommend using the [Comet CLI](https://github.com/Ermolaev-Inc/comet-cli)

## Structure
Path | Description
------------- | -------------
src/components | A component is an independent part of the UI that can be used many times. The component **depends only on the props**. Examples: Button, Input, Dropdown Menu...
src/pages  | A page is a collection of components. The `PageNameContainer.tsx` must contain requests to the server and other logic. The `PageName.tsx` should be presentational component. Examples: Home, About, Dialogs...
src/hooks | Your custom hooks

### Components structure
+ src/components/Button/
    + Button.tsx
    + Button.styles.ts

### Pages structure
+ src/pages/About/
    + AboutContainer.tsx
    + About.tsx
    + About.styles.ts

### Hook structure
+ src/hooks/
    + hookName.hook.ts

## Available Scripts
**You can use yarn, just use `yarn` instead of `npm run`**
### `npm run start`
Runs the app in dev mode
### `npm run build`
Builds the app for production to the `build` folder
### `npm run lint` & `npm run lint:fix`
Checks compliance with the code style
### `npm run format`
Format code with prettier
### `npm run types:coverage`
Checks the code coverage by types

## Support of styled-components in storybook
[Check it](https://github.com/Ermolaev-Inc/react-comet/blob/master/.storybook/preview.js)

## Create React App
react-comet was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

## License
react-comet is open source software licensed as MIT


