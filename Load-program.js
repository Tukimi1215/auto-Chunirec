//アクセス回数を管理
let accessCount = 0;
accessCount = localStorage.getItem('localAccessCount');
//以前のアクセス日との比較
let day = new Date();
if (localStorage.getItem('cloudTime') < day) {
  accessCount = 0;
  executionChunirec();
} else {
  executionChunirec();
}




//日付やカウントのセーブ
function timeSaveDate() {
  localStorage.setItem('cloudTime', day);
  localStorage.setItem('localAccessCount', accessCount);
};

//本体起動
function executionChunirec() {
  if (accessCount < 4) {
    const confirmation = window.confirm("chunirecを起動しますか?");
    if (confirmation) {
      let el = document.createElement("script");
      el.src = "https://chunirec.net/js/updr.js";
      document.body.appendChild(el);
      accessCount += 1;
    };
  };
};

document.body.addEventListener('keydown',
  event => {
    if (event.key === 'm' && event.ctrlKey) {
      localStorage.clear();
      alert("リセットしました。");
    };
  });


//日付やカウントを保存
timeSaveDate();


