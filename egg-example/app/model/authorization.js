module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const AuthorizationSchema = new Schema({
        provider:{type: String}, 
        uid: {type: String}, 
        user_id: {type: String}, 
    });

    return mongoose.model('Authorization',AuthorizationSchema,'authorization');
}