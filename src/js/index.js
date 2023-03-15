/* 
OBJETIVO: Ao clicar no botão, temo que mostrar a imagem de fundo corrrespondente

- passo 1 - dar um jeito pegar o elemento HTML dos botoes

- passo 2 - dar um jeito de identificar o clique do usuário no botão

- passo 3 - desmarcar o botão selecionado anteriormente

- passo 4 - marcar o botao clicando como se estivesse selecionado

- passo 5 - esconder a imagem anterior

- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//- passo 1 - dar um jeito pegar o elemento HTML dos botoes
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // - passo 3 - desmarcar o botão selecionado anteriormente
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //- passo 4 - marcar o botao clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        //- passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})