if (window.location.href.indexOf("sme.sk") !== -1) {
  setTimeout(() => {
    const annoyingPopup = document.getElementsByClassName("fc-ab-root")[0];
    const articleBody = document.getElementsByTagName("body")[0];

    if (annoyingPopup && articleBody) {
      annoyingPopup.style = "display: none !important;";
      articleBody.style = "overflow: auto;";
    }
  }, 1000);
}
