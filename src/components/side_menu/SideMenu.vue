<template>
<section class='mini-calendar' v-if='views[0].isActive || views[1].isActive'>
  <div class='container'>
    <mini-calendar />
  </div>
</section>
<section class='' v-if='select === `checkbox`'>
  <div class=''>
    <button v-show='!showSelectedDays' @click='showSelectedDays=!showSelectedDays'>&darr;</button>
    <button v-show='showSelectedDays' @click='showSelectedDays=!showSelectedDays'>&uarr;</button>
    <span>SELECTED DAYS</span>
  </div>
  <selected-days v-if='showSelectedDays'  />
</section>
<section class='configs'>
    <!-- <configs /> -->
</section>
<section class='events'>
    <!-- <events /> -->
</section>
</template>

<script>
import { mapState } from 'vuex';
import MiniCalendar from './components/MiniCalendar.vue';
import SelectedDays from './components/SelectedDays.vue';
// import Configs from './'
// import Event './'
export default {
  data() {
    return {
      showSelectedDays: true,
    };
  },
  components: {
    MiniCalendar,
    SelectedDays,
  },
  computed: {
    ...mapState([
      'select',
      'views',
    ]),
  },
};
</script>
