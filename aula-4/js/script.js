const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');

nome.value = prompt('Informe seu nome');
email.value = prompt('Informe seu email');
telefone.value = prompt('Informe seu telefone');

function preencher(campo){
    campo.value = prompt(msg);
    if(campo.value == ""){
        campo.value = "Não informado";
    }
}

preencher(nome,'Informe seu nome');
preencher(email,'Informe seu email');
preencher(telefone,'Informe seu telefone');

//div - innerText (ou innerHTML)

//Funções

function limparCampos(){
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    alert('Sucesso!');
}

function verificar(){

}