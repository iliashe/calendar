<template>
<div class='container'>
  <div class='form'>
    <button
      @click.prevent='commitEvent(
        {
          name: eventName,
          desc: eventDesc,
          startsAt: eventStart,
          endsAt: eventEnd,
          date: eventDate,

        }
      )'
    >
      SAVE
    </button>
    <div class=''>
      <label for='time-start'>Starts on
        <input id='time-start' v-model='eventStart' type='time'/>
      </label>
    </div>
    <div class=''>
      <label for='time-end'>Ends on
        <input id='time-end' v-model='eventEnd' type='time'/>
      </label>
    </div>
    <div class=''>
      <label for='name'>Events' name
      <input id='name' v-model='eventName' /></label>
    </div>
    <div class=''>
      <label for='desc'>Events' description
        <textarea name='desc' id='desc' rows='5' cols='33' v-model='eventDesc'>
        </textarea>
      </label>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      eventName: '',
      eventDesc: '',
      eventStart: '',
      eventEnd: '',
      eventDate: 0,
    };
  },
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
