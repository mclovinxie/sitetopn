(function () {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith("en")) {
    window.location.href = "index-en.html";
  } else if (lang.startsWith("ja")) {
    window.location.href = "index-ja.html";
  } else if (lang.startsWith("ko")) {
    window.location.href = "index-ko.html";
  } else {
    window.location.href = "index.html";
  }
})();