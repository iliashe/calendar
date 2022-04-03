<template>
<ol>
  <li v-for='day in selectedDays.sort((a, b) => a.date - b.date)' :key='day'>
    {{day.shortName}} {{day.date}}
  </li>
</ol>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'selectedDays',
    ]),
  },
};
</script>
