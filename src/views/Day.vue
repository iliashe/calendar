<template>
<div>
  <table>
    <tbody>
      <tr v-for='hour in 23' :key='hour'>
        <td>{{hour}}:00</td>
      </tr>
    </tbody>
  </table>
  <p>
    {{ currDate.currDay.weekday }}
  </p>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'day-view',
  computed: {
    ...mapState(['currDate']),
  },
};
</script>

<style scoped>
li {
  border: solid;
}
</style>
