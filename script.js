'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const limparFormulario = () =>{
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const pesquisarCep = async() =>{
    const cep = document.getElementById('cep').value;
    if(cep.length !== 8){
        alert('CEP Inválido');
        limparFormulario();
        return;
    }
    
    const url = `http://viacep.com.br/ws/${cep}/json`;
    const dados = await fetch(url);
    const endereco = await dados.json();

    if(endereco.erro == "true"){
        alert('CEP Não Encontrado');
        limparFormulario();
        return;
    }
    
    preencherFormulario(endereco);
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);