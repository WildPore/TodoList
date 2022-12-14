class Scheduling {
	constructor(date) {
		this.date = date;
	}

	isEqualTo(otherDate) {

	}

	get formattedDate() {
		return new Intl.DateTimeFormat('en-US').format(this.date);
	}
}

export default Scheduling;