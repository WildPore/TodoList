class Task {
	constructor(title, completed = false) {
		this.title = title;
	}

	get element() {
		const task = document.createElement('div');
		task.setAttribute('class', 'task');

		const title = document.createElement('h2');
		title.textContent = this.title;

		const date = document.createElement('h3');
		date.textContent = 'Due today';

		const markCompleteBtn = document.createElement('button');
		markCompleteBtn.textContent = 'Mark Complete!';

		markCompleteBtn.addEventListener('click', (e) => {
			console.log(e.target.parentNode.remove());

		});

		task.append(title, date, markCompleteBtn);
		return task;
	}
}

export default Task;