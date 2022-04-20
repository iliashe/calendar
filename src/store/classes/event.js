export default class Event {
  constructor(props) {
    this.allday = props.allday;
    this.title = props.title;
    this.desc = props.desc;

    this.start = props.start;
    this.end = props.end;
  }
}
