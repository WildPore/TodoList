class Task {
	constructor(title) {
		this.title = title;
	}

	get element() {
		const task = document.createElement('div');
		task.setAttribute('class', 'task task-lg');
		task.textContent = this.title;

		return task;
	}
}

export default Task;