<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Habit Tracker</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            class="nav-item nav-link"
            href="#"
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab"
          >{{ tab }}</a>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <main class="pt-3">
        <component v-bind:is="currentTabComponent" class="tab" :meals="meals"></component>
        <!-- <meals-dashboard :meals="meals" v-bind:is="componentName" />
        <add-meal-form v-bind:is="componentName" />
        <meals-list :meals="meals" v-bind:is="componentName" />-->
      </main>
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
  name: 'app',
  components: {
    'tab-add': AddMealForm,
    'tab-dashboard': MealsDashboard,
    'tab-history': MealsList
    // TODO consider refactoring to a v-if or using pages.
  },
  data() {
    return {
      meals: [],
      tabs: ['Dashboard', 'Add', 'History'],
      currentTab: 'Dashboard'
    };
  },
  computed: {
    currentTabComponent: function() {
      return 'tab-' + this.currentTab.toLowerCase();
    }
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
</style>
