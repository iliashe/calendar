<template>
<header>
  <div class='select-month'>
    <button type='button' @click.prevent='updateCurrMonth(currDate.currMonth.monthNumber - 1)'>
      &larr;
    </button>
    <select
      v-model='currDate.currMonth.name'
    >
      <option
        v-for='month in months'
        :key='month.monthNumber'
        :value='month.name'
      >   <!-- read more about key attr -->
        {{ month.name }}
      </option>
    </select>
    <button type='button' @click.prevent='updateCurrMonth(currDate.currMonth.monthNumber + 1)'>
      &rarr;
    </button>
  </div>
  <div class='select-year'>
    <!-- add validation -->
    <p>{{ currDate.currYear }}</p>
    <button @click.prevent='updateCurrYear(currYear + 1)'>&uarr;</button>
    <button @click.prevent='updateCurrYear(currYear - 1)'>&darr;</button>
  </div>
</header>
<body>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='weekday in weekdays' :key='weekday'>
      {{ weekday.slice(0, 3) }}
    </li>
  </ul>
  <ul class='grid grid-cols-7 gap-5'>
    <!-- first we skip cells(days) till the needed weekday  -->
    <li v-for='cell in getFirstDayOfMonth - 1' :key='cell'>
      CELL
    </li>
    <li v-for='day in getCurrMonth.days' :key='day'>
      {{ day.monthDate }}
    </li>
  </ul>
</body>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    getFirstDayOfMonth() {
      const year = this.currDate.currYear;
      const month = this.currDate.currMonth;
      return new Date(year, month.monthNumber - 1).getDay() === 0
        ? 7
        : new Date(year, month.monthNumber - 1).getDay();
    },
    ...mapGetters([
      'getCurrMonth',
    ]),
    ...mapState([
      'currDate',
      'currMonth',
      'currYear',
      'weekdays',
      'months',
    ]),
  },
  methods: {
    ...mapMutations([
      'updateCurrMonth',
      'updateCurrYear',
    ]),
  },
};
</script>

<style scoped>
li {
  font-size: x-small;
}
</style>
