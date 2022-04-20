<template>
  <form class='h-96 overflow-auto w-1/4'>
    <!-- forms content -->
    <div class='h-144 w-full grid grid-cols-12 grid-rows-12'>
      <!-- header -->
      <div class='col-span-full row-start-1 row-span-1'>
        <header class='h-full w-full grid grid-cols-12 grid-rows-4'>
          <!-- close button -->
          <div class='col-span-3 row-start-2 row-span-2'>
            <div class='h-full w-full grid grid-cols-4 grid-rows-3'>
              <button
                class='col-span-full row-span-full'
              >
                CLOSE
              </button>
            </div>
          </div>
          <!-- 'New Event' -->
          <div class='col-span-6 row-start-2 row-span-2'>
            <div class='h-full w-full grid grid-cols-4 grid-rows-3'>
              <div class='col-start-2 col-span-4 row-span-full'>
                NEW EVENT
              </div>
            </div>
          </div>
          <!-- save button -->
          <div class='col-span-3 row-start-2 row-span-2'>
            <div class='h-full w-full grid grid-cols-4 grid-rows-3'>
              <button
                class='col-span-full row-span-full'
                @click.prevent='commitEvent(event)'
              >
                SAVE
              </button>
            </div>
          </div>
        </header>
      </div>
      <!-- main -->
      <div class='col-span-full row-start-2 row-span-6'>
        <main class='h-full w-full grid grid-cols-12 grid-rows-10'>
          <!-- title -->
          <div class='col-span-full row-span-1'>
            <div class='h-full w-full grid grid-cols-12 grid-rows-2'>
              <!-- eslint-disable-next-line -->
              <label for='title' class='col-span-2'>
                TITLE
              </label>
              <input class='col-start-3 col-span-full row-span-2'
                id='title'
                v-model='event.title'
              />
            </div>
          </div>
          <!-- time management -->
          <div class='col-span-full row-start-3 row-span-6'>
            <div class='h-full w-full grid grid-cols-12 grid-rows-5'>
              <!-- all-day -->
              <div class='col-span-12 row-span-1'>
                <div class='h-full w-full grid grid-cols-12 grid-rows-1'>
                  <!-- eslint-disable -->
                  <label for='allday' class='col-span-3'>
                    ALL-DAY
                  </label>
                  <input class='col-start-12'
                    id='allday'
                    type='checkbox'
                    v-model='event.allday'
                  />
                </div>
              </div>
              <!-- starts -->
              <div class='col-span-12 row-span-1'>
                <div class='h-full w-full grid grid-cols-12 grid-rows-4'>
                  <div class='col-span-3 row-start-2 row-span-1'>STARTS</div>
                  <!-- MAKE OWN INPUT COMPONENTS OR USE JS TO PUT A VALUE -->
                  <input class='col-start-5 col-span-4 row-span-full'
                    type='date'
                    v-model='event.start.date'
                  />
                  <input class='col-start-10 col-span-4 row-span-full'
                    type='time'
                    v-model='event.start.time'
                  />
                </div>
              </div>
              <!-- ends -->
              <div class='col-span-12 row-span-1'>
                <div class='h-full w-full grid grid-cols-12 grid-rows-4'>
                  <div class='col-span-3 row-start-2 row-span-1'>ENDS</div>
                  <!-- MAKE OWN INPUT COMPONENTS -->
                  <input class='col-start-5 col-span-4 row-span-full'
                    type='date'
                    v-model='event.end.date'
                  />
                  <input class='col-start-10 col-span-4 row-span-full'
                    type='time'
                    v-model='event.end.time'
                  />
                </div>
              </div>
              <!-- repeat -->
              <div class='col-span-12 row-span-1'>
                <div class='h-full w-full grid grid-cols-12 grid-rows-6'>
                  <div class='col-span-3 row-start-3 row-span-1'>REPEAT</div>
                  <button class='col-start-9 col-span-4 row-start-2 row-span-full'>NEVER >></button>
                </div>
              </div>
              <!-- end repeat -->
              <div class='col-span-12 row-span-1'>
                <div class='h-full w-full grid grid-cols-12 grid-rows-6'>
                  <div class='col-span-4 row-start-3 row-span-1'>END REPEAT</div>
                  <button class='col-start-9 col-span-4 row-start-2 row-span-full'>NEVER >></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <!-- footer -->
      <div class='col-span-full row-span-3'>
        <footer class='h-full w-full grid grid-cols-12 grid-rows-12'>
          <!-- options -->
          <button class='col-span-full row-span-2'>
            <div class='h-full w-full grid grid-col-12 grid-row-1'>
              <span class='col-start-1 col-span-4'>OPTIONS</span>
              <span class='col-start-10 col-span-2'>>></span>
            </div>
          </button>
          <!-- description -->
          <div class='col-span-full row-start-4 row-span-full'>
            <div class='h-full w-full grid grid-cols-12 grid-rows-12'>
              <label class='col-span-full row-span-1'>
                DESCRIPTION
              </label>
              <textarea
                class='col-span-full row-start-4 row-span-full'
                v-model='event.desc'
              >
              </textarea>
            </div>
          </div>
        </footer>
      </div>
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
-->
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      event: {
        allday: false,
        title: '',
        desc: '',
        start: {
          date: '',
          time: '',
        },
        end: {
          date: '',
          time: '',
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      'getTime',
      'getToday',
    ]),
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
  background-color: #f8f8f8;
  border: solid;
  top: 50px;
  position: absolute;
  z-index: 50;
  padding: 20px;
  padding-top: 20px;
}

::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar:active {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* or add it to the track */
}
</style>
