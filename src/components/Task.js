import { v4 as uuidv4 } from 'uuid';
import TaskTextField from "./TaskTextField";

class Task {
	constructor(title, dueDate = 'Due today') {
		this.UUID = uuidv4();
		this.title = new TaskTextField(title, 'task-title');
		this.dueDate = new TaskTextField(dueDate, 'date');
	}

	get element() {
		// task
		// checkbox
		// text-container
		// task-title
		// date
		// color-code

		const task = document.createElement('div');
		task.setAttribute('class', 'task task-lg');

		const checkbox = document.createElement('div');
		checkbox.setAttribute('class', 'checkbox');

		task.append(checkbox);

		const textContainer = document.createElement('div');
		textContainer.setAttribute('class', 'text-container');

		textContainer.append(this.title.element);
		textContainer.append(this.dueDate.element);

		task.append(textContainer);

		const colorCode = document.createElement('span');
		colorCode.className = 'color-code color-code--none';
		task.append(colorCode);

		return task;
	}
}

export default Task;