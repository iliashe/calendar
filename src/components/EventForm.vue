<template>
  <form class='h-96 overflow-auto w-1/4'>
    <div class='h-full w-full grid grid-cols-12 grid-rows-12'>
      <header class='col-span-full row-span-2'>
        <div class='grid grid-cols-12 grid-row-1'>
          <button class='col-span-2'>
            Close
          </button>
          <h3 class='col-start-5 col-span-3'>New Event</h3>
          <button class='col-start-9 col-span-4'>Save</button>
        </div>
      </header>
      <main class='col-span-full row-span-9'>
        <div class='h-full grid grid-cols-12 grid-rows-12'>
          <header class='col-span-12 row-span-1'>
            <div class='grid grid-cols-12'>
              <!-- eslint-disable-next-line -->
              <label for='events-title' class='col-span-3'>
                Title
              </label>
              <input id='events-title' class='col-span-9'/>
            </div>
          </header>
          <main class=''>
            <div class=''>
              <h1>Time</h1>
              <div>
                <label for='event-start'>
                  Starts
                  <button type='button'>
                    Choose date
                  </button>
                  <input id='event-start' type='time' />
                </label>
              </div>
              <div>
                <label for='event-start'>
                  Ends
                  <button type='button'>
                    Choose date
                  </button>
                  <input id='event-end' type='time' />
                </label>
              </div>
              <button>Repeat</button>
            </div>
            <div class=''>
              <h5>Options</h5>
            </div>
          </main>
        </div>
      </main>
      <!--<footer class=''>
      <h5>Description</h5>
      <label for='event-desc'>
        <textarea id='event-desc'>
        </textarea>
      </label>
      </footer> -->
    </div>
  </form>
<!-- <div class='container'>
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
</div> -->
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      event: {
        title: '',
        desc: '',
        start: '',
        end: '',
        date: 0,
      },
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
form {
  background-color: #6495ED;
  top: 50px;
  position: absolute;
  z-index: 50;
  padding: 20px;
  padding-top: 20px;
}
</style>
