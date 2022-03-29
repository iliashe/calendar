const getActiveView = (state) => (
  state.views.filter((view) => view.isActive === true)[0]
);

const getDaysInMonth = (state) => (
  new Date(state.currYear, state.currMonth.id + 1, 0).getDate()
);

const getFirstDayOfMonth = (state) => (
  (new Date(state.currYear, state.currMonth.id).getDay() === 0
    ? 7
    : new Date(state.currYear, state.currMonth.id).getDay())
);

export default {
  getActiveView,
  getDaysInMonth,
  getFirstDayOfMonth,
};
