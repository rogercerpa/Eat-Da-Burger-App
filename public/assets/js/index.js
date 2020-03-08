$(() => {
	$('.change-devoured').on('click', function(event) {
		const id = $(this).data('id');
		const newDevoured = $(this).data('devoured');
		const newDevouredState = {
			devoured : newDevoured
		};
		$.ajax(`/api/burgers/${id}`, {
			type : 'PUT',
			data : newDevouredState
		}).then(() => {
			console.log('changed devoured to', newDevoured);
			location.reload();
		});
	});

	$('.create-form').on('submit', function(event) {
		event.preventDefault();
		const newBurger = {
			burger_name : $('#input-field').val().trim()
		};
		$.ajax('/api/burgers', {
			type : 'POST',
			data : newBurger
		}).then(() => {
			console.log('added a new burger');
			location.reload();
		});
	});
});
