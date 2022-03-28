const getDaysInMonth = (state) => (
  new Date(state.currDate.currYear, state.currDate.currMonth.id + 1, 0).getDate()
);

const getYears = (state) => (
  [state.currDate.currYear, state.currDate.currYear + 1, state.currDate.currYear + 2]
);

export default {
  getDaysInMonth,
  getYears,
};
