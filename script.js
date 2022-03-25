const botaoLimpar = document.getElementById('clear-board');
const botaoCriaBoard = document.getElementById('generate-board');

function geraCor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const cor = `rgb(${red}, ${green}, ${blue})`;
  return cor;
}

function selecionaCor(event) {
  const corSelecionada = document.getElementsByClassName('selected');
  corSelecionada[0].classList.remove('selected');
  event.target.classList.add('selected');
}

function criaPaleta(numCores) {
  const quadroDePixels = document.getElementById('color-palette');
  let novaCor;
  for (let i = 1; i <= numCores; i += 1) {
    novaCor = document.createElement('div');
    if (i === 1) {
      novaCor.classList = 'color selected';
      novaCor.style.backgroundColor = 'black';
    } else {
      novaCor.classList = 'color';
      novaCor.style.backgroundColor = geraCor();
    }
    novaCor.addEventListener('click', selecionaCor);
    quadroDePixels.appendChild(novaCor);
  }
}

function pintaPixels(event) {
  const corSelecionada = document.getElementsByClassName('selected');
  const evento = event.target;
  if (
    event.target.style.backgroundColor
    !== corSelecionada[0].style.backgroundColor
  ) {
    evento.style.backgroundColor = corSelecionada[0].style.backgroundColor;
  } else {
    evento.style.backgroundColor = 'white';
  }
}

function criaPixels(area) {
  const quadroDePixels = document.getElementById('pixel-board');
  quadroDePixels.innerHTML = '';
  let novoPixel;
  const larguraMaxima = ((area + 1) * 40);
  quadroDePixels.style.maxWidth = `${larguraMaxima}px`;
  for (let i = 1; i <= area; i += 1) {
    for (let k = 1; k <= area; k += 1) {
      novoPixel = document.createElement('div');
      novoPixel.classList = 'pixel';
      quadroDePixels.appendChild(novoPixel);
      novoPixel.addEventListener('click', pintaPixels);
    }
  }
}

function limpaPixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function validaInput() {
  if (document.getElementById('board-size').value === '') {
    alert('Board inválido!');
  }
  let areaPixels = parseInt(document.getElementById('board-size').value, 10);
  if (areaPixels < 5) {
    areaPixels = 5;
  } else if (areaPixels > 50) {
    areaPixels = 50;
  }
  criaPixels(areaPixels);
}

criaPaleta(4);

criaPixels(5);

botaoLimpar.addEventListener('click', limpaPixels);

botaoCriaBoard.addEventListener('click', validaInput);
