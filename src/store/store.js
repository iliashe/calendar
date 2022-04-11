import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
// import day from './day';
import Month from './month';

// class Week {
//   constructor(props) {
//     this.configs = props.configs;
//     this.events = props.events;
//     this.isCurrent = props.isCurrent;
//     this.weekdays = props.weekdays;
//     this.weekNumber = props.weekNumber;
//   }
// }

// default values

const dayConfigs = {
  color: '',
};

const currentDate = new Date().getDate();
// expected 1/2/3/.../31

const currentDayFullName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
// expected 'Monday'/'Tuesday'/'Wednesday'/.../'Sunday'

const currentMonthFullName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
// expected 'January'/'February'/'March'/.../'December'

const currentYear = new Date().getFullYear();
// expected .../2022/2023/2024/...

const numberOfMonth = new Date().getMonth() + 1;
// expected 1/2/3/.../12

// const year = () => {
//  configs: {},
//  isCurrent: true,
//  year: 0,
// }

const daysInCurrentMonth = new Date(currentYear, numberOfMonth, 0).getDate();
// expected 28/29/30/31

const daysOfCurrentMonth = [];
for (let d = 1; d <= daysInCurrentMonth; d += 1) {
  daysOfCurrentMonth.push(
    {
      configs: dayConfigs,
      date: d,
      events: [],
      fullName: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(currentYear, numberOfMonth - 1, d)),
      shortName: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(currentYear, numberOfMonth - 1, d)),
    },
  );
}
// expected [{day1},{day2},{day3}...]

const months = [];
for (let m = 1; m <= 12; m += 1) {
  months.push(
    new Month({
      configs: {},
      events: [],
      isCurrent: false,
      monthNumber: m,
      name: 'Feb',
      numOfDays: 31,
    }),
  );
}

export default createStore({
  state: {
    testm: months,
    currDay: {
      date: currentDate,
      fullName: currentDayFullName,
      shortName: currentDayFullName.slice(0, 3),
    },
    currMonth: {
      daysInMonth: daysInCurrentMonth,
      daysOfCurrMonth: daysOfCurrentMonth,
      fullName: currentMonthFullName,
      numOfMonth: numberOfMonth,
      shortName: currentMonthFullName.slice(0, 3),
      startsOn: 0,
    },
    currWeek: 0,
    currYear: currentYear,

    createEventForm: {
      isVisible: false,
    },

    events: [
    ],

    months: [
      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'January',
        numOfMonth: 1,
        shortName: 'Jan',
        startsOn: 0,
      },

      {
        daysInMonth: currentYear % 4 === 0 ? 29 : 28, // CHECK INFO
        daysOfMonth: [],
        fullName: 'February',
        numOfMonth: 2,
        shortName: 'Feb',
      },

      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'March',
        numOfMonth: 3,
        shortName: 'Mar',
      },

      {
        daysInMonth: 30,
        daysOfMonth: [],
        fullName: 'April',
        numOfMonth: 4,
        shortName: 'Apr',
      },

      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'May',
        numOfMonth: 5,
        shortName: 'May',
      },

      {
        daysInMonth: 30,
        daysOfMonth: [],
        fullName: 'June',
        numOfMonth: 6,
        shortName: 'Jun',
      },

      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'July',
        numOfMonth: 7,
        shortName: 'Jul',
      },

      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'August',
        numOfMonth: 8,
        shortName: 'Aug',
      },

      {
        daysInMonth: 30,
        daysOfMonth: [],
        fullName: 'September',
        numOfMonth: 9,
        shortName: 'Sep',
      },

      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'October',
        numOfMonth: 10,
        shortName: 'Oct',
      },

      {
        daysInMonth: 30,
        daysOfMonth: [],
        fullName: 'November',
        numOfMonth: 11,
        shortName: 'Nov',
      },

      {
        daysInMonth: 31,
        daysOfMonth: [],
        fullName: 'December',
        numOfMonth: 12,
        shortName: 'Dec',
      },
    ],

    // select-button in header of a calendar plane
    select: 'button',

    selectedDays: [],

    views: [
      {
        name: 'Day',
        isActive: false,
      },
      {
        name: 'Week',
        isActive: true,
      },
      {
        name: 'Month',
        isActive: false,
      },
      {
        name: 'Year',
        isActive: false,
      },
    ],

    weekdays: [
      {
        fullName: 'Monday',
        shortName: 'Mon',
      },
      {
        fullName: 'Tuesday',
        shortName: 'Tue',
      },
      {
        fullName: 'Wednesday',
        shortName: 'Wed',
      },
      {
        fullName: 'Thursday',
        shortName: 'Thu',
      },
      {
        fullName: 'Friday',
        shortName: 'Fri',
      },
      {
        fullName: 'Saturday',
        shortName: 'Sat',
      },
      {
        fullName: 'Sunday',
        shortName: 'Sun',
      },
    ],
  },

  getters,

  mutations,
});
