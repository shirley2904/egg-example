module.export = app =>{

    class Model{
        constructor(ctx){
            this.ctx = ctx;
        }

        async getClient(clientId, clientSecret) {
            // const client = nconf.get('client');
            // if (clientId !== client.clientId || clientSecret !== client.clientSecret) {
            //   return;
            // }
            try {
                console.log("1"+clientId)
                console.log("-------------------")
                console.log("2"+clientSecret)
                const client = await this.ctx.Model.Client.getClient(clientId, clientSecret);
                if(!client){
                    return false;
                }
                return{
                    id:client.clientId,
                    redirectUris:client.redirectUri.split(','),
                    grants:client.grants.split(',')
                }
            } catch (error) {
                return false
            }
            // return client;
        }

        async getUser(username, password) {
            //const user = nconf.get('user');
            console.log("3"+username)
            console.log("4"+password)
            const user = await ctx.model.User.find({username:uname});

            if (username !== user.username || password !== user.password) {
              return;
            }
            return { userId: user.user_id };
        }

        async getAccessToken(bearerToken) {
            // const token = nconf.get('token');
            try {
                const user = await ctx.model.AccessToken.getAccessToken(bearerToken);
                if (!token) return
                return {
                    accessToken: token.accessToken,
                    accessTokenExpiresAt: token.accessTokenExpiresAt,
                    scope: token.scope,
                    client: {
                        id: token.clientId
                    },
                    user: {
                        id: token.userId
                    }
                }
            } catch (err) {
                return false
            }
        
            // token.accessTokenExpiresAt = new Date(token.accessTokenExpiresAt);
            // token.refreshTokenExpiresAt = new Date(token.refreshTokenExpiresAt);
            // const user = nconf.get('user');
            // const client = nconf.get('client');
            // token.user = user;
            // token.client = client;
            // return token;
        }

        async saveToken(token, client, user) {
            console.log("5"+token)
            console.log("6"+client)
            console.log("7"+user)
            const _token = Object.assign({}, token, { user }, { client });

            // const user = await ctx.model.AccessToken.update({userId:user.user_id},{
            //     username:username,
            //     password:password
            //   });

            // nconf.set('token', _token);
            // nconf.save();
            return _token;
        }

        async revokeToken(token) {}

        async getAuthorizationCode(authorizationCode) {}

        async saveAuthorizationCode(code, client, user) {}

        async revokeAuthorizationCode(code) {}
    }
    
    return Model;
};
