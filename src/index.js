import './style.css';
import AddTask from './components/AddTask';
import Task from './components/Task';
import TaskContainer from './components/TaskContainer';

function component() {
	const container = document.getElementById('container');

	const addTask = new AddTask();
	container.append(addTask.element);

	return container;
}

document.body.appendChild(component());