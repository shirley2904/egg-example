'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller{
    async index(){
        const ctx = this.ctx;

        
        const token = {
            "user_id":1,
            "user_name":ctx.request.body.username,
            "expiresIn":8000,
            "value":"pipi"
        }

        
        ctx.body = {
            token:token
        };
        ctx.status = 200;
    }
}

module.exports = LoginController;