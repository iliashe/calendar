// USE TESTS(MOCHA) TO CHECK THE DATA
// GENERATE AN ARRAY OF MONTH OBJECTS

// function that returns an array of months objects
const months = function(year) {
  // init array, that will be returned
  const arr = [];
  // init month interval
  let monthInt = [0, 0];
  // looping through months
  for(let month = 1; month <= 12; month += 1) {
    // relative to number of day in a year (1st, 42nd, 349th etc), 
    // current month starts on a day, when prev month ends.  
    monthInt[0] = monthInt[1];
    monthInt[1] += new Date(year, month, 0).getDate();
    // getting name of a month
    monthName = Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month, 0));
    // adding a month object to the array
    arr.push(
      {
        interval: [
          monthInt[0],
          monthInt[1]
        ],
        name: monthName,
      }
    );
  }
  return arr;
}

export default class Day {
  constructor(props) {
    this.configs = props.configs;
    this.dayInYear = props.dayInYear;
    this.events = props.events;
    this.isCurrent = props.isCurrent;
    this.isSelected = props.isSelected;
    this.month = props.month;
    this.name = props.name;
    this.year = props.year;
    // this.week
  }
//   get getMonth(){
//     return months
//   }
}
