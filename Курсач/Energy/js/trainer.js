
  const trainerButtons1 = document.querySelectorAll('.trainer__button1');
  const trainerButtons2 = document.querySelectorAll('.trainer__button2');
  const trainerButtons3 = document.querySelectorAll('.trainer__button3');
  const trainerButtons4 = document.querySelectorAll('.trainer__button4');

  trainerButtons1.forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = "personality.html?id=1";
      });
  });

  trainerButtons2.forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = "personality.html?id=2";
      });
  });

  trainerButtons3.forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = "C:/Users/burbl/Desktop/Курсовой проект/Energy/main.html";
      });
  });

  trainerButtons4.forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = "personality.html?id=4";
      });
  });
