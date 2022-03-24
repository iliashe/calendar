<template>
  <Week />
</template>

<script>
import Week from './views/Week.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: '',
      btnClicked: false,
    };
  },
  components: {
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
