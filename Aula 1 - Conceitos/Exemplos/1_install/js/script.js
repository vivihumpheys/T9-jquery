//JS

function helloJavaScript () {
    alert ('hello world')
}

//jQuery
//ready
//Espera o DOM estar 100% carregado para realizar uma ação

$(document).ready(function (){
    alert ('hello world em jQuert')
});

//ou

$(document).ready(helloJavaScript);

//ou
$(function (){
    alert ('eu sou um Hello world de uma função anonima')
});