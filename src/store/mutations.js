/* eslint-disable */
const toggleView = function (state, activeCalendarView) {
  for(const view of state.views){
    if(view.name === activeCalendarView){
      view.isActive = true;
    } else {
      view.isActive = false;
    }
  }
};

const updateCurrMonth = function (state, month) {
  const getMonth = (typeof (month) === 'string'
    ? state.months.filter((el) => el.fullName === month)[0]
    : month >= 1 && month <= 12
      ? state.months.filter((el) => el.numOfMonth === month)[0]
      : month > 12
        ? state.months.filter((el) => el.numOfMonth === 1)[0]
        : state.months.filter((el) => el.numOfMonth === 12)[0])
  state.currMonth.fullName = getMonth.fullName;
  state.currMonth.numOfMonth = getMonth.numOfMonth;
  state.currMonth.shortName = getMonth.shortName;
};

const updateCurrYear = function (state, y) {
  console.log(typeof(state.currYear), y)
  state.currYear = y;
  state.currWeek = 9999;
  console.log('currYear updated!')
};

export default {
  toggleView,
  updateCurrMonth,
  updateCurrYear,
};
