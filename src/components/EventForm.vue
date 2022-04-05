<template>
<div class='container'>
  <div class='form'>
    <button @click.prevent='commitEvent(Event)'>SAVE</button>
    <div class=''>
      <label for='name'>Events' name
      <input id='name' v-model='Event.name' /></label>
    </div>
    <div class=''>
      <label for='desc'>Events' description
      <textarea name='desc' id='desc' rows='5' cols='33' v-model='Event.desc'></textarea></label>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'Event',
    ]),
  },
  methods: {
    ...mapMutations([
      'commitEvent',
    ]),
  },
};

</script>

<style scoped>
.form {
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
</style>
