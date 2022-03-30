<template>
<div class='week-view'>
  <table class='week-body grid w-full'>
    <thead class=''>
      <tr class='grid grid-cols-8 w-full'>
        <th class=''></th>
        <th v-for='day in daysOfWeek' :key='day'>{{ day.shortName }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class='grid grid-cols-8 w-full' v-for='(hour, index) in 24' :key='index'>
        <td>{{ hour - 1 }} AM</td>
        <td v-for='(cell, index) in 7' :key='index'>Cell {{cell}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'week-view',
  computed: {
    ...mapState(['daysOfWeek']),
  },
};
</script>

<style scoped>
tbody {
  height: 300px;
  overflow: auto;
}
</style>
