export default class Day {
  constructor(props) {
    this.configs = props.configs;
    this.dateInMonth = props.dateInMonth;
    this.events = props.events;
    this.isCurrent = props.isCurrent;
    this.isSelected = props.isSelected;
    this.month = props.month;
    this.name = props.name;
    this.year = props.year;
  }
}
