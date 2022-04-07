<template>
<div class='mo'>
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
        {{ cell - getFirstDayOfCurrMonth + 1 }}
        <div
          class='ev'
          v-for='event of currMonth.daysOfCurrMonth[cell - getFirstDayOfCurrMonth].events'
          :key='event'
        >
          {{ event.name }}
        </div>
      </label>
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
    ...mapGetters([
      'getDaysInMonth',
      'getFirstDayOfCurrMonth',
    ]),
    ...mapState([
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
