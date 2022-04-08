<template>
<div class='container'>
  <div class='form'>
    <button @click.prevent='commitEvent(events[events.length - 1])'>SAVE</button>
    <div class=''>
      <label for='time-start'>Starts on
        <input id='time-start' v-model='events[events.length - 1].startsOn' type='time'/>
      </label>
    </div>
    <div class=''>
      <label for='time-end'>Ends on
        <input id='time-end' v-model='events[events.length - 1].endsOn' type='time'/>
      </label>
    </div>
    <div class=''>
      <label for='name'>Events' name
      <input id='name' v-model='events[events.length - 1].name' /></label>
    </div>
    <div class=''>
      <label for='desc'>Events' description
        <textarea name='desc' id='desc' rows='5' cols='33' v-model='events[events.length - 1].desc'>
        </textarea>
      </label>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'events',
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
