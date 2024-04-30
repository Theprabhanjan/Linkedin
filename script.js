function smoothScrolling() {
  const scroll = new LocomotiveScroll({
    // el: document.querySelector(['#main']),
    el: document.querySelector(["#page1", "#page2"]),
    smooth: true,
  });
}
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 6000);
}


smoothScrolling();
loaderAnimation();
