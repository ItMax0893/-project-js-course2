

//задание
/*
У вас есть код:
<input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();
Выведите на экран правильное сообщение, которое берет значение из input
*/

//решение
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
let age = showUser.bind(document.getElementById('age'));
age('max', 'das');