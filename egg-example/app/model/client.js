module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ClientSchema = new Schema({
        id: {type:String},
        clientId: {type:String},
        clientSecret: {type:String},
        redirectUris:  {type:Array},
        refreshTokenLifetime: Number,
        accessTokenLifetime: Number,
        grants: {type:Array},
    });

    return mongoose.model('Client',ClientSchema,'client');
}