'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('student', { id: uid });
    console.log(user)
    return { user };
  }
  async insert(name,age) {
    const user = await this.app.mysql.insert('student', { name: name,age:age });
    return { user };
  }
}
module.exports = UserService;
