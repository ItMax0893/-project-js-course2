 


    let form1 = document.querySelector('#form'); //переменная формы на странице
    let form2 = document.querySelector('.main-form');
    function getForm(form){
        let message = {
            loading: 'Загрузка...',
            succes: 'Спасибо! мы скоро с вани свяжемся!',
            foulture: 'Что-то пошло не так'
        };
        let inpit = form.getElementsByTagName('input'),  // переменная input'ов в данной форме
            statusMessage = document.createElement('div');//созданм новый элемент в котором будем выводить сообщения
            statusMessage.classList.add('status');         //навешиваем на него класс
            //на форму навешиваем обработчик события при отправки формы, именно на форму, а не на кнопку отправки
            let formData = new FormData(form); //создаем новый объект при помощи конструктора formData, который собирает все данные с формы
        form.addEventListener('submit', function(event){
            event.preventDefault(); //отменяем стандартное поведение при нажатии кнопки, а именно перезагрузку страницы
            form.appendChild(statusMessage); //добовляем созданный элемент с сообщение в Форму
  
            
            
            function postData(data){
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest(); // создаем объект XHR
                    request.open('POST', '/server.php'); // используем метод с помощью которого формируем запрос отправки(получения) на(с) сервер
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // 
                    
                    //создаем промежуточный объект и при помощи метода forEach записываем в обект formData
                    let obj = {};
                    data.forEach(function(value, key){
                        obj[key] = value;
                    });
                    //создаем новую переменную в которую помещаем объект obj в json формате
                    let json = JSON.stringify(obj);
                    //request.send(json);            //при помощи метода send отправляем запрос с телом формы


                    request.onreadystatechange = function (){
                        //условия: 1.если текущее состояние запроса < 4, 2 === 4 и все выполнено без ошибок
                        if(request.readyState < 4){
                          resolve()
                        }else if(request.readyState === 4){
                            if(request.status == 200){
                                resolve()
                            }else{
                                reject()
                            }    
                        }
                        
                    }
                    request.send(json);
                });
            }

            function clerInput(){
                for (let i = 0; i< inpit.length; i++){
                    inpit[i].value = '';
                }
            }
            postData(formData)
                .then(()=>statusMessage.innerHTML = message.loading)
                .then(()=>statusMessage.innerHTML = message.succes)
                .catch(()=>statusMessage.innerHTML = message.foulture)
                //.then(clerInput)
            
        });
            
    }
    getForm(form1);
    getForm(form2);
        