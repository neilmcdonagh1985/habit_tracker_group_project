<template>
  <div>
    <daily-chart />
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
    },
    todaysTotalCalories() {
      return this.todaysMeals
        .map(el => el.calories)
        .reduce((totalCalories, calories) => totalCalories + calories, 0);
    }

    // (accumulator, currentValue) => accumulator + currentValue;
  }
};
</script>

<style>
</style>