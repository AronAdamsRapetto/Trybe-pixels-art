function pintaPixels(event){
    let corSelecionada = document.getElementsByClassName('selected');
    if(event.target.style.backgroundColor !== corSelecionada[0].style.backgroundColor){
        event.target.style.backgroundColor = corSelecionada[0].style.backgroundColor;
    } else {
        event.target.style.backgroundColor = 'white';
    }
}

function geraCor(){
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let cor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return cor;
}

function criaPaleta(numCores){
    let quadroDePixels = document.getElementById('color-palette');
    let novaCor;
    for(let i = 1; i <= numCores; i += 1){
        novaCor = document.createElement('div');
        if(i === 1){
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

function selecionaCor(event){
    let corSelecionada = document.getElementsByClassName('selected');
    corSelecionada[0].classList.remove('selected');
    event.target.classList.add('selected');
}

function criaPixels(linha, coluna){
    let quadroDePixels = document.getElementById('pixel-board');
    let novoPixel;
    larguraMaxima = (coluna + 1) * 40;
    quadroDePixels.style.maxWidth = larguraMaxima + 'px';
    for(let i = 1; i <= linha; i += 1){
        for(let k = 1; k <= coluna; k += 1){
            novoPixel = document.createElement('div');
            novoPixel.classList = 'pixel';            
            quadroDePixels.appendChild(novoPixel);
            novoPixel.addEventListener('click', pintaPixels);
        }
    }
}

criaPixels(5, 5);

criaPaleta(4);