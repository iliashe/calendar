<template>
<div class='week-view'>
  <table class='week-body grid w-full'>
    <thead class=''>
      <tr class='grid grid-cols-8 w-full'>
        <th class=''></th>
        <th
          class='border border-slate-600'
          v-for='weekday in weekdays'
          :key='weekday'
        >
          {{ weekday }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class='grid grid-cols-8 w-full' v-for='(hour, index) in 24' :key='index'>
        <td>{{ hour - 1 }} AM</td>
        <td
          class='border border-slate-600 grid grid-cols-8 grid-rows-24'
          v-for='(cell, index) in 7'
          :key='index'
        >
          Cell {{cell}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'week-view',
  data() {
    return {
      tbody: document.getElementsByTagName('tbody'),
    };
  },
  mounted() {
    // scrollTop = currTime
    this.tbody[0].scrollTop = 100;
  },
  computed: {
    ...mapState(['weekdays']),
  },
};
</script>

<style scoped>
tbody {
  height: 300px;
  overflow: auto;
}

::-webkit-scrollbar {
  display: none;
}

</style>
