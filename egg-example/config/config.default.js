'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'news'
    },
    app: true,
    agent: false
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543475414632_3825';
  
  // add your config here
  config.middleware = [];

  return config;
};
