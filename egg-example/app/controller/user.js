const Controller = require('egg').Controller;
class UserController extends Controller {
  async find() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
  
  async add() {
    const query = this.ctx.request.body;
    let age = query.age;
    let name = query.name;
    console.log(name)
    const user = await this.ctx.service.user.insert(name,age);

    this.ctx.body = user
  }

  async update() {
    const query = this.ctx.request.body;
    let age = query.age;
    let name = query.name;
    console.log(name)
    const user = await this.ctx.service.user.update(name,age);

    this.ctx.body = user
  }

  async del() {
    const query = this.ctx.request.body;
    let name = query.name;
    console.log(name)
    const user = await this.ctx.service.user.del(name);

    this.ctx.body = user
  }
}

module.exports = UserController;