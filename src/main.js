require('babel-polyfill');
require('webpack-hot-middleware/client');

require('./index.html');
require('./main.css');

import axios from 'axios';


const func = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log('response: ', response.data);
};

func();
