'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio');

class ReptileService extends Service {

  async filterByPage(page) {
    const { ctx, app } = this;
    let _this = this;
    let baseUrl = "https://cnodejs.org";
    let url=`${baseUrl}/?tab=all&page=${page}`;
    const result = await this.ctx.curl(url);

    let $ = cheerio.load(result.data.toString(),{decodeEntities:false});
    let dom = $('#topic_list .cell');
    let dataList = [];

    dom.each(function() {

        let tItem = {
            "url":"",
            "title":"",
            "avator":"",
            "count_of_visits":0
        }

        let url = $(this).find('.topic_title_wrapper .topic_title').attr('href')||"";
        let title = $(this).find('.topic_title_wrapper').children('a').text().replace(/[\n\r]/g,'').replace(/(^\s*)|(\s*$)/g, ""); ;
        let avator = $(this).find('.user_avatar').children('img').attr('src')||"";
        let count_of_visits = $(this).find('.reply_count').children('.count_of_visits').text().replace(/[\n\r]/g,'').trim()||""

        tItem.url = `${baseUrl}${url}`;
        tItem.title = title;
        tItem.avator = avator;
        tItem.count_of_visits = count_of_visits;

        dataList.push(tItem);

    })

    // await app.redis.set('dataList', JSON.stringify(dataList));


    // console.log(await app.redis.get('dataList'))

    // _this.saveDatabase();
    return dataList;
  }

  async saveDatabase(dataList){
    let {ctx,app } = this;
    // let cnt = await app.redis.get('dataList')
    dataList.forEach(async item => {
      await ctx.model.News.create({
          news_id:item.news_id,
          url:item.url,
          title:item.title,
          avator:item.avator,
          count_of_visits:item.count_of_visits,
        });
    });
    // const user = await ctx.model.News.create({
    //   news_id:item.news_id,
    //   url:item.url,
    //   title:item.title,
    //   avator:item.avator,
    //   count_of_visits:item.count_of_visits,
    // });
  }
 
}
module.exports = ReptileService;
