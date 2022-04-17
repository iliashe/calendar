import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import Day from './classes/day';
import Month from './classes/month';

// default values

const currentMonthDate = new Date().getDate();
// expected 1/2/3/.../31

const currentDayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
// expected 'Monday'/'Tuesday'/'Wednesday'/.../'Sunday'

const currentMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
// expected 'January'/'February'/'March'/.../'December'

const currentYear = new Date().getFullYear();
// expected .../2022/2023/2024/...

const numberOfMonth = new Date().getMonth() + 1;
// expected 1/2/3/.../12

const daysInCurrentMonth = new Date(currentYear, numberOfMonth, 0).getDate();
// expected 28/29/30/31

const daysOfCurrentMonth = [];
for (let d = 1; d <= daysInCurrentMonth; d += 1) {
  daysOfCurrentMonth.push(
    {
      configs: {},
      date: d,
      events: [],
      fullName: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(currentYear, numberOfMonth - 1, d)),
      shortName: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(currentYear, numberOfMonth - 1, d)),
    },
  );
}
// expected [{day1},{day2},{day3}...]

const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const $year = [];
for (let d = 1; d <= 365; d += 1) {
  $year.push(
    new Day(
      {
        configs: {},
        yearDate: d,
        events: [],
        year: currentYear,
      },
    ),
  );
}

const $months = [];
for (let month = 0; month <= monthsNames.length - 1; month += 1) {
  $months.push(
    new Month({
      monthNumber: month + 1,
      name: monthsNames[month],
      days: $year.filter((day) => day.month.name === monthsNames[month]),
    }),
  );
}

const $weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// todays' Date, that will not be mutated by a user
const todayFullDate = {
  currYear: currentYear,
  currMonth: {
    monthNumber: numberOfMonth,
    name: currentMonthName,
  },
  currDay: {
    date: currentMonthDate,
    weekday: currentDayName,
  },
};

// Date, that is being watched by a user. Is set to todays' Date by default.
const currentFullDate = {
  currYear: currentYear,
  currMonth: {
    monthNumber: numberOfMonth,
    name: currentMonthName,
  },
  currDay: {
    date: currentMonthDate,
    weekday: currentDayName,
  },
  currWeek: 0,
};

export default createStore({
  state: {
    year: $year,
    today: todayFullDate,
    currDate: currentFullDate,
    // currDay: {
    //   date: currentMonthDate,
    //   fullName: currentDayName,
    //   shortName: currentDayName.slice(0, 3),
    // },
    // currMonth: {
    //   daysInMonth: daysInCurrentMonth,
    //   daysOfCurrMonth: daysOfCurrentMonth,
    //   fullName: currentMonthName,
    //   numOfMonth: numberOfMonth,
    //   shortName: currentMonthName.slice(0, 3),
    //   startsOn: 0,
    // },
    // currWeek: 0,
    // currYear: currentYear,

    createEventForm: {
      isVisible: true,
    },

    events: [
    ],

    months: $months,

    // select-button in header of a calendar plane
    select: 'button',

    selectedDays: [],

    views: [
      {
        name: 'Day',
        isActive: false,
        curr: currentFullDate.currDay.date,
      },
      {
        name: 'Week',
        isActive: false,
        curr: currentFullDate.currWeek,
      },
      {
        name: 'Month',
        isActive: true,
        curr: currentFullDate.currMonth.monthNumber,
      },
      {
        name: 'Year',
        isActive: false,
        curr: currentFullDate.currYear,
      },
    ],

    weekdays: $weekdays,
  },

  getters,

  mutations,
});
