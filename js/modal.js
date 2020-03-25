window.addEventListener('DOMContentLoaded', function(){

    //пишем модальное окно

    //объявляем переменные
    
    let more = document.querySelector('.more'),         //кнопка вызова окна
        descBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),   //модальное окно
        close = document.querySelector('.popup-close'); //кнопка закрытия окна
        
        
        //функция открытия окна
        document.addEventListener('click', function(event){
            let target = event.target;
                if (target && target.classList.contains('description-btn') ||target && target.classList.contains('more')){
                    overlay.style.display = 'block';
                    target.classList.add('more-splash');
                    document.body.style.overflow = 'hidden';    

                }
        });

        
      
        //функция закрытия окна 
        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

});
