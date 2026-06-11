// Создаём 15 сердечек
for (let i = 0; i < 15; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Случайные позиции по экрану
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';

  // Случайная задержка анимации
  heart.style.animationDelay = Math.random() * 5 + 's';

  document.body.appendChild(heart);
}

document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noBtn');

    function moveNoButton() {
        // Получаем размеры окна
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Размеры кнопки
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Случайные координаты (с учётом размеров кнопки и отступов)
        const maxX = windowWidth - buttonWidth - 40;
        const maxY = windowHeight - buttonHeight - 80;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Применяем новые позиции
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }

    // Обработчик наведения курсора на кнопку «Нет»
    noButton.addEventListener('mouseenter', moveNoButton);

    // Обработчик клика на кнопку «Да»
    document.getElementById('yesBtn').addEventListener('click', function() {
        alert('Ура! Я очень рад! ❤️');
    });
});
