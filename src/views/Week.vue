<template>
<div class='week'>
  <div class='grid justify-items-stretch grid-cols-2'>
    <ul class='week-header-timeline grid grid-rows-25 gap-4 w-10'>
      <li>Timeline</li>
      <li class='hour'>0</li>
      <li class='hour'>1</li>
      <li class='hour'>2</li>
      <li class='hour'>3</li>
      <li class='hour'>4</li>
      <li class='hour'>5</li>
      <li class='hour'>6</li>
      <li class='hour'>7</li>
      <li class='hour'>8</li>
      <li class='hour'>9</li>
      <li class='hour'>10</li>
      <li class='hour'>11</li>
      <li class='hour'>12</li>
      <li class='hour'>13</li>
      <li class='hour'>14</li>
      <li class='hour'>15</li>
      <li class='hour'>16</li>
      <li class='hour'>17</li>
      <li class='hour'>18</li>
      <li class='hour'>19</li>
      <li class='hour'>20</li>
      <li class='hour'>21</li>
      <li class='hour'>22</li>
      <li class='hour'>23</li>
    </ul>
    <ul class='week-header-days grid grid-cols-7 gap-4'>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
      <li>Thursday</li>
      <li>Friday</li>
      <li>Saturday</li>
      <li>Sunday</li>
    </ul>
  </div>
  <ul class='week-body grid grid-cols-7 gap-4'>
  </ul>
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
