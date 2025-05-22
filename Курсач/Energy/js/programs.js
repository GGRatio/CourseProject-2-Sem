// Получаем элементы
const modal = document.getElementById('phoneModal');
const modalClose = document.getElementById('modalClose');
const buttons = document.querySelectorAll('.programs__button');

// Показ формы
buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex'; 
    });
});

// Закрытие формы
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне формы
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});