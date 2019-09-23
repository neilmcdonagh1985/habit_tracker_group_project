<template>
  <div>
    <daily-chart :todaysMeals="todaysMeals" />
    <daily-meals v-for="meal in todaysMeals" :key="meal._id" :meal="meal" />
  </div>
</template>

<script>
import DailyChart from '@/components/DailyChart.vue';
import DailyMeals from '@/components/DailyMeals.vue';

export default {
  name: 'meals-dashboard',
  props: ['meals'],
  components: {
    DailyChart,
    DailyMeals
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