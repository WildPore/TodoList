import TaskTextField from "./TaskTextField";

class DueDate {
	// The full component.
	// Has a display sub-component, for managing the display.
	// And actual data component.

	constructor(date) {
		if (date === undefined) {
			this.date = new Date();
		} else {
			this.date = date;
		}

		const today = new Date();
		const isToday = date.toDateString() == today.toDateString();
		this.dateString = isToday ? 'today' : date.toDateString();

		this.display = new TaskTextField(`Due ${this.dateString}`, 'date');
	}

	get value() {
		return this.dateString;
	}
}

export default DueDate;