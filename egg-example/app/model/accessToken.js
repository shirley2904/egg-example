module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const AccessTokenSchema = new Schema({
        accessToken: {type: String}, 
        accessTokenExpiresAt:{type: String}, 
        scope: {type: String}, 
        clientId: {type: String}, 
        userId: {type: String}
    });

    return mongoose.model('AccessToken',AccessTokenSchema,'accessToken');
}