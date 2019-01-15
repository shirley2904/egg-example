const Subscription = require('egg').Subscription;
let pageIndex = 0;

class UpdateCache extends Subscription {
    static get schedule() {
        return {
            interval: '3s', // 1 分钟间隔
            type: 'all', // 指定所有的 worker 都需要执行
            // immediate:true
        };
    }

    async subscribe() {
        // let ctx = this.ctx;
        pageIndex++;
        // const newsList = await ctx.service.reptile.filterByPage(++pageIndex);
        console.log("------------------------------------"+pageIndex+"---")
        // if (newsList.length == 0) {
        //     ctx.logger.info('api no data');
        // } 
        // else{
        //     ctx.service.reptile.saveDatabase(newsList)
        //     console.info("保存中...")
        // }

        // this.ctx.app.cache = res.data;
    }
}

module.exports = UpdateCache;