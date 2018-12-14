const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx
    const authorization = ctx.get('Authorization');
    if (authorization === '') { // 判断请求头有没有携带 token ,没有直接返回 401
        ctx.throw(401, 'no token detected in http header "Authorization"');
    }
    const token = authorization.split(' ')[1];
    // console.log(token)
    let tokenContent;
    try {
        // tokenContent = await jwt.verify(token, 'shenzhouhaotian');     //如果 token 过期或验证失败，将返回401
        console.log(tokenContent)
        ctx.body = tokenContent     // token有效，返回 userInfo ;同理，其它接口在这里处理对应逻辑并返回
    } catch (err) {
        ctx.throw(401, 'invalid token');
    }
  }
  
  async find() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
  
  async add() {
    const query = this.ctx.request.body;
    let password = query.password;
    let username = query.username;
    console.log(username)
    const user = await this.ctx.service.user.insert(username,password);

    this.ctx.body = user
  }

  async update() {
    const query = this.ctx.request.body;
    let password = query.password;
    let username = query.username;
    console.log(username)
    const user = await this.ctx.service.user.update(username,password);

    this.ctx.body = user
  }

  async del() {
    const query = this.ctx.request.body;
    let username = query.username;
    console.log(username)
    const user = await this.ctx.service.user.del(username);

    this.ctx.body = user
  }
}

module.exports = UserController;