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

### 008-add-debugger-n-sorce-map

- add --inspect after nodemon to enable server debugging at chrom

"server": "nodemon --inspect --watch config --watch src/server src/server/requires-at-server.js"

- add source-map under dev-server at webpack.dev.js

  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
  ```
  devtool: 'source-map',
  ```





### 009 - right before react

- add prod script at package.json
- NODE_ENV=production
- "prod": "NODE_ENV=production node src/server/main.js"

- heroku create
- heroku config:set NODE_ENV=production <-- same as go to setting at heroku website

- at express.js add var isProd 
- if isProd then don't run dev code in express.js file (from webpack to static middleware)
- set port to process.env.PORT || 

- can run heroku locally
- heroku local will tell you need .env
- need to create .env fiel and write NODE_ENV=production

- create Procfile -> web:npm run prod

- comment out webpack hotreload in main.js & webpack.dev

--- push to production ---
git push heroku <your branch name>:master

--- mistake ---
process.ENV.PORT --> process.env.PORT
!!! Procfile web=npm run prod --> web:npm run prod
!!! Procfile web: npm run prod



### 010 webpack.prod-start
npm install mini-css-extract-plugin

--- webpack.prod.js ---
- \\ copy development -> production
- \\ style-loader -> MiniCSSExtractPlugin.loader

          {
            loader: MiniCSSExtractPlugin.loader,
          },

- add new MiniCSSExtractPlugin() at the bottom
- add options below css-loader to minimize css

          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },

--- package.json ---
- build: to production
- build:dev to development

!!! loader -> effective one file at a time
!!! plugins -> effect all bundle

npm install optimize-css-assets-webpack-plugin

- new MiniCSSExtractPlugin({
  filename: "[name]-[contenthash].css"
})

### 011 - (prod-js)





