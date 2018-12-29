const Controller = require('egg').Controller;
const cheerio = require('cheerio');

class CheerioController extends Controller {

  async filterData(){
    let url="https://cnodejs.org/";
    const result = await this.ctx.curl(url);

    var $ = cheerio.load(result.data.toString(),{decodeEntities:false});

    this.ctx.body = $('.topic_title').text();
  }

}

module.exports = CheerioController;