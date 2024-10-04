# react-custom-setup

```
npm init
npm i react
npm i react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server
```

> node modules contains all packages and files by fetchig from cdn and stores in local

## Webpack 
### Injects bundle.js file in index.html
### Bundles modules efficiently into single/multiple files that browsers understand.
### Manages dependencies(libraries), ensuring everything loads in the right order.
### Uses loaders like Babel to transpile modern JavaScript or JSX into browser-compatible JavaScript.
### Supports code splitting, which breaks your code into smaller chunks that are loaded on demand using dynamic import, reducing the initial load time of the application.
### Can bundle assets (img, fonts, stylesheet), using appropriate loaders like file-loader or url-loader, and ensures they are served efficiently.
### Webpack enables Hot Module Replacement during development. This allows you to see changes in your app immediately without needing to refresh the browser. For React apps, it’s incredibly useful because it can update components without losing the current app state.
### Supports tree shaking, a technique that removes unused code (dead code) from your bundle/3rd party library, reducing its size.
### Allows you to create separate configurations for development and production. Development mode includes detailed error messages, source maps (for debugging), and skips optimizations to improve build speed. Production mode focuses on performance, performing minification, and optimization to generate efficient, compressed bundles.
### Different environments (development, staging, production) may require different configurations and API endpoints.It can inject environment variables during the build process, allowing you to configure environment-specific behavior in your React app

## Create .babelrc file
### bable transpiles the code from es6 to es5 and also convert jsx into react element
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Create webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
```

## Create an /src folder and create the following files inside it
```
|-- src
  |-- App.js
  |-- App.css
  |-- index.html
  |-- index.css
  |-- index.js
```

### App.js
```
import React from "react";
import "./App.css";

const App = () => {
  return <h1>Hello React</h1>;
};

export default App;
```

### App.css
```
h1 {
  color: red;
}
```

### index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React with Webpack</title>
    //webpack injects bundle.js file in index.html during build
    //<script defer src="bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### index.css
```
body {
  background-color: blue;
}
```

### index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Create serve and build scripts in package.json
```
"scripts": {
  "serve": "webpack serve --mode development",
  "build": "webpack --mode production"
},
```
## Start dev server
``` 
npm run serve
```

## Build for production
```
npm run build
```
```
|-- dist
  |-- bundle.js
  |-- bundle.js.LICENSE.txt
  |-- index.html
```


> Reference: [Educative.io](https://www.educative.io/answers/how-to-create-a-react-application-with-webpack)