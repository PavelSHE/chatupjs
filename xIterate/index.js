module.exports = function (context, req) {
    const badStatusMsg = "Please pass an r param on the query string with a value between 0 and 4";
    const badStatus = msg => ({
        status: 400,
        body: msg
    });
    context.log('JavaScript HTTP trigger function processed a request.');
    let r =  Number(req.query.r);
    if(!r){
        r = 2.7
    }
    if (r < 0 || r > 4.0) {
        context.res = badStatus(badStatusMsg);
    }
    else {
        let x = Math.random(), iterations = 100, result = [];
        while (iterations-- > 0) {
            let xn = x * r * (1.0 - x);
            result.push(xn);
            x = xn;
        }
        context.res = {
            status: 200,
            body: result.splice(10)
        };
    }
    context.done();
};