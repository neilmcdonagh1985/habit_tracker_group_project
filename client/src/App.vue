<template>
  <div id="app">
    <add-meal-form />
    <meals-dashboard :meals="meals" />
    <meals-list :meals="meals" />
  </div>
</template>

<script>
import MealsService from './services/MealsService.js';
import AddMealForm from './components/AddMealForm.vue';
import MealsDashboard from './components/MealsDashboard.vue';
import MealsList from '@/components/MealsList.vue';

import { eventBus } from '@/main.js';

export default {
  data() {
    return {
      meals: []
    };
  },
  name: 'app',
  components: {
    AddMealForm,
    MealsDashboard,
    MealsList
  },
  methods: {
    showAllMeals() {
      MealsService.getMeals().then(data => (this.meals = data));
    }
  },
  mounted() {
    this.showAllMeals();

    eventBus.$on('new-meal-added', allMeals => {
      this.meals = allMeals;
    });
  }
};
</script>

<style scoped>
</style>
