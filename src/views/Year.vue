<template>
<div>
  <ul class='grid grid-cols-3'>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
    <li><mini-calendar /></li>
  </ul>
</div>
</template>

<script>
import MiniCalendar from '../components/side_menu/components/MiniCalendar.vue';

export default {
  name: 'year-view',
  components: {
    MiniCalendar,
  },
};
</script>
