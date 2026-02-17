function pad(num) {
  return num < 10 ? '0' + num : String(num);
}

function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();

  const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0);

  const diff = newYear - now;

  if (diff <= 0) {
    document.getElementById('days').textContent    = '00';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('message').textContent = '🎉 З Новим Роком! Happy New Year! 🎉';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = pad(days);
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);

  document.getElementById('message').textContent =
    `До Нового ${currentYear + 1} Року залишилось...`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
