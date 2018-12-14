'use strict';

const Controller = require('egg').Controller;

class AuthorizationController extends Controller {
  async index() {
    var client = nconf.get('client');
    this.ctx.body={
        authorization:'Basic'+
            new Buffer(client.clientId+':'+
            client.clientSecret).toString('base64')
    }
  }

}

module.exports = AuthorizationController;
