var loginPopup = document.querySelector(".main-popup-form");
var loginButton = document.querySelector(".button-for-popup");
var loginOverlay = document.querySelector(".page-overlay");
loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    loginPopup.classList.add("main-popup-form-visible");
    loginOverlay.classList.add ("page-overlay-visible");
});

var loginExit = document.querySelector("#X-big");
loginExit.addEventListener("click", function(e) {
    e.preventDefault();
    loginPopup.classList.remove("main-popup-form-visible");
    loginOverlay.classList.remove("page-overlay-visible");
});
loginOverlay.addEventListener("click", function(e) {
    e.preventDefault();
    loginPopup.classList.remove("main-popup-form-visible");
    loginOverlay.classList.remove("page-overlay-visible");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    if (loginPopup.classList.contains("main-popup-form-visible")) {
    loginPopup.classList.remove("main-popup-form-visible");
    loginOverlay.classList.remove("page-overlay-visible");
    }
    }
    }); 