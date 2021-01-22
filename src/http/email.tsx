const axios = require('axios');

export default function sendEmail(from:string, subject:string, text:string, callback:Function):void {
    let url = 'https://v9sxpy9c11.execute-api.us-west-2.amazonaws.com/prod/Contact-Me';
    const emailInfo:Object = {
        from: from,
        subject:subject,
        text:text
    };
    var config = {
        method: 'POST',
        url: url,
        headers: { 
          'Authorization': 'AWS4-HMAC-SHA256 Credential=ASIA6LO3JVWMGZN6LWNO/20210121/us-west-2/lambda/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date;x-amz-invocation-type;x-amz-log-type, Signature=3fe2c5f7952bf8198740261f9f0cb9ab993ad977343a04ae2b9ff4732e314fd5', 
          'Content-Type': 'application/json; charset=UTF-8', 
          'Accept': 'application/json, text/plain, */*', 
        },
        data : emailInfo
      };
    axios(config)
    .then(response => {
        console.log(response);
        if(!response) {
            callback({msg: null, code: 404});
        }
        callback({msg: response.data.body, code: response.data.statusCode});
    }).catch(error =>{
        console.log(error);
        callback({msg: null, code: 404});
    });
}