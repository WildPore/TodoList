class Task {
	constructor(title) {
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

		task.append(title, date, markCompleteBtn);
		return task;
	}
}

export default Task;