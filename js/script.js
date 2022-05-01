// Função de click responsável por fazer o texto todo do resumo aparecer ↴
function abrirTexto() {
    let verMais = document.querySelector('.ver-mais');
    let fecharTexto = document.querySelector('.link-ver-mais');

    if(verMais.style.display === 'block') {
        verMais.style.display = 'none';
    } else {
        verMais.style.display = 'block';
        fecharTexto.style.display = 'none';
    }
}

// Função de click responsável por realizar o dropdown de idioma ↴
function dropdown() {
    let abrirDropdown = document.querySelector('.dropdown');

    if(abrirDropdown.style.display === 'block') {
        abrirDropdown.style.display = 'none';
    } else {
        abrirDropdown.style.display = 'block';
    }
}

// Função de click responsável pela área de discussões ↴
function topico() {
    let criarTopico = document.querySelector('.area-discussoes');
    let escreverTopico = document.querySelector('.escrever-discussao');

    if(criarTopico.style.display === 'flex') {
        criarTopico.style.display = 'none';
    } else {
        criarTopico.style.display = 'none';
        escreverTopico.style.display = 'flex';
    }
}

// Função de click responsável por validar o formulário e fazer aparecer a tela de sucesso de envio ↴
function enviarDiscussao() {
    let assunto = document.querySelector('.assunto-input');
    let conteudo = document.querySelector('.conteudo-textarea');
    let form = document.querySelector('.formulario');
    let ocultarForm = document.querySelector('.escrever-discussao');
    let topicoEnviado = document.querySelector('.container-topico-enviado');
    let adicionarTopico = document.querySelector('.topico-enviado-usuario');

    if(assunto.value == "" ) {
        alert("Por favor preencha o campo de assunto.");
        assunto.focus();
        return;
    } if(conteudo.value == "" ) {
        alert("Por favor preencha o campo de conteúdo.");
        conteudo.focus();
        return;
    }

    if (form == true) {
        ocultarForm.style.display === 'flex'
    } else {
        ocultarForm.style.display = 'none';
        topicoEnviado.style.display = 'flex';
        adicionarTopico.style.display = 'flex';
    }
}

// Função de click responsável por limpar os input text do formulário quando cria um novo tópico ↴
function limparForm() {
    document.querySelector('.assunto-input').value = "";
    document.querySelector('.conteudo-textarea').value = "";
}

// Função de click usada para criar um novo topico ↴
function novoTopico() {
    let topicoEnviado = document.querySelector('.container-topico-enviado');
    let escreverTopico = document.querySelector('.escrever-discussao');

    if(topicoEnviado.style.display === 'none') {
        topicoEnviado.style.display = 'flex';
    } else {
        topicoEnviado.style.display = 'none';
        escreverTopico.style.display = 'flex';
        limparForm();
    }
}

// Função de click usada para editar o tópico enviado ↴
function editarTopico() {
    let topicoEnviado = document.querySelector('.container-topico-enviado');
    let escreverTopico = document.querySelector('.escrever-discussao');

    if(topicoEnviado === 'flex') {
        escreverTopico.style.display = 'flex';
    } else {
        topicoEnviado.style.display = 'none';
        escreverTopico.style.display = 'flex';
    }
}

// Funções de click usadas para alterar a quantidade de likes ↴
function darLike() {
    numero = 1;
    numero++;
    document.querySelector('.likes').innerHTML = numero+' likes';
}

function darLike2() {
    numero = 4;
    numero++;
    document.querySelector('.likes2').innerHTML = numero+' likes';
}

//  Funções de clicks usadas para mostrar as respostas das discussões ↴
function mostrarResposta1()  {
    document.querySelector('.container-respostas1').style.display = 'flex';
}

function mostrarResposta2() {
    document.querySelector('.container-respostas2').style.display = 'flex';
}