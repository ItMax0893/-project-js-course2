//предусматриваем начало работы скрипта только после загрузки DOM дерева
window.addEventListener('DOMContentLoaded', function(){
    
    'use strict';
    //начинаем писать ТАБы 
    //1. Объявление переменных
    let tab = document.querySelectorAll('.info-header-tab'),        //массив пунктов меню 
        info = document.querySelector('.info-header'),              //родитель для пунктов меню
        tabContent = document.querySelectorAll('.info-tabcontent'); //массив табов
    
    //пишем функцию которая скрывает табы
    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); //удаляет класс показа у таба
            tabContent[i].classList.add('hide');    //добовляет класс скрытия таба
        }
    }

    hideTabContent(1);  //вызов функции скрытия табов с табом который необходимо оставить

    //функция для отображения табов
    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){  //если у таба прописан класс скрывающий его
            tabContent[b].classList.remove('hide');     //удаляем этот класс
            tabContent[b].classList.add('show');        //добовляем класс его показывающий
    
        }
    }
    //навешиваенм обработчик события на блок с пунктами меню пункты меню при помощи делегирования события
    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){    //проверяем что элемент на который мы кликаем имеет данный сласс
            for (let i = 0; i < tab.length; i++){                       //перебераем все меню (табы)
                if(target == tab[i]){                                   //сверяем сверяем переменную target с табом на который кликнули
                    hideTabContent(0);                                  //скрываем все табы
                    showTabContent(i);                                  //отображаем тот таб из массива индекс которого совпал с индексом нажатого пункта меню
                    break;
                }
            }
        }
    });


});