import Day from './day';

export default class Month {
  constructor(props) {
    this.configs = props.configs;
    this.events = props.events;
    this.isCurrent = props.isCurrent;
    this.monthDays = this.getMonthDays;
    this.monthNumber = props.monthNumber;
    this.name = props.name;
    this.numOfDays = props.numOfDays;
    // this.year = props.year;
  }

  get getMonthDays() {
    const monthDays = [];
    for (let d = 1; d <= 31; d += 1) {
      monthDays.push(
        new Day({
          configs: {},
          dateInMonth: d,
          events: [],
          isCurrent: false,
          isSelected: false,
          month: [
            this.monthNumber,
            this.name,
          ],
          name: 'Monday',
          year: 2022,
        }),
      );
      console.log(d);
    }
    return monthDays;
  }
}
