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
require('babel-register');

  "presets": [
    "env"
  ],

- need to add above two to user import syntax at server code

