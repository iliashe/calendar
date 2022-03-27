const updateCurrMonth = function (state, monthName) {
  state.currDate.currMonth.fullName = monthName;
  // forEach doesnt work
  const monthId = state.months.forEach((element) => (
    element.fullName === monthName ? element.id : 55));
  state.currDate.currMonth.id = monthId;
  //   for (const month of state.months) {
  //     if (month.fullName === monthName) {
  //       state.currDate.currMonth.id = month.daysInMonth;
  //     }
  //   }
  state.currDate.currMonth.shortName = monthName.slice(0, 3);
};

export default {
  updateCurrMonth,
};
