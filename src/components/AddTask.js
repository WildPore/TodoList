class AddTask {
	// builds a field and then contains the behavior for managing that

	get element() {
		// returns the element to add to the screen

		const container = document.createElement('div');
		container.setAttribute('class', 'addtask');

		const form = document.createElement('form');
		form.setAttribute('class', 'addtask__form');
		container.append(form);

		const text = document.createElement('input');
		text.type = 'text';
		text.placeholder = 'Add a new task...';
		form.append(text);

		const submit = document.createElement('input');
		submit.type = 'submit';
		submit.value = 'Add to To-Do List';

		submit.addEventListener('click', (e) => {
			e.preventDefault();

			console.log(text.value);
			text.value = '';
		});

		form.append(submit);

		return container;
	}
}

export default AddTask;