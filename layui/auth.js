let _tokenKey = 'token'
var host = 'http://120.27.210.67:';
var prot = '8000';

function getToken() {
  let token = ''
  let tk = $.cookie(_tokenKey);
  console.log($.cookie(_tokenKey))
  if ( tk != null ){
    let cs = tk.split(';')
    for (let i = 0; i < cs.length; i++) {
      let list = cs[i].split('=');
      if(list[0].trim() === _tokenKey){
        token = list[1];
      }
    }
  }


  if(token === '' || token == null){
    alert('您未登录！');
    var url = window.location.href;
    var index = url.lastIndexOf('/');
    var base = '';
    if ( index > 0 ){
      base = url.substring(0, index);
    }
    // $(location).attr('href', base + '/login/login.html');
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
    $(location).attr('href', base + '/login/login.html');

  }



}
