var myModule = (function() {

    var init = function() {
        _setUpListeners();
    };

    var _setUpListeners = function() {
        $('.add-new').on('click', _showModal);
        $('.login-link').on('click', _showLogin); // открыть по клику
    };

    var _showModal = function(prev) {
        console.log('клик работает');
        prev.preventDefault();
        $('.modal-wrapper').bPopup({
            speed: 650,
            transition: 'slideIn',
            transitionClose: 'slideBack'
        });
    };

    var _showLogin = function (prev) {
    	console.log('login работает')
    	prev.preventDefault();
    	$('.login-wrapper').bPopup();
    };


    return {
        init: init
    };

})();

myModule.init();
