// Завдання 4: Модальне вікно реєстрації

const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeBtn');
const regForm = document.getElementById('regForm');

function openModal() {
  overlay.classList.add('active');
}

function closeModal() {
  overlay.classList.remove('active');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

function isValidEmailFormat(email) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nickname = document.getElementById('nickname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!nickname || !email || !password || !confirmPassword) {
    alert('Будь ласка, заповніть всі поля.');
    return;
  }

  if (!isValidEmailFormat(email)) {
    alert('Будь ласка, введіть коректну електронну адресу.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Паролі не співпадають.');
    return;
  }

  console.log('Реєстрація успішна!', { nickname, email });
  regForm.reset();
  closeModal();
});
