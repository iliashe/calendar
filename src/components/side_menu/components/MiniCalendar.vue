<template>
<header>
  <div class='select-month'>
    <button type='button' @click='updateCurrMonth(currMonth.id - 1)'>
      &larr;
    </button>
    <select
      v-model='currMonth.fullName'
      @change='updateCurrMonth(currMonth.fullName)'
    >
      <option
        v-for='month in months'
        :key='month'
        :value='month.fullName'
      >   <!-- read more about key attr -->
        {{ month.fullName }}
      </option>
    </select>
    <button type='button' @click='updateCurrMonth(currMonth.id + 1)'>
      &rarr;
    </button>
  </div>
  <div class='select-year'>
    <!-- add validation -->
    <label for='year'>
      <input
        id='year'
        type='number'
        v-model='currYear'
        @change='updateCurrYear(currYear)'
      />
    </label>
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
        v-if='cell >= getFirstDayOfMonth && cell < getDaysInMonth + getFirstDayOfMonth'
      >
        {{ cell - getFirstDayOfMonth + 1}}
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
      'getFirstDayOfMonth',
    ]),
    ...mapState(['currMonth',
      'currYear',
      'daysOfWeek',
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
