'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body="hi"

  }

  async authCallback() {
    // this.ctx.redirect('http://127.0.0.1:8081/#/');
    console.log(111)
    this.ctx.body = 'index';

  }

}

module.exports = HomeController;
