let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalVal = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalVal.innerHTML = 0;




    persons.addEventListener('input', function(){
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if(restDays.value == '' || personsSum == 0){
            totalVal.innerHTML = 0;
        }else{
            totalVal.innerHTML = total;
        }
    });
    restDays.addEventListener('input', function(){
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if(persons.value == '' || daysSum == 0){
            totalVal.innerHTML = 0;
        }else{
            totalVal.innerHTML = total;
        }
       
    });






place.addEventListener('change', function(){
    if(personsSum.value == '' || restDays.value == ''){
        totalVal.innerHTML = 0;    
    }else{
        let a = total;
        totalVal.innerHTML = a * this.options[this.selectedIndex].value;
    }
});
