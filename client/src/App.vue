<template>
  <div id="app">
    <add-meal-form />
    <meals-dashboard :meals="meals"/>
    <search-by-date  :meals="meals"/>
  </div>
</template>

<script>
import MealsService from './services/MealsService.js';
import AddMealForm from './components/AddMealForm.vue';
import MealsDashboard from './components/MealsDashboard.vue';
import SearchByDate from './components/SearchByDate.vue';

import { eventBus } from '@/main.js'

export default {
  data() {
    return {
      meals: []
    }

  },
  name: 'app',
  components: {
    'add-meal-form': AddMealForm,
    'meals-dashboard': MealsDashboard,
    'search-by-date': SearchByDate
  },
  methods: {
    showAllMeals() {
      MealsService.getMeals()
      .then(data => this.meals = data)
    }
  },
  mounted() {
    this.showAllMeals()

    eventBus.$on('new-meal-added', allMeals => {
      this.meals = allMeals
  })
  }
}
</script>

<style scoped>

</style>
