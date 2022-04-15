<template>
<header>
  <div class='month'>
    {{ month.name }}
  </div>
</header>
<body>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='weekday in weekdays' :key='weekday'>
      {{ weekday.slice(0,3) }}
    </li>
  </ul>
  <ul class='grid grid-cols-7 gap-5'>
    <!-- first we skip cells(days) till the needed weekday  -->
    <li v-for='cell in getFirstDayOfMonth - 1' :key='cell'>
      CELL
    </li>
    <!--
        as soon as we get on a first weekday of the month,
        the monthdates start outputting
     -->
    <li v-for='day in month.days' :key='day'>
      {{ day.monthDate }}
    </li>
    <!--
      adding cells, if the number of cells < 42,
      s.t. all months looked equal
    -->
    <li v-for='cell in 42 - (month.days.length + getFirstDayOfMonth)' :key='cell'>
      CELL
    </li>
  </ul>
</body>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    getFirstDayOfMonth() {
      return new Date(this.year, this.month.monthNumber).getDay() === 0
        ? 7
        : new Date(this.year, this.month.monthNumber).getDay();
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
