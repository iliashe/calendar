import { createStore } from 'vuex';

export default createStore({
  state: {
    events: [
      {
        day: 0,
        desc: '',
        time: 0,
      },
    ],
    years: {
      year: {
        default: new Date().getFullYear(),
      },
    },
    // day: {
    //   hours: [
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    //     14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    //   ],
    // },
    // week: [
    //   {
    //     day: 1,
    //     name: 'Monday',
    //   },
    //   {
    //     day: 2,
    //     name: 'Tuesday',
    //   },
    //   {
    //     day: 3,
    //     name: 'Wednesday',
    //   },
    //   {
    //     day: 4,
    //     name: 'Thursday',
    //   },
    //   {
    //     day: 5,
    //     name: 'Friday',
    //   },
    //   {
    //     day: 6,
    //     name: 'Saturday',
    //   },
    //   {
    //     day: 7,
    //     name: 'Sunday',
    //   },
    // ],
  },
});
