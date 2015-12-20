var validator = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий
	};

// СОздаем тултипы
var createQtip = function (e, position) {

	if (position === 'right') {
		position = {
			my: 'left center',
			at: 'right center'
		}
	}else{
		position = {
			my: 'right center',
			at: 'left center',
			adjust: {
				method: 'shift none'
			}
		}
	}

	e.qtip({
		content:{
		text: function() {
				return $(this).attr('qtip-content')
			}
		},
		show: {
			event: 'show'
		},
		hide: {
			event: 'keydown hideTooltip'
		},
		position:position,
		style: {
			classes: 'qtip-mystyle qtip-rounded',
			tip: {
				height: 10,
				width: 16
			}
		}
	}).trigger('show')

};


var validateForm = function (form) {

	console.log ('Модуль валидации')

		var elements = form.find('input', 'textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;
//Проход по всем элементам формы.
	$.each(elements, function (index, val) {
		consi
	});
};


	return {
		init: init,
		validateForm: validateForm
	};

})();

validator.init();