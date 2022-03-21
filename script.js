const botaoLimpar = document.getElementById('clear-board');

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
  if (
    event.target.style.backgroundColor
    !== corSelecionada[0].style.backgroundColor
  ) {
    event.target.style.backgroundColor = corSelecionada[0].style.backgroundColor;
  } else {
    event.target.style.backgroundColor = 'white';
  }
}

function criaPixels(linha, coluna) {
  const quadroDePixels = document.getElementById('pixel-board');
  let novoPixel;
  const larguraMaxima = (coluna + 1) * 40;
  quadroDePixels.style.maxWidth = `${larguraMaxima}px`;
  for (let i = 1; i <= linha; i += 1) {
    for (let k = 1; k <= coluna; k += 1) {
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

criaPixels(5, 5);

criaPaleta(4);

botaoLimpar.addEventListener('click', limpaPixels);
