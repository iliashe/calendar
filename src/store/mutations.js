const updateCurrMonth = function (state, month) {
  const getMonth = state.months.filter((el) => el.fullName === month)[0];
  state.currDate.currMonth.fullName = getMonth.fullName;
  state.currDate.currMonth.id = getMonth.id;
  state.currDate.currMonth.shortName = getMonth.shortName;
};

export default {
  updateCurrMonth,
};
