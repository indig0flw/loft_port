var contactMe = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};
// прослушка событий
	var _setUpListeners = function () {
		$('#contact-me').on('submit', _submitForm);
	};

var _submitForm = function(ev){
	console.log ('Отправка формы')
	ev.preventDefault();

	var form = $(this),
		url = '#'
		defObj = ajaxForm(form, utl);
};


var _ajaxForm = function(form, url) {
	console.log ('Аякс запрос ')
	if (!validator.validateForm(form)) return false;


};

	return {
		init: init
	};

})();

contactMe.init();