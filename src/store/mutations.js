/* eslint-disable */
const toggleView = function (state, activeCalendarView) {
  for(const view of state.views){
    if(view.name === activeCalendarView){
      view.isActive = true;
    } else {
      view.isActive = false;
    }
  };
};

// what if day > 31
const updateCurrDay = function (state, date) {
  state.currDay.date = date;
};

const updateCurrMonth = function (state, month) {
  const getMonth = (typeof (month) === 'string'
    ? state.months.filter((el) => el.fullName === month)[0]
    : month >= 1 && month <= 12
      ? state.months.filter((el) => el.numOfMonth === month)[0]
      : month > 12
        ? state.months.filter((el) => el.numOfMonth === 1)[0]
        : state.months.filter((el) => el.numOfMonth === 12)[0])
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
  toggleView,
  updateCurrDay,
  updateCurrMonth,
  updateCurrWeek,
  updateCurrYear,
};
