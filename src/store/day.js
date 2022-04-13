// USE TESTS(MOCHA) TO CHECK THE DATA
// GENERATE AN ARRAY OF MONTH OBJECTS

// function that returns an array of months objects
const months = function (year) {
  // init array, that will be returned
  const arr = [];
  // init month lasting interval
  const monthInt = [0, 0];
  // looping through months
  for (let month = 1; month <= 12; month += 1) {
    // relative to a number of day in a year (1st, 42nd, 349th etc),
    // current month starts on a day, when prev month ends.
    monthInt[0] = monthInt[1] + 1;
    monthInt[1] += new Date(year, month, 0).getDate();
    // getting name of a month
    const monthName = Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month, 0));
    // adding a month object to the array
    arr.push(
      {
        interval: [
          monthInt[0],
          monthInt[1],
        ],
        monthNumber: month,
        name: monthName,
      },
    );
  }
  return arr;
};

export default class Day {
  constructor(props) {
    this.configs = props.configs;
    this.events = props.events;
    this.isCurrent = props.isCurrent;
    this.isSelected = props.isSelected;
    this.year = props.year;
    this.yearDate = props.yearDate;
    // this.week

    this.month = this.getMonth; // expected {}/.../{ interval: [ 182, 212 ], name: 'July' }/.../{}
    this.weekday = this.getWeekday; // expected 'Monday'/'Tuesday'.../'Sunday'
    this.monthDate = this.yearDate - this.month.interval[0] + 1; // expected 1/2/.../31
  }

  // getting month, that includes the day
  get getMonth() {
    // getting array of months objects
    const $months = months(this.year);
    // function, that returns true, if the day is in interval of a month
    const filterCriteria = (month) => this.yearDate >= month.interval[0]
      && this.yearDate <= month.interval[1];
    // returning an object of the month
    return $months.filter(filterCriteria)[0];
  }

  // getting weekday
  get getWeekday() {
    const date = [this.year, this.month.monthNumber - 1, this.yearDate];
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(...date));
  }
}
