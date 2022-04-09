<template>
<div class='container'>
  <ul class='grid grid-cols-3 gap-5'>
    <li
      v-for='(month, index) in months'
      :key='index'
    >
      <mini-month :month='month' :year='currYear' />
    </li>
  </ul>
</div>
</template>

<script>
import { mapState } from 'vuex';
import MiniMonth from '../components/year_view/MiniMonth.vue';

export default {
  name: 'year-view',
  components: {
    MiniMonth,
  },
  computed: {
    ...mapState([
      'currYear',
      'months',
    ]),
  },
};
</script>
