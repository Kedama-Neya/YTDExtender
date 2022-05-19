window.addEventListener('load', main, false);

function main() {
  const InitCheck = setInterval(Loaded, 1000);
  function Loaded() {
    var descriptionElement = document.querySelector('ytd-expander.style-scope.ytd-video-secondary-info-renderer');
    var moreButton = document.querySelector('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer');
    if (descriptionElement != null) {
      descriptionElement.removeAttribute('style');
    };
    if (moreButton != null) {
      moreButton.remove();
    };
  };
};