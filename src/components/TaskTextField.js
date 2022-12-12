class TaskTextField {
	constructor(defaultValue, className) {
		this.defaultValue = defaultValue;

		this.isEditing = false;

		this.form = document.createElement('form');
		this.textField = document.createElement('input');
		this.textField.className = className;
		this.textField.classList.add('text-field');
		this.textField.setAttribute('value', this.value);
	}

	set value(newValue) {
		this.currentValue = newValue || this.defaultValue;
	}

	get value() {
		return this.currentValue || this.defaultValue;
	}

	get element() {
		return this.textField;
	}

	toggleEditing() {
		this.isEditing = !this.isEditing;
		this.textField.classList.toggle('editing');
	}
}

export default TaskTextField;