const editableDiv = document.getElementById('editable-div');
const btnEdit = document.getElementById('btn-edit');

btnEdit.addEventListener('click', () => {
    const userInput = prompt('Введіть новий текст для блоку:');

    if (userInput !== null && userInput.trim() !== '') {
        editableDiv.textContent = userInput;
    }
});

const boxes = document.querySelectorAll('.box');
const btnToggle = document.getElementById('btn-toggle');
let isHidden = false;

btnToggle.addEventListener('click', () => {
    isHidden = !isHidden;

    boxes.forEach(box => {
        if (isHidden) {
            box.classList.add('hidden');
        } else {
            box.classList.remove('hidden');
        }
    });

    btnToggle.textContent = isHidden ? '👁️ Показати елементи' : '👁️ Приховати елементи';
    btnToggle.classList.toggle('is-hidden', isHidden);
});
