module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const TokenSchema = new Schema({
        accessToken: {type:String},
        accessTokenExpiresAt: {type:String},
        refreshToken: {type:String},
        refreshTokenExpiresAt: {type:String},
        user: {type:Object},
        client: {type:Object},
    });

    return mongoose.model('Token',TokenSchema,'token');
}