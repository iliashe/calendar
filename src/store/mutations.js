/* eslint-disable */
const updateCurrMonth = function (state, month) {
  const getMonth = (typeof (month) === 'string'
    ? state.months.filter((el) => el.fullName === month)[0]
    : month >= 0 && month <= 11
      ? state.months.filter((el) => el.id === month)[0]
      : month > 11
        ? state.months.filter((el) => el.id === 0)[0]
        : state.months.filter((el) => el.id === 11)[0])
  state.currMonth.fullName = getMonth.fullName;
  state.currMonth.id = getMonth.id;
  state.currMonth.shortName = getMonth.shortName;
};

const updateCurrYear = function (state, year) {
  state.currYear = year;
};

export default {
  updateCurrMonth,
  updateCurrYear,
};
