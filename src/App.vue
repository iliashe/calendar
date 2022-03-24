<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="msg" @btnClicked="sendMsg" :btnClicked="btnClicked"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: '',
      btnClicked: false,
    };
  },
  components: {
    HelloWorld,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
