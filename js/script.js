
	window.onload = function () {
		document.body.classList.add('loaded_hiding');
		window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');
		}, 1000);
	}

function calendar(id, year, month) {
	var Dlast = new Date(year,month+1,0).getDate(),
			D = new Date(year,month,Dlast),
			DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
			DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
			calendar = '<tr>',
			month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
	if (DNfirst != 0) {
		for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
	}else{
		for(var  i = 0; i < 6; i++) calendar += '<td>';
	}
	for(var  i = 1; i <= Dlast; i++) {
		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
			calendar += '<td class="today">' + i;
		}else{
			calendar += '<td>' + i;
		}
		if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
			calendar += '<tr>';
		}
	}
	for(var  i = DNlast; i < 7; i++) calendar += '<td> ';
	document.querySelector('#'+id+' tbody').innerHTML = calendar;
	document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
	document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
	document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
	if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
			document.querySelector('#'+id+' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
	}
	}
	calendar("calendar", new Date().getFullYear(), new Date().getMonth());
	// переключатель минус месяц
	document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
		calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
	}
	// переключатель плюс месяц
	document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
		calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
	}
	// calendar
$(document).ready(function(){
	

	let Menu = {
  
		el: {
			ham: $('.menu'),
			menuTop: $('.menu-top'),
			menuMiddle: $('.menu-middle'),
			menuBottom: $('.menu-bottom')
		},
		
		init: function() {
			Menu.bindUIactions();
		},
		
		bindUIactions: function() {
			Menu.el.ham
					.on(
						'click',
					function(event) {
					Menu.activateMenu(event);
					event.preventDefault();
				}
			);
		},
		
		activateMenu: function() {
			Menu.el.menuTop.toggleClass('menu-top-click');
			Menu.el.menuMiddle.toggleClass('menu-middle-click');
			Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
		}
	};
	
	Menu.init();
	// aside-burger
	let MenuAside = {
  
		ael: {
			aham: $('.aside-menu'),
			amenuTop: $('.aside-menu-top'),
			amenuMiddle: $('.aside-menu-middle'),
			amenuBottom: $('.aside-menu-bottom')
		},
		
		init: function() {
			MenuAside.bindUIactions();
		},
		
		bindUIactions: function() {
			MenuAside.ael.aham
					.on(
						'click',
					function(event) {
					MenuAside.activateMenu(event);
					event.preventDefault();
				}
			);
		},
		
		activateMenu: function() {
			MenuAside.ael.amenuTop.toggleClass('aside-menu-top-click');
			MenuAside.ael.amenuMiddle.toggleClass('aside-menu-middle-click');
			MenuAside.ael.amenuBottom.toggleClass('aside-menu-bottom-click'); 
		}
	};
	
	MenuAside.init();
	// aside-burger-end

$('.main-burger,.aside-main-burger').on('click',function(){
$('.main').toggleClass('dark')
});

$('.aside-main-burger').on('click', function(){
	$('.aside').toggleClass('active');
});

	$('.main-burger').on('click', function(){
		$('.site-news-aside,.site-articles-aside').toggleClass('active');
	});

	

});