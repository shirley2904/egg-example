module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ClientSchema = new Schema({
        clientId: {type: String, unique: true},
        clientSecret: {type: String}, 
        redirectUri: {type: String}, 
        grants: {type: String}, 
    });

    // Schema.static('getClient',function(){
    //     console.log('getClient')
    // })


    return mongoose.model('Client',ClientSchema,'client');
}