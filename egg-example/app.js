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


  app.passport.serializeUser(async (ctx, user) => {});
  app.passport.deserializeUser(async (ctx, user) => {});
};