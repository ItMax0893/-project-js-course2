
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let deadline = '2020-7-01'; //создаем пересенную дедлайна

    //создаем функцию котора высчитвыает время
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()), // вычесляем количество времени оставшееся до дедлайна в мс
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60))%24),
            day = Math.floor((t/(1000*60*60*24)));
        // возвращаем объект который содержит в себе значения времени    
        return {
            'total' : t,
            'day' : day,
            'hours' : hours,
            'minutes' :minutes,
            'seconds' : seconds
        };
    }
    // создаем функцию которая динамически пставляет значения вчемени в верстку
    function setCloock(id, endtime){
        let timer = document.getElementById(id),
            day = timer.querySelector('.day'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        //создаем функцию котора вызывается каждую секунду и обновляет таймер и записывает в верстку
        function updateClock(){
            let t = getTimeRemaining(endtime);
            
            if(t.day<=9){
                day.textContent = '0' + t.day;
            }else{
                day.textContent = t.day;
            }
            if (t.hours<=9){
                hours.textContent = '0' + t.hours;    
            }else{
                hours.textContent = t.hours;
            }
            if (t.minutes<=9){
                minutes.textContent = '0' + t.minutes;
            }else{
                minutes.textContent = t.minutes;
            }
            if (t.seconds<=9){
                seconds.textContent = '0' + t.seconds;   
            }else{
                seconds.textContent = t.seconds;
            }
            if(t.total <= 0){
                clearInterval(timeInterval);
                day.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
        
    }
    setCloock('timer', deadline);
});