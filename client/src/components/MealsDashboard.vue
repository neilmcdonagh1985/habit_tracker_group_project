<template>
  <div>
      <h1>Today's Total Calories: {{ todaysTotalCalories }}</h1>
      <ul v-for="meal in todaysMeals" :key="meal._id">
        <li>Your {{ meal.type }} was {{ meal.calories }} kcal</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'meals-dashboard',
  props: ['meals'],
  data() {
    return {
      date: "2019-09-16"
    }
  },
  computed: {
    todaysMeals: function() {
       return this.meals.filter(meal => meal.date === this.date)
      },
      todaysTotalCalories () {
        return this.todaysMeals.map(el => el.calories)
        .reduce((totalCalories, calories) => totalCalories + calories, 0)
      },

      // (accumulator, currentValue) => accumulator + currentValue;
  } 

}

</script>

<style>
</style>