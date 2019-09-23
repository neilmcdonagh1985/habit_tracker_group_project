<template>
  <div>
    <daily-chart :todaysMeals="todaysMeals" />
    <ul v-for="meal in todaysMeals" :key="meal._id">
      <li>Your {{ meal.type }} was {{ meal.calories }} kcal</li>
    </ul>
  </div>
</template>

<script>
import DailyChart from '@/components/DailyChart.vue';
export default {
  name: 'meals-dashboard',
  props: ['meals'],
  components: {
    DailyChart
  },
  data() {
    return {
      date: '2019-09-16'
    };
  },
  computed: {
    todaysMeals: function() {
      return this.meals.filter(meal => meal.date === this.date);
    }
  }
};
</script>

<style>
</style>