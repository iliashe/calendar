<template>
<div class='calendar-plane-header flex flex-row justify-around'>
  <!-- MAKE A LOOP HERE -->
  <div class='move flex flex-row'>
    <button type='button' @click.prevent='updateCurrDate(getActiveView)'>&larr;</button>
    <p>{{ getActiveView.name }} {{ getActiveView.curr }}</p>
    <button type='button' @click.prevent='updateCurrDate(getActiveView)'>&rarr;</button>
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
  <div class='select-button'>
    <button @click='toggleSelect'>SELECT CELLS</button>
  </div>
  <button @click='createEvent()'>CREATE EVENT</button>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getActiveView',
    ]),
    ...mapState([
      'currDate',
      'createEventForm',
      'currDay',
      'currWeek',
      'currYear',
      'views',
    ]),
  },
  methods: {
    ...mapMutations([
      'createEvent',
      'toggleSelect',
      'toggleView',
      'updateCurrDate',
      'updateCurrMonth',
      'updateCurrWeek',
      'updateCurrYear',
    ]),
  },
};
</script>
