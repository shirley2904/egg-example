const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    console.log("2222222222222")
    // ctx.throw(401, 'no token detected in http header "Authorization"');
    this.ctx.body = 'index';

  }


  async authCallback() {
    // this.ctx.redirect('http://127.0.0.1:8081/#/');
    console.log(this.ctx.isAuthenticated());
    this.ctx.body = 'index';

  }
  
  // async authorize() {
  //   const query = this.ctx.querystring
  //   console.log('query: ', query)
  //   await this.ctx.render('oauth/login.html', {query: query})
  // }


  async find() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.findById(userId);
    ctx.body = user;
  }
  
  async add() {
    const query = this.ctx.request.body;
    let password = query.password;
    let username = query.username;
    // console.log(username)
    const user = await this.ctx.service.user.insert(username,password);

    this.ctx.body = user
  }

  async update() {
    const query = this.ctx.request.body;
    let password = query.password;
    let username = query.username;
    // console.log(username)
    const user = await this.ctx.service.user.update(username,password);

    this.ctx.body = user
  }

  async del() {
    const query = this.ctx.request.body;
    let username = query.username;
    // console.log(username)
    const user = await this.ctx.service.user.del(username);

    this.ctx.body = user
  }
}

module.exports = UserController;