# Build Full Stack App From Scratch
<hr>


### 1. Setup: ⚙️
**Initialize a new project**
```sh
npm init -y
```

### 2. Install dependencies 🖇️

- ⚛️ React and React DOM: (Front end UI library) 
  
```sh 
$ npm install react react-dom
```

- 🏭 Babel: (to compile modern es syntax and JSX code) 
  
```sh 
$ npm i -D babel-loader @babel/cli @babel/core @babel.preset-env @babel/preset-reac
t @babel/plugin-proposal-class-properties
```

- [👿 nodemon](https://nodemon.io/): to watch for changes in our backend code and restart server 
  
```sh 
$ npm i -D nodemon 
```

- [🧼 eslint](https://eslint.org/): Keep our code clean
  
```sh 
$ npm i -D eslint babel-eslint eslint-plugin-react prop-types
```

- [⏩ express](https://expressjs.com/) & [🍏 mongodb](https://www.mongodb.com/): server and database
  
```sh 
$ npm i express mongodb
```

- [📦webpack](https://webpack.js.org/): so we can write modular code (code bundler )
  
```sh 
$ npm i -D webpack webpack-cli
```

`package.json`

```js
"dependencies": {
    "express": "^4.18.1",
    "mongodb": "^4.5.0",
    "prop-types": "^15.8.1",
    "react": "^18.1.0",
    "react-dom": "^18.1.0"
  },
  "devDependencies": {
    "@babel/node": "^7.17.10",
    "@babel/cli": "^7.17.10",
    "@babel/core": "^7.17.10",
    "@babel/plugin-proposal-class-properties": "^7.16.7",
    "@babel/preset-env": "^7.17.10",
    "@babel/preset-react": "^7.16.7",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.5",
    "eslint": "^8.14.0",
    "eslint-plugin-react": "^7.29.4",
    "nodemon": "^2.0.16",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  }

```