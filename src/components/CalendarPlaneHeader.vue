<template>
<div class='calendar-plane-header flex flex-row justify-around'>
  <!-- MAKE A LOOP HERE -->
  <div class='move flex flex-row' v-if='views[0].isActive'>
    <button type='button' @click.prevent='updateCurrDay(currDay.date - 1)'>&larr;</button>
    <p>{{ views[0].name }} {{ currDay.date }}</p>
    <button type='button' @click.prevent='updateCurrDay(currDay.date + 1)'>&rarr;</button>
  </div>
  <div class='move flex flex-row' v-if='views[1].isActive'>
    <button type='button' @click.prevent='updateCurrWeek(currWeek - 1)'>&larr;</button>
    <p>{{ views[1].name }} {{ currWeek }}</p>
    <button type='button' @click.prevent='updateCurrWeek(currWeek + 1)'>&rarr;</button>
  </div>
  <div class='move flex flex-row' v-if='views[2].isActive'>
    <button type='button' @click.prevent='updateCurrMonth(currDate.currMonth.monthNumber - 1)'>
      &larr;
    </button>
    <p>{{ views[2].name }} {{ currDate.currMonth.monthNumber }}</p>
    <button type='button' @click.prevent='updateCurrMonth(currDate.currMonth.monthNumber + 1)'>
      &rarr;
    </button>
  </div>
  <div class='move flex flex-row' v-if='views[3].isActive'>
    <button type='button' @click.prevent='updateCurrYear(currYear - 1)'>&larr;</button>
    <p>{{ views[3].name }} {{ currYear }}</p>
    <button type='button' @click.prevent='updateCurrYear(currYear + 1)'>&rarr;</button>
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
    <button @click='toggleSelect'>SELECT</button>
  </div>
  <button @click='createEvent()'>CREATE +</button>
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
      'updateCurrDay',
      'updateCurrMonth',
      'updateCurrWeek',
      'updateCurrYear',
    ]),
  },
};
</script>
