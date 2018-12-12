'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/app', controller.home.index);
  router.get('/user/:id', controller.user.find);
  router.post('/add',controller.user.add);
};
