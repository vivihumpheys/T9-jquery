
$('document').ready(function () {

    $('h1').css('color', 'pink').delay('2000').fadeIn('slow')
    
    //chamando por classe
    $('.item1').click(function () {
        $('body').css('background', 'blue')
        
    })
    
    //chamando por id
    $('#item2').css('color', 'green')
    
    //chamando por todos os elementos e criando um objeto 
    //para alterar varias propriedades do estilo
    $('*').css({
        padding: '10px',
        display: 'flex'
        
    })
})