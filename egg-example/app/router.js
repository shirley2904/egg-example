'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.index);
  router.get('/api/v1/user/:id', controller.user.find);
  router.post('/api/v1/add',controller.user.add);
  router.post('/api/v1/update',controller.user.update);
  router.post('/api/v1/del',controller.user.del);

  // router.get('/getData', controller.cheerio.test);


   // 鉴权成功后的回调页面
   router.get('/api/v1/authCallback', controller.user.authCallback);

   // 渲染登录页面，用户输入账号密码
  //  router.get('/login', controller.home.login);
   // 登录校验
   router.post('/api/v1/login', app.passport.authenticate('local'));
  //  router.post('/login', app.passport.authenticate('local'),function(req,res){
  //    res.redirect('http://127.0.0.1:8081/#/')
  //  });

 
};
