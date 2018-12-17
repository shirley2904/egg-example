'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/app', controller.home.index);
  router.get('/user/:id', controller.user.find);
  router.post('/add',controller.user.add);
  router.post('/update',controller.user.update);
  router.post('/del',controller.user.del);


  // //登录
  // router.all('/login',app.oAuth2Server.token());
  // //获取密钥
  // router.post('/authorization',controller.authorization.index);

  app.all('/user/token', app.oAuth2Server.token());
  // app.get('/user/authorize', app.oAuth2Server.authorize(), 'user.code');
  app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');

  // router.get('/', controller.home.index);
  // router.get('/profile', controller.user.index);
  // router.post('/login', controller.login.index);
 
};
