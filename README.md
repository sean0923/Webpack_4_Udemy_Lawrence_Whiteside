### 002 dev-server
- need publicPath: '/'
- devServer: {
    contentBase: 'dist',
  }

### 003 modules (style & css loader)
-   module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

use loader in reversed order. 
1. css loader gets css
2. style-loader puts css into html

### 004 better err render & html, file loader
npm install html-loader extract-loader file-loader

{
  test: /\.html$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].html',
      },
    },
    {
      loader: 'extract-loader',
    },
    {
      loader: 'html-loader',
    },
  ],
},

- inside of rule []
1. load html file
2. extract to seperate file
3. name that seperate file as [name].html


    {
      loader: 'html-loader',
      options: {
        attrs: ['img:src'],
      },
    },
  ],
},
{
  test: /\.(jpg|jpeg|png|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[name]-[hash:8].[ext]',
      },
    },
  ],
},

### 005-babel basic
npm install babel-loader

- create .babelrc file
{
  "plugins": [
    "transform-es2015-arrow-functions"
  ]
}

- running npm run babel-main-js converts arrow func to normal func

- add babel loader to webpack.dev.js (exclude nodemoduels)
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /nodemodules/
      },


### 006-more babel
npm install babel-register babel-preset-env
require('babel-register');

  "presets": [
    "env"
  ],

- need to add above two to user import syntax at server code

npm install webpack-dev-middleware webpack-hot-middleware

```
plugins: [new webpack.HotModuleReplacementPlugin()],
```

```
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../config/webpack.dev';

const complier = webpack(config);

const app = express();

const staticMiddleware = express.static('dist');

app.use(webpackDevMiddleware(complier, config.devServer));
app.use(webpackHotMiddleware(complier));
app.use(staticMiddleware);
```

- build custom dev-server with express n webpack Dev & Hot Middleware

### 007 add nodemon

- At package.json script add nodemon --watch
"server": "nodemon --watch config --watch src/server src/server/requires-at-server.js"

npm install html-webpack-plugin

        use: [
          ```
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          {
            loader: 'extract-loader',
          },
          ```

- html-webpack-plugin replace above code to 

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ```
    new HTMLWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),    
    ```
- inject: false -> for note rendering twice



