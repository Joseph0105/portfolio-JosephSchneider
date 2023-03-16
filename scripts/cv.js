function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

const cvLink = document.querySelector('.CV-link');
const cvIframe = document.querySelector('.cv-iframe');
const cvModal = document.querySelector('.cv-modal');
const cvContainer = document.querySelector('.cv-container');
const cvClose = document.querySelector('.cv-close');
function closeCV() {
  cvClose.addEventListener('click', function (e) {
    cvModal.style.display = 'none';
  });
}
if (isMobileDevice()) {
  cvLink.addEventListener('click', function (e) {
    e.preventDefault();
    cvIframe.src = cvIframe.getAttribute('data-src');
    cvModal.style.display = 'block';
    closeCV();
  });
} else {
  cvLink.addEventListener('click', function (e) {
    e.preventDefault();
    cvIframe.src = cvIframe.getAttribute('data-src');
    cvModal.style.display = 'block';
  });

  cvModal.addEventListener('click', function (e) {
    if (e.target === cvContainer) {
      closeCV();
      return;
    } else {
      cvModal.style.display = 'none';
    }
  });
}
