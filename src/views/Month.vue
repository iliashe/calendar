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
  <ul class='base grid grid-cols-7 gap-5'>
    <li class='date-cell' v-for='cell in 42' :key='cell'>
      <label
        :for="'btn' + cell"
        v-if='cell >= getFirstDayOfCurrMonth && cell < getDaysInMonth + getFirstDayOfCurrMonth'
      >
        <input
          :id="'btn' + cell"
          :type='select'
          @change='addToSelectedDays(currMonth.daysOfCurrMonth[cell - getFirstDayOfCurrMonth])'
        >
        {{ cell - getFirstDayOfCurrMonth + 1}}
      </label>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'month-view',
  computed: {
    ...mapGetters([
      'getDaysInMonth',
      'getFirstDayOfCurrMonth',
    ]),
    ...mapState([
      'select',
      'weekdays',
    ]),
  },
  methods: {
    ...mapMutations([
      'addToSelectedDays',
    ]),
  },
  props: {
    currMonth: Object,
  },
};
</script>

<style scoped>
.date-cell {
  background-color: beige;
}

.base {
  height: 600px;
}

div {
  height: 100%;
}
</style>
