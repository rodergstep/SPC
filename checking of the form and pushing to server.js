$('form').submit(function(){
	// чистим ошибки
	$(this).find('.error').remove();
	// проверяем поля формы
	if ($(this).find('input[type=name]').val() == '') {
		$(this).find('input[name=user]')
			.before('<div class="error">Введите имя</div>');
		return false;
	}
	// всё хорошо – отправляем запрос на сервер
	$.post(
		$(this).attr('action'), // ссылка куда отправляем данные
		$(this).serialize() // данные формы
	);
	return false;
})