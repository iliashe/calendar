<template>
<div class='calendar-plane-header flex flex-row justify-around'>
  <div class='move flex flex-row'>
    <button type='button'>&larr;</button>
    <p>{{ getActiveView.name }} #</p>
    <button type='button'>&rarr;</button>
  </div>
  <div class='toggle-view flex flex-row justify-around'>
    <button
      type='button'
      v-for='view in views'
      :key='view.name'
      @click='toggleView(view.name)'
    >
      {{ view.name }}
    </button>
  </div>
  <div class='header-search flex flex-row'>
    <input placeholder='search'/>
    <p>img</p>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      day: 'day',
      month: 'month',
      week: 'week',
      year: 'year',
    };
  },
  computed: {
    ...mapGetters([
      'getActiveView',
    ]),
    ...mapState([
      'currDay',
      'currMonth',
      'currWeek',
      'currYear',
      'views',
    ]),
  },
  methods: {
    ...mapMutations(['toggleView']),
  },
};
</script>
