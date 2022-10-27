import './style.css';

const load = () => {
  let upTo = 0;
  const digits = document.getElementById('loaderBarDigits');
  const int = setInterval(count, 30);
  function count() {
    upTo += 1;
    if (digits) digits.innerHTML = upTo.toString();
    if (upTo === 100) {
      clearInterval(int);
    }
  }
  setTimeout(() => {
    document.getElementById('loaderBar')?.classList.add('load');
  }, 200);
  setTimeout(() => {
    document.getElementById('loaderOverlay')?.classList.add('load');
  }, 3500);
};

load();
