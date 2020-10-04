// document.getElement('.circle').onclick = plusMenu();

// function plusMenu(){
// 	alert('клик!');
// }

// document.querySelector('')addEvenListener('sobytie', 'obrabotchick- obj ili func')
// document.getElementByClassName('class')[тут можно указать какой по счету будет элент если их несколько от0];
// //.innerHtml- функция которая получает собыитие тега//
// //.value - обращение к содержимому инпута//

// штука для присваивания класса нескольким элементам
// let element = document.querySelectorAll('.text');
// 	element.forEach(function(item, i, element) {
//  		item.onclick = function(){
// 			item.classList.toggle('color');
// 		}
// 	});

document.querySelector('.header__burger').addEventListener('click', function(){
	document.querySelector('.header__burger').classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
})
