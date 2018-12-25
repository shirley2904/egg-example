'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.index);
  router.get('/user/:id', controller.user.find);
  router.post('/add',controller.user.add);
  router.post('/update',controller.user.update);
  router.post('/del',controller.user.del);




   // 鉴权成功后的回调页面
   router.get('/authCallback', controller.user.authCallback);

   // 渲染登录页面，用户输入账号密码
  //  router.get('/login', controller.home.login);
   // 登录校验
   router.post('/login', app.passport.authenticate('local'));
  //  router.post('/login', app.passport.authenticate('local'),function(req,res){
  //    res.redirect('http://127.0.0.1:8081/#/')
  //  });

 
};
