<template>
<div class='main'>
  <div class='side-menu'>
    <side-menu />
  </div>
  <div class='calendar-plane'>
    <div class='calendar-plane-header'>
      <div class='calendar-plane-header-arrows'></div>
      <div class='calendar-plane-header-toggle'>
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Year</button>
      </div>
      <div class='calendar-plane-header-search'></div>
    </div>
    <div class='calendar-plane-body'>
      <week />
    </div>
  </div>
</div>
</template>

<script>
import Week from './views/Week.vue';
import SideMenu from './components/Sidemenu/SideMenu.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: '',
      btnClicked: false,
    };
  },
  components: {
    SideMenu,
    Week,
  },
  methods: {
    sendMsg() {
      this.btnClicked = true;
      this.msg = 'Yoshkin Kot';
    },
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
