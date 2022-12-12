import './style.css';
import Task from './components/Task';

function component() {
	const container = document.getElementById('container');

	const project = document.createElement('div');
	project.setAttribute('class', 'project');

	const task = new Task('Add styling again');
	project.append(task.element);

	console.log(localStorage.getItem('previousUUID'));
	console.log(task.UUID);
	localStorage.setItem('previousUUID', task.UUID);

	container.append(project);

	console.log(JSON.stringify(task, null, 2));

	return container;
}

document.body.appendChild(component());

// Store tasks in a task container.
// The task container saves the tasks, along with metadata for container.