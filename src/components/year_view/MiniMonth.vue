<template>
<header>
  <div class='month'>
    {{ month.fullName }}
  </div>
</header>
<body>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='day in weekdays' :key='day'>
      {{ day.shortName }}
    </li>
  </ul>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='cell in 42' :key='cell'>
      <button
        type='button'
        v-if='cell >= getFirstDayOfMonth &&
        cell < month.daysInMonth + getFirstDayOfMonth'
      >
        {{ cell - getFirstDayOfMonth + 1}}
      </button>
    </li>
  </ul>
</body>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    getFirstDayOfMonth() {
      return new Date(this.year, this.month.numOfMonth).getDay() === 0
        ? 7
        : new Date(this.year, this.month.numOfMonth).getDay();
    },
    ...mapState([
      'currMonth',
      'currYear',
      'months',
      'weekdays',
    ]),
  },
  methods: {
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
  border: solid;
  font-size: x-small;
}

ul {
  border: solid;
}
</style>
