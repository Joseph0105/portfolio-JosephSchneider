function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const cvLink = document.querySelector(".CV-link");
  const cvIframe = document.querySelector(".cv-iframe");
  const cvModal = document.querySelector(".cv-modal");
  const cvContainer = document.querySelector(".cv-container");

  if (isMobileDevice()) {
    cvLink.href = cvIframe.getAttribute("data-src");
    cvLink.setAttribute("download", "");
  } else {
    cvLink.addEventListener("click", function (e) {
      e.preventDefault();
      cvIframe.src = cvIframe.getAttribute("data-src");
      cvModal.style.display = "block";
    });

    cvModal.addEventListener("click", function (e) {
      if (e.target === cvContainer) {
        return;
      } else {
        cvModal.style.display = "none";
      }
    });
  }
});
