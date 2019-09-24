<template>
  <div>
    <div>
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date" />
    </div>
    <daily-chart :dailyCalories="dailyCalories" :dailyIntake="dailyIntake" />
    <daily-meals v-for="meal in todaysMeals" :key="meal._id" :meal="meal" />
    <bar-chart :meals="meals"/>
    <heat-map :meal="meals"/>
  </div>
</template>

<script>
import DailyChart from '@/components/DailyChart.vue';
import DailyMeals from '@/components/DailyMeals.vue';
import BarChart from '@/components/BarChart.vue';
import HeatMap from '@/components/HeatMap.vue';


export default {
  name: 'meals-dashboard',
  props: ['meals'],
  components: {
    DailyChart,
    DailyMeals,
    BarChart,
    HeatMap
  },
  data() {
    return {
      dailyIntake: 3000,
      // date: new Date().toISOString().substr(0, 10) // TODO uncomment to add back in default today's date. Removed for testing.
      date: '2019-09-17'
    };
  },
  computed: {
    todaysMeals: function() {
      return this.meals.filter(meal => meal.date === this.date);
    },
    dailyCalories: function() {
      return this.todaysMeals
        .map(meal => meal.calories)
        .reduce((totalCalories, calories) => totalCalories + calories, 0);
    }
  }
};
</script>

<style>
</style>
