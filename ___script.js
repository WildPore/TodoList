const FIRST_DAY = 0; // 0 is Sunday, 1 is Monday
const FINAL_DAY = FIRST_DAY === 0 ? 6 : 7; // Sunday to Saturday, or Monday to Sunday (correct)
// Technically there should be logic for setting the first and last days of the week,
// but that's too much right now lol.

const datePrefs = {
	// The user's preferences for how to display dates.

	shortMonths: true,
	shortDays: true,
}

class BetterDate {
	constructor(year, month, day) {
		this.year = year;
		this.month = month;
		this.day = day;

		this.date = new Date(year, month - 1, day);
		this.todaysDate = new Date();
	}

	// Is indexed by Date.getDay(), so it starts at 0,
	static weekdays = {
		0: { short: 'Sun', long: 'Sunday' },
		1: { short: 'Mon', long: 'Monday' },
		2: { short: 'Tue', long: 'Tuesday' },
		3: { short: 'Wed', long: 'Wednesday' },
		4: { short: 'Thu', long: 'Thursday' },
		5: { short: 'Fri', long: 'Friday' },
		6: { short: 'Sat', long: 'Saturday' },
	};

	// Is indexed by the BetterDate month, therefore, starts at 1
	static months = {
		1: { short: 'Jan', long: 'January' },
		2: { short: 'Feb', long: 'February' },
		3: { short: 'Mar', long: 'March' },
		4: { short: 'Apr', long: 'April' },
		5: { short: 'May', long: 'May' },
		6: { short: 'Jun', long: 'June' },
		7: { short: 'Jul', long: 'July' },
		8: { short: 'Aug', long: 'August' },
		9: { short: 'Sept', long: 'September' },
		10: { short: 'Oct', long: 'October' },
		11: { short: 'Nov', long: 'November' },
		12: { short: 'Dec', long: 'December' },
	};

	static get today() {
		return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	}

	isSameYear(otherDay) {
		return this.date.getFullYear() === otherDay.getFullYear();
	}

	isSameMonth(otherDay) {
		return this.date.getMonth() === otherDay.getMonth();
	}

	isSameWeek(otherDay) {

	}

	isSameDate(otherDay) {
		return this.date.getDate() === otherDay.getDate();
	}

	isSameDay(otherDay) {
		return this.date.getDay() === otherDay.getDay();
	}

	isSameExactDate(otherDay) {
		return this.isSameYear(otherDay) && this.isSameMonth(otherDay) && this.isSameDate(otherDay);
	}

	get isEarlierThanToday() {
		return BetterDate.today > this.date;
	}

	get isToday() {
		return this.isSameExactDate(new Date());
	}

	get isThisWeek() {
		const range = this.currentWeek(); //?
		range.first; //?
		const afterFirst = range.first <= this.date; //?
		const beforeFinal = range.final >= this.date; //?

		return afterFirst && beforeFinal;
	}

	get isThisMonth() {
		return this.isThisYear && this.todaysDate.getMonth() === this.date.getMonth();
	}

	get isThisYear() {
		return this.currentYear === this.date.getFullYear();
	}

	currentWeek() {
		// Gets a range of the two dates that make up the current week.
		const firstDay = BetterDate.today;
		firstDay.setDate(firstDay.getDate() - firstDay.getDay());
		firstDay; //?

		const finalDay = BetterDate.today;
		finalDay.setDate(firstDay.getDate() + FINAL_DAY + 1);
		finalDay;

		return {
			first: firstDay,
			final: finalDay
		};
	}

	get currentYear() {
		return BetterDate.today.getFullYear();
	}

	get dayName() {
		return BetterDate.weekdays[this.date.getDay()]; //?
	}

	get monthName() {
		return BetterDate.months[this.month];
	}

	get display() {
		if (this.isToday) {
			return 'today';
		}

		if (this.isThisWeek) {
			return `this ${this.dayName.short}, ${this.day}`
		}

		if (this.isThisMonth) {
			return `${this.dayName.short} ${this.day}`
		}

		if (this.isThisYear) {
			return `${this.monthName.short} ${this.day}`
		}

		return `${this.monthName.short} ${this.day} ${this.year}`
	}
}

const goodDate = new BetterDate(2023, 12, 19);
// goodDate.date; //?
// goodDate.isToday; //?
// goodDate.dayName.short; //?
// goodDate.dayName.long; //?
// goodDate.monthName.short; //?
// goodDate.monthName.long; //?
goodDate.isEarlierThanToday; //?
goodDate.isThisWeek; //?
goodDate.isThisMonth; //?
goodDate.isThisYear; //?
goodDate.display; //?

const printDateString = () => {
	let dateString = '';
	if (goodDate.isEarlierThanToday) {
		dateString += 'Was due '
	} else {
		dateString += 'Due ';
	}

	dateString += goodDate.display;

	return dateString;
}

printDateString(); //?

const buildTask = (props) => {
	const task = document.createElement('div');
	task.classList.add('task', props.size);

	const checkbox = document.createElement('div');
	checkbox.classList.add('checkbox');
	task.append(checkbox);

	const textContainer = document.createElement('div');
	textContainer.classList.add('text-container');
	task.append(textContainer);

	const title = document.createElement('span');
	title.classList.add('task-title');
	title.textContent = props.title;
	task.append(title);

	const date = document.createElement('span');
	date.classList.add('date');
	date.textContent = props.date;
	task.append(date);

	const colorCode = document.createElement('span');
	colorCode.classList.add('color-code', props.colorCode);
	task.append(colorCode);

	return task;
};

const container = document.querySelector('.project');
container.append(buildTask({
	size: 'task-lg',
	title: 'Check if my task builder works',
	date: '',
	colorCode: 'color-code--orange'
}));