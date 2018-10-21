const rp = require('request-promise');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //context.log(req.headers);
    rsp = req.headers
    let token = "Bearer " + context.bindings.graphToken;
    let options = {
        uri: 'https://graph.microsoft.com/v1.0/me/',
        headers: {
            'Authorization': token
        }
    };
    
    rp(options)
        .then(function(profile) {
            context.res = {
                body: profile
            };
            context.done();
        })
        .catch(function(err) {
            context.res = {
                status: 500,
                body: err
            };
            context.done();
        });

    // if (req.query.name || (req.body && req.body.name)) {

    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
            
    //         body: rsp//"Hello " + (req.query.name || req.body.name)
    //     };
    // }
    // else {
    //     context.res = {
    //         //status: 400,
    //         body: rsp 
    //     };
    // }
};