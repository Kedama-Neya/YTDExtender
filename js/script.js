const InitCheck = setInterval(Loaded, 1000);

function Loaded() {
  var descriptionElement = document.querySelector('ytd-expander.style-scope.ytd-video-secondary-info-renderer');
  var moreButton = document.querySelector('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer');
  if (descriptionElement != null) {
    descriptionElement.removeAttribute('style');
    var dEFlag = 1;
    console.log("[YTDExtender] 概要欄を展開しました。")
  };
  if (moreButton != null) {
    moreButton.remove();
    var mBFlag = 1;
    console.log("[YTDExtender] もっと見るボタンを削除しました。")
  };
  if (dEFlag == 1 && mBFlag == 1) {
    clearInterval(InitCheck);
    console.log("[YTDExtender] 処理を完了しました。")
  }
};
