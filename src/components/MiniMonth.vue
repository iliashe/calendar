<template>
<header>
  <div class='month'>
    {{ month.fullName }}
  </div>
</header>
<body>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='day in daysOfWeek' :key='day'>
      {{ day.shortName }}
    </li>
  </ul>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='cell in 42' :key='cell'>
      <button
        type='button'
        v-if='cell >= getFirstDayOfMonth(month.id) &&
        cell < getDaysInMonth(month.id) + getFirstDayOfMonth(month.id)'
      >
        {{ cell - getFirstDayOfMonth(month.id) + 1}}
      </button>
    </li>
  </ul>
</body>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'currMonth',
      'currYear',
      'daysOfWeek',
      'months',
    ]),
  },
  methods: {
    getDaysInMonth(month, year = this.year) {
      return new Date(year, month + 1, 0).getDate();
    },
    getFirstDayOfMonth(month, year = this.year) {
      return new Date(year, month).getDay() === 0
        ? 7
        : new Date(year, month).getDay();
    },
    ...mapMutations([
      'updateCurrMonth',
      'updateCurrYear',
    ]),
  },
  props: {
    month: Object,
    year: Number,
  },
};
</script>

<style scoped>
li {
  font-size: x-small;
}
</style>
