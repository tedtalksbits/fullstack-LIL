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
$ npm i -D eslint babel-eslint eslint-plugin-react
```

- [⏩ express](https://expressjs.com/) & [🍏 mongodb](https://www.mongodb.com/): server and database
  
```sh 
$ npm i express mongodb
```

- [📦webpack](https://webpack.js.org/): so we can write modular code (code bundler )
  
```sh 
$ npm i -D webpack webpack-cli
```

