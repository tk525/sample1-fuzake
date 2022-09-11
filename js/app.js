// グローバルIPアドレス取得
// https://iwb.jp/javascript-ipinfo-jquery-axios/
window.addEventListener("load", function(){
    // document.getElementById("message").innerHTML = "ページ読み込みが完了したよ！";


    fetch('https://ipinfo.io?callback')
    .then(res => res.json())
    .then(json => document.getElementById("ipaddress").innerHTML = json.ip)

});


