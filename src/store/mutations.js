import Event from './classes/event';

const updateCurrDate = function (state, view) {
  const activeView = state.views.filter((v) => v === view)[0];
  activeView.curr += 1;
};

const addToSelectedDays = function (state, day) {
  if (state.selectedDays.includes(day)) {
    state.selectedDays = state.selectedDays.filter((el) => el.date !== day.date);
  } else {
    state.selectedDays.push(day);
  }
};

/* eslint-disable */
const commitEvent = function (state, $event) {
  const event = new Event({
    allday: $event.allday,
    desc: $event.desc,
    title: $event.title,
    start: $event.start,
    end: $event.end,
  });
  state.events.push(event)
  state.createEventForm.isVisible = false;
};


// create button
const  createEvent = function (state) {
  state.createEventForm.isVisible = !state.createEventForm.isVisible;
};

const toggleSelect = function (state) {
  state.select === 'button'
    ? state.select = 'checkbox'
    : state.select = 'button';
};

const toggleView = function (state, activeCalendarView) {
  for(const view of state.views){
    if(view.name === activeCalendarView){
      view.isActive = true;
    } else {
      view.isActive = false;
    }
  };
};

const updateCurrDay = function (state, date) {
  // DO WE NEED THIS?
  // checking if date is the number in range between 1 and number of days in current month
  // if true, we updating a current day with date
  // else if date is not in range, this means we have to move either to next or previous month 
  if(date < 1 || date > state.currMonth.daysInMonth){
    // declaring the variable getMonth, that later will be assigned to object month 
    let getMonth;
    // checking if date is more or less than number of days in current month
    if(date > state.currMonth.daysInMonth) {
      // if date is more than number of days in current month,
      // we moving to first day of next month
      getMonth = state.months.filter((el) =>
        el.numOfMonth === state.currMonth.numOfMonth + 1)[0];
      state.currDay.date = 1;
    } else {
      // if date is less than number of days in current month,
      // we moving to last day of previous month
      getMonth = state.months.filter((el) =>
        el.numOfMonth === state.currMonth.numOfMonth - 1)[0];
      state.currDay.date = getMonth.daysInMonth;
    }
    // current month is now the month that we moved to
    state.currMonth.daysInMonth = getMonth.daysInMonth;
    state.currMonth.fullName = getMonth.fullName;
    state.currMonth.numOfMonth = getMonth.numOfMonth;
    state.currMonth.shortName = getMonth.shortName;
  } else {
    state.currDay.date = date;
  };
};

const updateCurrMonth = function (state, month) {
  if (typeof(month) === 'number') {
    if (month <= 0 ) { month = 12 }
    if (month > 12 ) { month = 1 }
    state.currDate.currMonth = state.months.filter((m) => m.monthNumber === month)[0];
  } else {
    console.log(month, state.months.filter((m) => m.name === month)[0])
    state.currDate.currMonth = state.months.filter((m) => m.name === month)[0];
  }
};

const updateCurrWeek = function (state, weekNumber) {
  state.currWeek = weekNumber
};

const updateCurrYear = function (state, year) {
  state.currYear = year;
};

export default {
  addToSelectedDays,
  commitEvent,
  createEvent,
  toggleSelect,
  toggleView,
  updateCurrDate,
  updateCurrDay,
  updateCurrMonth,
  updateCurrWeek,
  updateCurrYear,
};
