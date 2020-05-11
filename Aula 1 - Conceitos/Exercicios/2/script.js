/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/

$(document).ready(function () {
  //selecionando elemento img pelo id
  $('#botao').click(function () {
    //toggle para mudar a cor de fundo
    $('body').toggleClass('background');

    //if para o h1 voltar pra ligado
    if ($('h1').text('Ligado')) {
      //mudando o atributo da img
      $('.imagem').attr('src', 'https://media.giphy.com/media/3oz8xtprbtd0wEWOoU/giphy.gif');
      $('h1').text('Desligou, anjo!')
    } else {
      $('h1').text('Ligado');
      $('.imagem').attr('src', 'https://media.giphy.com/media/9372Cof6Fyaj5cEQLu/giphy.gif');
    }


  })







})