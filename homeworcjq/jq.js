$(document).ready(function(){
    function modal(){
        $('.overlay').css('display', 'block');
        $('.overlay').animate({opacity: '1'});
        $('.modal').css('display', 'block' );
        $('.modal').css('top', '-500px' );
        $('.modal').animate({
            top: '0'
        }, 1000); 
    }
    function nonModal(){
        $('.overlay').css('display', 'none');
        $('.modal').css('display', 'none' );
    }
    $('.main_btn').on('click', function(){
       modal();
    });
    $('.main_btna').on('click', function(){
        modal();
    });
    $('ul').find('li:eq(1)').on('click', function(){
        modal();
    });
    $('.close').on('click', function(){
        $('.modal').animate({
            top: '-500',
            display: 'none'
        },1000);
        $('.overlay').animate({
            opacity:0,
            display: 'none'
        },1000);
        
        setTimeout(nonModal, 1000);
        
    });
});