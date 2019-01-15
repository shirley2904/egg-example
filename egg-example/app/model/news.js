module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const NewsSchema = new Schema({
        news_id:{type:String},
        url:{type:String},
        title:{type:String},
        avator:{type:String},
        count_of_visits:{type:Number},
    });

    return mongoose.model('News',NewsSchema,'news');
}