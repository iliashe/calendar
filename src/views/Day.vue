<template>
<table>
  <tbody>
    <tr v-for='hour in 23' :key='hour'>
      <td>{{hour}}:00</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'day-view',
};
</script>

<style scoped>
li {
  border: solid;
}
</style>
