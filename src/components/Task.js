import { v4 as uuidv4 } from 'uuid';
import TaskTextField from "./TaskTextField";
import DueDate from './DueDate';

class Task {
	constructor(title, dueDate) {
		this.UUID = uuidv4();
		this.isDone = false;
		this.title = new TaskTextField(title, 'task-title');
		this.date = new DueDate(dueDate);
	}

	set completion(isDone) {
		this.isDone = isDone;
	}

	get completion() {
		return this.isDone;
	}

	get value() {
		let str = this.isDone ? '[Completed]' : '[Uncompleted]';
		str += ` Name: ${this.title.value}`
		str += ` (${this.date.value})`;

		return str;
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
		textContainer.append(this.date.element);

		task.append(textContainer);

		const colorCode = document.createElement('span');
		colorCode.className = 'color-code color-code--none';
		task.append(colorCode);

		return task;
	}
}

export default Task;