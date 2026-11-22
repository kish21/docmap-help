// Click a screenshot to see it whole and full size. Esc, a click or the × closes it. No outside code.
(function () {
  var imgs = document.querySelectorAll(".story img, .hero-img");
  if (!imgs.length) return;
  var box = document.createElement("dialog");
  box.className = "zoom";
  box.innerHTML = '<button type="button" class="zoom-close" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(box);
  var big = box.querySelector("img");
  box.addEventListener("click", function () { box.close(); });
  Array.prototype.forEach.call(imgs, function (img) {
    img.tabIndex = 0;
    img.title = "Click to see the whole picture";
    function open() {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      box.showModal();
    }
    img.addEventListener("click", open);
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });
})();
