function self_introControl() {

    // 自己紹介導入
    $('.self-intro').each(function () {        
        // 数秒後に実施 https://into-the-program.com/javascript-settimeout/
        window.setTimeout(() => {$(this).addClass("self-introRemove")}, 3000); //3秒後に実行
    });


    // 自己紹介テキスト
    $('.self-intro-txt').each(function () {        
        // 数秒後に実施 https://into-the-program.com/javascript-settimeout/
        window.setTimeout(() => {$(this).addClass("self-intro-txt_Show")}, 3000); //3秒後に実行
        window.setTimeout(() => {$(this).removeClass("self-intro-txt_Show")}, 12000); //3秒後に実行
    });
    
    // 自己紹介タイムアウト
    $('.self-intro-timeout').each(function () {        
        // 数秒後に実施 https://into-the-program.com/javascript-settimeout/
        window.setTimeout(() => {$(this).addClass("self-intro-timeout_Show")}, 12000); //2秒後に実行
    });
    $('.fade-in').each(function () {        
        // 数秒後に実施 https://into-the-program.com/javascript-settimeout/
        window.setTimeout(() => {$(this).addClass("fade-inShow")}, 12000); //2秒後に実行
    });


}


// ウィンドウ起動直後に実行する
window.addEventListener("load", function(){
    // document.getElementById("message").innerHTML = "ページ読み込みが完了したよ！";

    //コンソールログでチーターにメッセージ
    console.log("ソースで ヒント 邪道")

    document.getElementById("self-intro-sec").innerHTML = "５秒"


    // モーダル https://myscreate.com/pure-modal/
    $('#modalArea').fadeIn();


    // モーダル x 方向キーでイベント実行
    document.addEventListener(`keydown`, e => {
        let output = ``;
      
        if (e.code == `ArrowDown` || e.code == `ArrowUp`) {
            $('#modalArea').fadeOut();
            self_introControl();

        } else if (e.code == `ArrowLeft` || e.code == `ArrowRight`) {
            $('#modalArea').fadeOut();
            self_introControl();
        }
      
      });

});