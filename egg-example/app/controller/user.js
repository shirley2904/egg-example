const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    // ctx.throw(401, 'no token detected in http header "Authorization"');
    this.ctx.body = 'index';

  }


  async authCallback() {
    // this.ctx.redirect('http://127.0.0.1:8081/#/');
    console.log(11111111111111111111111111111111)
    console.log(this.ctx.isAuthenticated());
    this.ctx.body = {
      "name":"aaa"
    };

  }


  async find() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.findById(userId);
    console.log(user)
    ctx.body = {
      code:200,
      data:user
    };
    ctx.status = 200;
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