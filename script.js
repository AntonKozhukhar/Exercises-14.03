'use strict';

/* 1. Добавить в конце Url параметры index.html?name=Ivan&phone=1234567
Написать функцию, которая будет брать данные из url и возвращать объект key:value.
Пример
{
name: ‘Ivan’,
phohe: ‘1234567’
} */

/* let str = window.location.search;
function getParams(url) {
	let obj = {};
	url = url.slice(1).split('&');

	for (let i = 0; i < url.length; i++) {
		let key = url[i].split('=');
		obj[key[0]] = key[1];
	}
	return obj;
}
console.log(getParams(str)); */

/* 2. Написать функцию, которая вернет  массив объектов(с ключами имя ссылки, и ссылка)
Пример:
[{
	name: 'Product1',
	link: 'http://link.com/product1'
}] */

/* let links = document.getElementsByTagName('a');
function getArr(element) {
	let arr = [];
	for (let i = 0; i < element.length; i++) {
		let obj = {};
		let name = element[i].innerHTML;
		let href = element[i].getAttribute('href');
		obj.name = name;
		obj.link = href;
		arr.push(obj);
	}
	return arr;
}
console.log(getArr(links)); */

/* 3. Дана таблица с пользователями с двумя колонками: имя и фамилия.  Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table). */

let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');

table.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(td2);

table.addEventListener('click', function (e) {
	if (e.target.tagName == 'TD') {
		e.target.innerHTML = prompt('Enter value');
	}
});
