document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.className = 'delete-btn';
        deleteBtn.title = 'Видалити цей блок';

        deleteBtn.addEventListener('click', () => {
            block.classList.add('fade-out');

            setTimeout(() => {
                block.remove();
            }, 300);
        });

        block.appendChild(deleteBtn);
    });
});
