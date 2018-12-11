const Controller = require('egg').Controller;
class UserController extends Controller {
  async find() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
  async add() {
    const ctx = this.ctx;
    const age = ctx.params.age;
    console.log(age);
    const name = ctx.params.name;
    console.log(name);
    // const user = await ctx.service.user.insert(userId);
    // ctx.body = user;
  }
}//http://127.0.0.1:7001/user?name='ss'&age=1

module.exports = UserController;