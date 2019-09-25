<template>
  <div class="dashboard">
    <daily-chart :dailyCalories="dailyCalories" :dailyIntake="dailyIntake" />
    <div class="daily-meals">
      <daily-meals v-for="meal in todaysMeals" :key="meal._id" :meal="meal"/>
    </div>
    <br><br>
    <bar-chart :meals="meals"/>
    <line-chart :meals="meals"/>
  </div>
</template>

<script>
import DailyChart from '@/components/DailyChart.vue';
import DailyMeals from '@/components/DailyMeals.vue';
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';


export default {
  name: 'meals-dashboard',
  props: ['meals'],
  components: {
    DailyChart,
    DailyMeals,
    BarChart,
    LineChart
  },
  data() {
    return {
      dailyIntake: 3000,
      date: new Date().toISOString().substr(0, 10)
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
.daily-meals {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


</style>
