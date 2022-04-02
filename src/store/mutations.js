/* eslint-disable */
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
  const getMonth = (typeof (month) === 'string'
    ? state.months.filter((el) => el.fullName === month)[0]
    : month >= 1 && month <= 12
      ? state.months.filter((el) => el.numOfMonth === month)[0]
      : month > 12
        ? state.months.filter((el) => el.numOfMonth === 1)[0]
        : state.months.filter((el) => el.numOfMonth === 12)[0])
  // February has 28/29 days
  state.currMonth.daysInMonth = getMonth.daysInMonth;
  state.currMonth.fullName = getMonth.fullName;
  state.currMonth.numOfMonth = getMonth.numOfMonth;
  state.currMonth.shortName = getMonth.shortName;
};

const updateCurrWeek = function (state, weekNumber) {
  state.currWeek = weekNumber
};

const updateCurrYear = function (state, year) {
  state.currYear = year;
};

export default {
  toggleSelect,
  toggleView,
  updateCurrDay,
  updateCurrMonth,
  updateCurrWeek,
  updateCurrYear,
};
