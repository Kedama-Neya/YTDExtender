window.addEventListener('load', main, false);

function main() {
  const InitCheck = setInterval(Loaded, 1000);
  function Loaded() {
    if (document.querySelector('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer') != null) {
      document.querySelector('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer').click(function(){console.log()});
    };
  };
  window.removeEventListener('load', main, false)
}