<template>
<header>
  <div class='select-month'>
    <button type='button'>&larr;</button>
    <select
      v-model='currDate.currMonth.fullName'
      @change='updateCurrMonth(currDate.currMonth.fullName)'
      >
      <option
        v-for='month in months'
        :key='month'
        :value='month.fullName'
      >   <!-- read more about key attr -->
        {{ month.fullName }}
      </option>
    </select>
    <button type='button'>&rarr;</button>
  </div>
  <div class='select-year'>
    <!-- add validation -->
    <label for='year'>
      <input
        id='year'
        type='number'
        v-model='currDate.currYear'
        @change='updateCurrYear(currDate.currYear)'
      />
    </label>
  </div>
</header>
<body>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='day in daysOfWeek' :key='day'>
      {{ day.shortName }}
    </li>
    <!-- <li>TUE</li>
    <li>WED</li>
    <li>THU</li>
    <li>FRI</li>
    <li>SAT</li>
    <li>SUN</li> -->
  </ul>
  <ul class='grid grid-cols-7 gap-5'>
    <li v-for='day in getDaysInMonth' :key='day'>
      <button type='button'>
        {{ day }}
      </button>
    </li>
  </ul>
</body>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getDaysInMonth', 'getYears']),
    ...mapState(['currDate', 'daysOfWeek', 'months']),
  },
  methods: {
    ...mapMutations(['updateCurrMonth', 'updateCurrYear']),
  },
};
</script>

<style scoped>
li {
  font-size: x-small;
}
</style>
