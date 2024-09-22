# react-custom-setup

```
npm init
npm i react
npm i react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server
```

> node modules contains all packages and files by fetchig from cdn and stores in local

## webpack 
### Bundles modules efficiently into single/multiple files that browsers understand
### Manages dependencies(libraries), ensuring everything loads in the right order
### Uses loaders like Babel to transpile modern JavaScript or JSX into browser-compatible JavaScript
### Supports code splitting, which breaks your code into smaller chunks that are loaded on demand, reducing the initial load time of the application
### Can bundle assets (img, fonts, stylesheet), using appropriate loaders like file-loader or url-loader, and ensures they are served efficiently
### Webpack’s Hot Module Replacement allows you to inject updated modules into your app without a full reload. This speeds up development by preserving the app’s state while applying updates
### Supports tree shaking, a technique that removes unused code (dead code) from your bundle/3rd party library, reducing its size
### Allows you to create separate configurations for development and production, enabling optimizations like minification and compression in production builds, while keeping faster reloading during development.
### Different environments (development, staging, production) may require different configurations and API endpoints.It can inject environment variables during the build process, allowing you to configure environment-specific behavior in your React app

## bable transpiles the code from es6 to es5 and also convert jsx into react element
### Create .babelrc file
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```