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



