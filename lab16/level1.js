const btn = document.getElementById('btn-create');
const container = document.getElementById('container');

let counter = 0;

const colors = [
    ['#ff6b6b', '#ee5a24'],
    ['#ffd32a', '#f79f1f'],
    ['#0fbcf9', '#0652DD'],
    ['#0be881', '#009432'],
    ['#f53b57', '#833471'],
    ['#3c40c4', '#0652DD'],
    ['#ffdd59', '#d1ae5f'],
    ['#4bcffa', '#0395be'],
];

btn.addEventListener('click', () => {
    counter++;

    const newDiv = document.createElement('div');
    newDiv.classList.add('new-block');

    const [bg1, bg2] = colors[(counter - 1) % colors.length];

    newDiv.style.background = `linear-gradient(135deg, ${bg1}, ${bg2})`;
    newDiv.style.width = '150px';
    newDiv.style.height = '150px';
    newDiv.style.borderRadius = '16px';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'center';
    newDiv.style.fontSize = '1.8rem';
    newDiv.style.fontWeight = 'bold';
    newDiv.style.color = '#fff';
    newDiv.style.boxShadow = `0 6px 20px ${bg2}88`;
    newDiv.style.cursor = 'pointer';
    newDiv.style.userSelect = 'none';
    newDiv.style.transition = 'transform 0.2s';

    newDiv.textContent = `#${counter}`;

    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.transform = 'scale(1.08)';
    });
    newDiv.addEventListener('mouseleave', () => {
        newDiv.style.transform = 'scale(1)';
    });

    container.appendChild(newDiv);
});
