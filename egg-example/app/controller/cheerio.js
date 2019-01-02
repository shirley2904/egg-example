const Controller = require('egg').Controller;
const cheerio = require('cheerio');

let times = 0;
  let totalPage = 10;
  let pages = [];

class CheerioController extends Controller { 

  async fetchData(callback){

    let self = this;
    times++;

    let promise = Promise.all([
        await self.ctx.service.reptile.filterByPage(times),
        await self.ctx.service.reptile.filterByPage(++times),
        await self.ctx.service.reptile.filterByPage(++times),
        await self.ctx.service.reptile.filterByPage(++times),
        await self.ctx.service.reptile.filterByPage(++times)
    ]);
    promise.then(function(result) {
        console.log("seekList totals:" + times);
        pages = pages.concat(result);
        if (times < totalPage) {
          self.fetchData(callback)
        } else {
          callback(pages);
        }
    }).catch((error) => {
      console.log(error)
    });

  }

  async index(){
    let _this = this;
    new Promise(function(resolve,reject){
      _this.fetchData(function(pages){
        resolve(pages);
      });
    });

    this.ctx.body = pages.slice(0,totalPage);
  }

}

module.exports = CheerioController;