const getDaysInMonth = (state) => (
  new Date(state.currDate.currYear, state.currDate.currMonth.id + 1, 0).getDate()
);

export default {
  getDaysInMonth,
};
