/*
headers = {"Accept-Encoding": "gzip, deflate", "Content-Length": "45", "Content-Type": "application/x-www-form-urlencoded", "Host": "app.zafu.edu.cn", "Connection": "close"}
formdata = 'enPassword='+password+'&userName='+username+''
url = "http://app.zafu.edu.cn/app/user/login.jhtm"
*/
var password = '126151';
var username = '202002080222';

function get_token()
{
const url = `http://app.zafu.edu.cn/app/user/login.jhtm`;
const method = `POST`;
const headers = {
"Accept-Encoding": "gzip, deflate", 
"Content-Length": "45", 
"Content-Type": "application/x-www-form-urlencoded", 
"Host": "app.zafu.edu.cn", 
"Connection": "close"
};
const body = `enPassword=${password}&userName=${username}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    //console.log(response.statusCode + "\n\n" + response.body);
    var response_body = JSON.parse(response.body);
    //console.log(response_body.data.token)
    var token = response_body.data.token;
    // console.log(token);
    // return response_body.data.token;
    return token;
    // $done();
}, reason => {
    console.log(reason.error);
    // $done();
});
}

console.log(get_token());
// get_token();
$done();