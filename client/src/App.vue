<template>
  <div id="app">
    <add-meal-form />
    <meals-dashboard />
  </div>
</template>

<script>
import MealsService from './services/MealsService.js';
import AddMealForm from './components/AddMealForm.vue';
import MealsDashboard from './components/MealsDashboard.vue';

export default {
  name: 'app',
  components: {
    'add-meal-form': AddMealForm,
    'meals-dashboard': MealsDashboard 
  }
}
</script>

<style scoped>

</style>
