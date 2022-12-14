class TaskContainer {
	constructor() {
		this.tasks = [];
	}

	add(...tasks) {
		for (const task of tasks) {
			this.tasks.push(task);
		}
	}

	printTasks() {
		for (const task of this.tasks) {
			console.log(task.value);
		}
	}

	get table() {
		const tableElement = document.createElement('table');
		const tableHeader = document.createElement('thead');
		const headerRow = document.createElement('tr');

		const doneHeader = document.createElement('th');
		doneHeader.textContent = 'Done?';

		const titleHeader = document.createElement('th');
		titleHeader.textContent = 'Task';

		headerRow.append(doneHeader, titleHeader);
		tableHeader.append(headerRow);

		tableElement.append(tableHeader);

		const tableBody = document.createElement('tbody');
		for (const task of this.tasks) {
			const row = document.createElement('tr');

			const done = document.createElement('td');
			done.textContent = task.isDone;

			const title = document.createElement('td');
			title.textContent = task.title.value;

			row.append(done, title);
			tableBody.append(row);
		}

		tableElement.append(tableBody);
		return tableElement;
	}
}

export default TaskContainer;