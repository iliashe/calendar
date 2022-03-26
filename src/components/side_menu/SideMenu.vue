<template>
<section class='mini-calendar'>
  <div class='container'>
    <mini-calendar />
  </div>
</section>
<section class='configs'>
    <!-- <configs /> -->
</section>
<section class='events'>
    <!-- <events /> -->
</section>
</template>

<script>
import MiniCalendar from './components/MiniCalendar.vue';
// import Configs from './'
// import Event './'
export default {
  components: {
    MiniCalendar,
  },
};
</script>
