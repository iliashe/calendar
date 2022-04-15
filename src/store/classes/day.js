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

// function that returns an array of months objects
// const weeks = function (year) {
//   const arr = [];
//   const weekInt = [0, 0];
//   const yearLength = (year % 4 !== 0 ? 365 : 366);
//   let week = 0;
//   for (let day = 1; day <= yearLength; day += 1) {
//     if (day % 7 === 0) {
//       week += 1;
//       weekInt[0] = weekInt[1] + 1;
//       weekInt[1] = day;
//       arr.push(
//         {
//           interval: [
//             weekInt[0],
//             weekInt[1],
//           ],
//           weekNumber: week,
//         },
//       );
//     }
//   }
//   return arr;
// };

export default class Day {
  constructor(props) {
    this.configs = props.configs;
    this.events = props.events;
    this.year = props.year;
    this.yearDate = props.yearDate;
    // this.week

    this.isSelected = false;
    this.month = this.getMonth; // expected {}/.../{ interval: [ 182, 212 ], name: 'July' }/.../{}
    this.monthDate = this.yearDate - this.month.interval[0] + 1; // expected 1/2/.../31
    this.weekday = this.getWeekday; // expected 'Monday'/'Tuesday'.../'Sunday'
    // this.isCurrent = this.getCurrentDate; // expected true/false
    // this.weekNumber = this.getWeek.weekNumber; // expected 0/1/../52
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
    const date = [this.year, this.month.monthNumber - 1, this.monthDate];
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(...date));
  }

  // getting week
  //   get getWeek() {
  //     const $weeks = weeks(this.year);
  //     const filterCriteria = (week) => this.yearDate >= week.interval[0]
  //       && this.yearDate <= week.interval[1];
  //     console.log($weeks.filter(filterCriteria));
  //     return $weeks.filter(filterCriteria)[0];
  //   }

  // getting current month and months' date
//   get getCurrentDate() {
//     const currDate = new Date().getDate();
//     const currMonth = new Date().getMonth() + 1;
//     return this.monthDate === currDate && this.month.monthNumber === currMonth;
//   }
}
