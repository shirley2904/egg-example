module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        user_id:{type:String},
        username:{type:String},
        password:{type:String},
        nickname: {type:String},
        email: {type:String},
        phone: {type:String},
        user_info: {type:String},
        comment: {type:String},
        create_time: {type:String},
        update_time: {type:String},
    });

    return mongoose.model('User',UserSchema,'student');
}