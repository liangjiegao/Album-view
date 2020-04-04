let _tokenKey = 'token'
var host = 'http://localhost:';
var prot = '8000';

function getToken() {
  // let cs = document.cookie.split(';')
  // let token = ''
  // for (let i = 0; i < cs.length; i++) {
  //   let list = cs[i].split('=');
  //   if(list[0].trim() === _tokenKey){
  //     token = list[1];
  //   }
  // }
  // if(token === '' || token == null){
  //   alert('您未登录！');
  //   let url = location.origin;
  //   location.href = `${url}/v/views/mgt/mgtLogin.html`
  // }
  return '14d0a97b4c5740f2f81530c42cb251e4'
}

function getBasicUrl() {
  return host + prot
}
