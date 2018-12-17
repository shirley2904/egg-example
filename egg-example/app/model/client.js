module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ClientSchema = new Schema({
        clientId: {type: String, unique: true},
        clientSecret: {type: String}, 
        redirectUri: {type: String}, 
        grants: {type: String}, 
    });

    ClientSchema.getClient = async function (clientId,clientId) {
        console.warn("11111111111")
        let params  = {
            clientId:clientId
        }

        if(clientSecret){
            params.clientSecret = clientSecret
        }

        const client = await this.findOne({
            where:params
        })
        return client
    }

    return mongoose.model('Client',ClientSchema,'client');
}