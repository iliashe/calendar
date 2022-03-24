<template>
<div>
  <button @click="printMsg" label="Do something" type="button"> Click </button>
  <p v-if="btnClicked">{{ msg }}</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    btnClicked: Boolean,
  },
  emits: ['btnClicked'],
  methods: {
    printMsg() {
      this.$emit('btnClicked');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
