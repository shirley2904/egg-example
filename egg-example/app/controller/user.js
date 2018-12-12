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
    const age = ctx.request.body.age;
    console.log(age);
    const name = ctx.request.body.name;
    console.log(name);
    const user = await ctx.service.user.insert(name,age);
    ctx.body = user;
  }
}

module.exports = UserController;