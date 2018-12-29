'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  //查找
  async findById(uid) {
    let { ctx } = this;
    const user = await ctx.model.User.findOne({user_id:uid});
    // console.log(user)
    return {user};
  }

  async findByName(uname) {
    let { ctx } = this;
    const user = await ctx.model.User.find({username:uname});
    // console.log(user)
    return { user };
  }

  //插入
  async insert(username,password) {
    let { ctx } = this;

    const user = await ctx.model.User.create({
        username:username,
        password:password
    });
    return { user };
  }
  //更新
  async update(username,password) {
    let { ctx } = this;

    const user = await ctx.model.User.update({username:"6"},{
      username:username,
      password:password
    });
    return { user };
  }
  //删除
  async del(username) {
    let { ctx } = this;

    const user = await ctx.model.User.remove({username:username});
    return { user };
  }
}
module.exports = UserService;
