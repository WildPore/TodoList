import Task from "./Task";

class AddTask {
	// builds a field and then contains the behavior for managing that

	get element() {
		// returns the element to add to the screen

		const container = document.createElement('div');
		container.setAttribute('class', 'addtask');

		const form = document.createElement('form');
		container.append(form);

		const text = document.createElement('input');
		text.type = 'text';
		text.placeholder = 'Add a new task...';

		const submit = document.createElement('input');
		submit.type = 'submit';
		submit.value = 'Add to To-Do List';

		submit.addEventListener('click', (e) => {
			e.preventDefault();

			const task = new Task(text.value);
			document.getElementById('container').append(task.element);

			text.value = '';
		});

		form.append(text, submit);

		return container;
	}
}

export default AddTask;