'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  //查找
  async find(uid) {
    let { ctx } = this;
    const user = await ctx.model.User.find({_id:uid});
    console.log(user)
    return { user };
  }
  //插入
  async insert(name,age) {
    let { ctx } = this;

    const user = await ctx.model.User.create({
        name:name,
        age:age
    });
    return { user };
  }
  //更新
  async update(name,age) {
    let { ctx } = this;

    const user = await ctx.model.User.update({name:"6"},{
      name:name,
      age:age
    });
    return { user };
  }
  //删除
  async del(name) {
    let { ctx } = this;

    const user = await ctx.model.User.remove({name:name});
    return { user };
  }
}
module.exports = UserService;
