let _tokenKey = 'token';
// var host = 'http://localhost:';
var host = 'http://120.27.210.67:';
 // var prot = '8002';
var prot = '8001';

function getToken() {
  let token = getTokenInLocal();

  if(token === '' || token == null){
    alert('您未登录！');
    var url = window.location.href;
    var index = url.lastIndexOf('/');
    var base = '';
    if ( index > 0 ){
      base = url.substring(0, index);
    }
    $(location).attr('href', base + '/login.html');
  }
  return token;
}

function getTokenInLocal() {

  let token = ''
  let tk = document.cookie;
  console.log("token" + tk);
  if ( tk != null ){
    let cs = tk.split(';')
    for (let i = 0; i < cs.length; i++) {
      let list = cs[i].split('=');
      if(list[0].trim() === _tokenKey){
        token = list[1];
      }
    }
  }
  return token;
}

function getBasicUrl() {
  return host + prot
}

function checkLogin( code ) {

  if ( code == '50008' ){

    var url = window.location.href;
    var index = url.lastIndexOf('/');
    var base = '';
    if ( index > 0 ){
      base = url.substring(0, index);
    }
    $(location).attr('href', base + '/login.html');

  }



}

var ws = new WebSocket("ws://120.27.210.67:9200");
ws.onopen = function(event){
  console.log("open!");
  let token = getTokenInLocal();
  ws.send(token); //客户端给服务端推送消息

};

ws.onmessage= function(event){
  console.log("message："+event.data);
  // ws.send("15521166666"); //客户端给服务端推送消息
};

ws.onclose = function(event){
  console.log("close");
};
var int=self.setInterval("clock()",5000);
function clock()
{
  // ws.send("ping"); //客户端给服务端推送消息
  console.log("ping")
  ws.onmessage
}
