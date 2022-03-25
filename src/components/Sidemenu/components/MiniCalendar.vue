<template>
<div class='mini-calendar'>
  <div class='mini-calendar-header'>
    <div class='mini-calendar-header-month'></div>
    <div class='mini-calendar-header-year'></div>  
  </div>
  <div class='mini-calendar-days'>
    <div class='mini-calendar-days-header'>
      <!-- <div v-for="day in week" :key='day.name'>
        {{ day.name }}
      </div> -->
    </div>
    <div class='mini-calendar-days-body'>
      <!-- <div v-for="day in month" :key='day.number'>
        {{ day.number }}
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'mini-calendar',
//   props: {
//     month: type,
//     week: type,
//   },
}
</script>
