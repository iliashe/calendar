const updateCurrMonth = function (state, month) {
  const getMonth = state.months.filter((el) => el.fullName === month)[0];
  state.currDate.currMonth.fullName = getMonth.fullName;
  state.currDate.currMonth.id = getMonth.id;
  state.currDate.currMonth.shortName = getMonth.shortName;
};

const updateCurrYear = function (state, year) {
  state.currDate.currYear = year;
};

export default {
  updateCurrMonth,
  updateCurrYear,
};
