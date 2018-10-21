module.exports = async function (context, req, graphToken) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //context.log(req.headers);
    rsp = req.headers
    rsp = rsp["graphToken"] = graphToken

    if (req.query.name || (req.body && req.body.name)) {

        context.res = {
            // status: 200, /* Defaults to 200 */
            
            body: rsp//"Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            //status: 400,
            body: rsp 
        };
    }
};