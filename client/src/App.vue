<template>
  <div id="app">
    <nav>
      <add-meal-form />
    </nav>
    <meals-dashboard />
  </div>
</template>

<script>
import AddMealForm from './components/AddMealForm.vue';
import MealsDashboard from './components/MealsDashboard.vue'

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
