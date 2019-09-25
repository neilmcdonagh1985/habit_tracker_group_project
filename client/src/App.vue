<template>
  <div id="app">
    
      <div id="nav-form">
        <add-meal-form />
      </div>
      <div id="column-right" >
        <h1 id="title-text">Count ME!</h1>
        <meals-dashboard :meals="meals" />
        <meals-list :meals="meals" />
      </div>

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

    eventBus.$on('meals-changed', allMeals => {
      this.meals = allMeals;
    });
  }
};
</script>

<style scoped>
#nav-form {
  position: fixed;
  float: left;
  width: 25%;
  overflow: hidden;
  z-index: 1;
}

#app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#column-right {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 250px;
  justify-content: center;
  width: 100%

}
#title-text {
  font-size: 56px;
}


</style>
