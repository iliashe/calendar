<template>
<div class='mo'>
  <ul class='grid grid-cols-7 gap-5'>
    <li
      v-for='(weekday, index) in weekdays'
      :key='index'
    >
      {{ weekday }}
    </li>
  </ul>
  <ul class='base grid grid-cols-7 gap-5'>
    <!-- first we skip cells(days) till the needed weekday  -->
    <li v-for='cell in getFirstDayOfMonth - 1' :key='cell'>
      CELL
    </li>
    <li v-for='day in getCurrMonth.days' :key='day'>
      {{ day.monthDate }}
    </li>
  </ul>
  <div class='evf' v-if='createEventForm.isVisible'>
    <event-form />
  </div>
</div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import EventForm from '../components/EventForm.vue';

export default {
  name: 'month-view',
  components: {
    EventForm,
  },
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
      'createEventForm',
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
.base {
  height: 600px;
}

.date-cell {
  background-color: beige;
}

.evf {
  background-color: #6495ED;
  top: 50px;
  position: absolute;
  z-index: 50;
}

.mo {
  height: 100%;
}
</style>
