const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    // debug('%s %s get user: %j', req.method, req.url, user);
    app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user,done) => {
      const auth = await ctx.model.User.findOne({username:user.username,password:user.password})
      if(auth){
          return auth;
      }
      else{
        ctx.throw(401, 'no token detected in http header "Authorization"');
        return;
      }
  });

  app.beforeStart(async () => {
    // 保证应用启动监听端口前数据已经准备好了
    // 后续数据的更新由定时任务自动触发
    await app.runSchedule('update_cache');
  });


  app.passport.serializeUser(async (ctx, user) => {
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {});
};