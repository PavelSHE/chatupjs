const rp = require('request-promise');

const profileExtractPropsList = ["id","givenName","surname","userPrincipalName"];

module.exports = function (context, req) {
    let token = "Bearer " + context.bindings.graphToken;

    let options = {
        uri: 'https://graph.microsoft.com/v1.0/me/',
        headers: {
            'Authorization': token
        }
    };

    rp(options)
        .then(function(profile) {
            var objProfile = JSON.parse(profile);
            // un-comment to see all properties in console
            // Object.keys(objProfile).map(function(key,index){
            //     context.log(key + " : " + objProfile[key]);
            // });
            var filtered = Object.keys(objProfile)
                .filter(key => profileExtractPropsList.includes(key))
                .reduce((obj, key) => {
                    return {
                        ...obj,
                        [key]: objProfile[key]
                    };
                },
            {});
            context.res = {
                body:filtered
            };
            context.done();
        })
        .catch(function(err) {
            context.res = {
                status: 500,
                body: {"error":"graph responce error","fullError":err}
            };
            context.done();
        });
};