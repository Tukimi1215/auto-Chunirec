//htmlの要素を追加
/*let section = document.createElement("section");
section.setAttribute("id", "info")
section.innerHTML = "<button> Push </button>"
document.body.appendChild(section);

let test = document.createElement("section");
test.innerHTML = "<h1> あいうえお </h1>"
document.body.appendChild(test);


//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
/*var access = $.cookie('access')
if (!access) {
  flag = true;
  $.cookie('access', false);
} else {
  flag = false
}*/

//モーダル表示
/*$(".modal-open").modaal({
  start_open: flag, // ページロード時に表示するか
  overlay_close: true,//モーダル背景クリック時に閉じるか
  before_open: function () {// モーダルが開く前に行う動作
    $('html').css('overflow-y', 'hidden');/*縦スクロールバーを出さない*/
/*  },
after_close: function () {// モーダルが閉じた後に行う動作
  $('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
/*  }*/
/*});*/

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: "script.js" });
});


