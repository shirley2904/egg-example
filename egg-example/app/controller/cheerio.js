const Controller = require('egg').Controller;
const cheerio = require('cheerio');

  let times = 0;
  let totalPage = 3;
  let pages = [];

class CheerioController extends Controller { 

  async fetchData(callback){

    let _this = this;
    times++;

    if (times < totalPage) {
      let promise = Promise.all([
          await _this.ctx.service.reptile.filterByPage(times),
          await _this.ctx.service.reptile.filterByPage(++times),
          await _this.ctx.service.reptile.filterByPage(++times),
          await _this.ctx.service.reptile.filterByPage(++times),
          await _this.ctx.service.reptile.filterByPage(++times)
      ]);
      promise.then(function(result) {
          console.log("seekList totals:" + times);
          pages = pages.concat(result);
          if (times < totalPage) {
            console.log(times)
            _this.fetchData(callback)
          } else {
            // callback(pages);
          }
      }).catch((error) => {
        console.log(error)
      });
    }

  }

  async getData(){
    let _this = this;
    new Promise(function(resolve,reject){
      _this.fetchData(function(pages){
          resolve(pages);
      });
    });

    // this.ctx.body = pages.slice(0,totalPage);
  }

  async analyse(){
    await this.getData()
    let arr = [].concat(...pages);
    arr.forEach(item=>{
      
    })
    this.ctx.body = arr
  }

}

module.exports = CheerioController;