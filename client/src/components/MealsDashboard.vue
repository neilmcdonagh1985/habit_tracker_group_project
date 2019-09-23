<template>
  <div class="container-fluid">
    <div class="pb-3 form-group d-inline-flex p-2">
      <!-- <label for="date">Date:</label> -->
      <input type="date" id="date" v-model="date" class="form-control" />
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Calories</h5>
            <p class="card-text">Calories consumed today.</p>
            <daily-chart :dailyCalories="dailyCalories" :dailyIntake="dailyIntake" />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Meals Logged</h5>
            <p class="card-text">All meals logged today.</p>
            <daily-meals v-for="meal in todaysMeals" :key="meal._id" :meal="meal" />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">This Week</h5>
            <p class="card-text">Calories consumed over the last week.</p>
            <weekly-chart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DailyChart from '@/components/DailyChart.vue';
import DailyMeals from '@/components/DailyMeals.vue';
import WeeklyChart from '@/components/WeeklyChart.vue';

export default {
  name: 'meals-dashboard',
  props: ['meals'],
  components: {
    DailyChart,
    DailyMeals,
    WeeklyChart
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
    },
    weeklyCalories: function() {} // TODO add a computed value that returns an aray for a bar chart.
  }
};
</script>

<style>
</style>