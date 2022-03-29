import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  state: {
    currDay: {
      date: new Date().getDate(),
      fullName: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()),
      shortName: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date()),
    },
    currMonth: {
      fullName: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date()),
      id: new Date().getMonth(),
      shortName: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date()),
    },
    currWeek: 0,
    currYear: new Date().getFullYear(),

    daysOfWeek: [
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

    months: [
      {
        daysInMonth: 31,
        fullName: 'January',
        id: 0,
        shortName: 'Jan',
      },

      {
        daysInMonth: 28, // mutate????
        fullName: 'February',
        id: 1,
        shortName: 'Feb',
      },

      {
        daysInMonth: 31,
        fullName: 'March',
        id: 2,
        shortName: 'Mar',
      },

      {
        daysInMonth: 30,
        fullName: 'April',
        id: 3,
        shortName: 'Apr',
      },

      {
        daysInMonth: 31,
        fullName: 'May',
        id: 4,
        shortName: 'May',
      },

      {
        daysInMonth: 30,
        fullName: 'June',
        id: 5,
        shortName: 'Jun',
      },

      {
        daysInMonth: 31,
        fullName: 'July',
        id: 6,
        shortName: 'Jul',
      },

      {
        daysInMonth: 31,
        fullName: 'August',
        id: 7,
        shortName: 'Aug',
      },

      {
        daysInMonth: 30,
        fullName: 'September',
        id: 8,
        shortName: 'Sep',
      },

      {
        daysInMonth: 31,
        fullName: 'October',
        id: 9,
        shortName: 'Oct',
      },

      {
        daysInMonth: 30,
        fullName: 'November',
        id: 10,
        shortName: 'Nov',
      },

      {
        daysInMonth: 31,
        fullName: 'December',
        id: 11,
        shortName: 'Dec',
      },
    ],
  },

  getters,

  mutations,
});
