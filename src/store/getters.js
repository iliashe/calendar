const getDaysInMonth = (state) => (
  new Date(state.currYear, state.currMonth.id + 1, 0).getDate()
);

const getFirstDayOfMonth = (state) => (
  (new Date(state.currYear, state.currMonth.id).getDay() === 0
    ? 7
    : new Date(state.currYear, state.currMonth.id).getDay())
);

export default {
  getDaysInMonth,
  getFirstDayOfMonth,
};
