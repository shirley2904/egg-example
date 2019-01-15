'use strict';
const mongoose = require('mongoose');

module.exports = appInfo => {
  const config = exports = {
    jsonp: {
      csrf: true,
    },
    mongoose:{
      url: 'mongodb://127.0.0.1:27017/news',
      options: {},
    },
    // mysql = {
    //     client: {
    //       host: 'localhost',
    //       port: '3306',
    //       user: 'root',
    //       password: '123456',
    //       database: 'news'
    //     },
    //     app: true,
    //     agent: false
    //   }
  };

    // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543475414632_3825';


  exports.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '.domain.com' ]
  };

  exports.cors = {
     origin: '*',
     allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0,
    },
  }


  
  // add your config here
  config.middleware = [];
  

  return config;
};
