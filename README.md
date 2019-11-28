<a href="https://www.jahia.com/">
    <img src="https://www.jahia.com/modules/jahiacom-templates/images/jahia-3x.png" alt="Jahia logo" title="Jahia" align="right" height="60" />
</a>

Moonstone
======================

<p align="center">Jahia Design System</p>

<p align="center">Moonstone is our library of styles re-usable React components</p>


<p>
  <a href="https://www.npmjs.com/package/moonstone" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jahia/moonstone.svg">
  </a>
  <a href="https://contenteditor.jahia.design/moonstone/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

* [Zeroheight](https://zeroheight.com/29db18463) 
* [Storybook](https://contenteditor.jahia.design/moonstone)

## Install

```sh
yarn add @jahia/moonstone
```

## Import global styles into your project

Use the component `GlobalStyle` add the root of your app to load CSS globals and resets.

## Use the design System

```jsx
import React from 'react'
import logo from './logo.svg'
import './App.css'
import {GlobalStyle, Typography} from 'moonstone'

function App() {
    return (
        <>
            <GlobalStyle/>
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <Typography>
                        Edit <code>src/App.js</code> and save to reload.
                    </Typography>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </>
    )
}

export default App
```

## Author

👤 **Jahia**

-   Github: [@Jahia](https://github.com/Jahia)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
