require('babel-runtime/regenerator');
require('babel-polyfill');
require('webpack-hot-middleware/client?reload=true');

require('./main.css');
// require('./images/link.jpg');
require('./index.html');
// require('./app');

import axios from 'axios';

const func = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log('response: ', response.data);
};
debugger
func();
