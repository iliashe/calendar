<template>
<header>
  <div class='select-month'>
    <button type='button' @click.prevent='updateCurrMonth(currMonth.numOfMonth - 1)'>
      &larr;
    </button>
    <!-- currMonth.numOfMonth would be better??? -->
    <select
      v-model='currDate.currMonth.name'
      @change='updateCurrMonth(currMonth.fullName)'
    >
      <option
        v-for='month in months'
        :key='month'
        :value='month.name'
      >   <!-- read more about key attr -->
        {{ month.name }}
      </option>
    </select>
    <button type='button' @click.prevent='updateCurrMonth(currMonth.numOfMonth + 1)'>
      &rarr;
    </button>
  </div>
  <div class='select-year'>
    <!-- add validation -->
    <p>{{ currYear }}</p>
    <button @click.prevent='updateCurrYear(currYear + 1)'>&uarr;</button>
    <button @click.prevent='updateCurrYear(currYear - 1)'>&darr;</button>
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
        v-if='cell >= getFirstDayOfCurrMonth && cell < getDaysInMonth + getFirstDayOfCurrMonth'
      >
        {{ cell - getFirstDayOfCurrMonth + 1}}
      </button>
    </li>
  </ul>
</body>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getDaysInMonth',
      'getFirstDayOfCurrMonth',
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
