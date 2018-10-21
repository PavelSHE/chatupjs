module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //context.log(req.headers);
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: req.headers//"Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            //status: 400,
            body: req.headers 
        };
    }
};