<template>
<div class='week-view'>
  <table class='week-body grid w-full'>
    <thead class=''>
      <tr class='grid grid-cols-8 w-full'>
        <th class=''></th>
        <th>MON</th>
        <th>TUE</th>
        <th>WED</th>
        <th>THU</th>
        <th>FRI</th>
        <th>SAT</th>
        <th>SUN</th>
      </tr>
    </thead>
    <tbody>
      <tr class='grid grid-cols-8 w-full'>
        <td>0 AM</td>
        <td>CELL 1</td>
        <td>CELL 2</td>
        <td>CELL 3</td>
        <td>CELL 4</td>
        <td>CELL 5</td>
        <td>CELL 6</td>
        <td>CELL 7</td>
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
    ...mapState(['week', 'day']),
  },
};
</script>

<style scoped>

</style>
