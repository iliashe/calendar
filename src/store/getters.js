const getActiveView = (state) => (
  state.views.filter((view) => view.isActive === true)[0]
);

const getDaysInMonth = (state) => (
  new Date(state.currYear, state.currMonth.numOfMonth, 0).getDate()
);

const getFirstDayOfCurrMonth = (state) => (
  (new Date(state.currYear, state.currMonth.numOfMonth).getDay() === 0
    ? 7
    : new Date(state.currYear, state.currMonth.numOfMonth).getDay())
);

export default {
  getActiveView,
  getDaysInMonth,
  getFirstDayOfCurrMonth,
};
