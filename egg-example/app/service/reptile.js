'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio');

class ReptileService extends Service {
  
  async filterByPage(page) {

    let baseUrl = "https://cnodejs.org";
    let url=`${baseUrl}/?tab=all&page=${page}`;
    const result = await this.ctx.curl(url);

    let $ = cheerio.load(result.data.toString(),{decodeEntities:false});
    let dom = $('#topic_list .cell');
    let dataList = [];

    dom.each(function() {

        let tItem = {
            url:"",
            title:"",
            avator:""
        }

        let url = $(this).find('.topic_title_wrapper .topic_title').attr('href')||"";
        let title = $(this).find('.topic_title_wrapper').children('a').text().replace(/[\n\r]/g,'').replace(/(^\s*)|(\s*$)/g, ""); ;
        let avator = $(this).find('.user_avatar').children('img').attr('src')||"";



        tItem.url = `${baseUrl}${url}`;
        tItem.title = title;
        tItem.avator = avator;

        dataList.push(tItem);
    })

    return dataList;
  }

  async saveDatabase(data){
      let {ctx} = this;
    //   data.forEach(item => {
    //     await ctx.model.User.create({
    //         username:item.username,
    //         password:item.password
    //     });
    //   })
  }

 
}
module.exports = ReptileService;
