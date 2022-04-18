// getting active view
const getActiveView = (state) => (
  state.views.filter((view) => view.isActive === true)[0]
);

// getting object of a current month
const getCurrMonth = (state) => (
  state.months.filter((month) => month.name === state.currDate.currMonth.name)[0]
);

// getting current time in format hh:mm
const getTime = (state) => (
  {
    h: state.today.time.hour,
    m: state.today.time.minutes,
  }
);

// getting todays full date in format 18.Apr 2022
const getToday = (state) => (
  `${state.today.day.date}. ${state.today.month.name.slice(0, 3)} ${state.today.year}`
);
// const getDaysInMonth = (state) => (
//   new Date(state.currYear, state.currMonth.numOfMonth, 0).getDate()
// );

// const getFirstDayOfCurrMonth = (state) => (
//   (new Date(state.currYear, state.currMonth.numOfMonth - 1).getDay() === 0
//     ? 7
//     : new Date(state.currYear, state.currMonth.numOfMonth - 1).getDay())
// );

export default {
  getActiveView,
  getCurrMonth,
  getTime,
  getToday,
//   getDaysInMonth,
//   getFirstDayOfCurrMonth,
};
