const square = document.querySelector('.container');
const button = document.querySelector('.button');

let step = 0;
  let posX = 0;
  let posY = 0;
  const pas = 50;

  button.addEventListener('click', function () {
    switch (step % 4) {
      case 0: // bas
        posY += pas;
        break;
      case 1: // droite
        posX += pas;
        break;
      case 2: // haut
        posY -= pas;
        break;
      case 3: // gauche
        posX -= pas;
        break;
    }

    square.style.transform = `translate(${posX}px, ${posY}px)`;
    step++;
  });
