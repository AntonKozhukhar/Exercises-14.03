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

let links = document.getElementsByTagName('a');

function getArr(element) {
	let arr = [];
	for (let i = 0; i < element.length; i++) {
		let obj = {};
		let name = element[i].innerHTML;
		let href = element[i].getAttribute('href');
		obj.name = name;
		obj.link = href.slice(1, -1);
		arr.push(obj);
	}
	return arr;
}

console.log(getArr(links));
