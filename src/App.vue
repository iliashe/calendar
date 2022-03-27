<template>
<section class='side-menu'>
  <side-menu />
</section>
<section class='calendar-plane flex-1 flex-col'>
  <calendar-plane-header/>
  <!-- <day-view /> -->
  <!-- <week-view /> -->
  <!-- <month-view /> -->
  <!-- <year-view /> -->
</section>
</template>

<script>
import CalendarPlaneHeader from './components/CalendarPlaneHeader.vue';
// import DayView from './views/Day.vue';
// import MonthView from './views/Month.vue';
import SideMenu from './components/side_menu/SideMenu.vue';
// import WeekView from './views/Week.vue';
// import YearView from './views/Year.vue';

export default {
  components: {
    CalendarPlaneHeader,
    // DayView,
    // MonthView,
    SideMenu,
    // WeekView,
    // YearView,
  },
};
</script>

<style lang="scss">
#app{
    display: flex;
}

.calendar-plane {
  background-color: #F8F8FF;
}

main {
  height: 100%;
}

.side-menu {
  background-color: #808080;
}
</style>
