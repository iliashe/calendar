<template>
<div>
  <ul class='grid grid-cols-7 gap-5'>
    <li
      v-for='(day, index) in weekdays'
      :key='index'
    >
      {{day.fullName}}
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
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'month-view',
  computed: {
    ...mapGetters([
      'getDaysInMonth',
      'getFirstDayOfCurrMonth',
    ]),
    ...mapState(['weekdays']),
  },
  props: {
    currMonth: Object,
  },
};
</script>
