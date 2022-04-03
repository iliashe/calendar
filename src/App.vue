<template>
<section class='side-menu'>
  <side-menu />
</section>
<section class='container calendar-plane flex-1 flex-col'>
  <calendar-plane-header />
  <day-view v-if='views[0].isActive' />
  <week-view v-if='views[1].isActive' />
  <month-view v-if='views[2].isActive' :currMonth='currMonth' />
  <year-view v-if='views[3].isActive' />
</section>
</template>

<script>
import { mapState } from 'vuex';
import CalendarPlaneHeader from './components/CalendarPlaneHeader.vue';
import DayView from './views/Day.vue';
import MonthView from './views/Month.vue';
import SideMenu from './components/side_menu/SideMenu.vue';
import WeekView from './views/Week.vue';
import YearView from './views/Year.vue';

export default {
  components: {
    CalendarPlaneHeader,
    DayView,
    MonthView,
    SideMenu,
    WeekView,
    YearView,
  },
  computed: {
    ...mapState(['currMonth', 'views']),
  },
};
</script>

<style lang="scss">
#app{
    display: flex;
    height: 1800px;
}

.calendar-plane {
  background-color: #F8F8FF;
}

main {
  height: 100%;
}

.side-menu {
  background-color: #808080;
  width: 300px;
}
</style>
