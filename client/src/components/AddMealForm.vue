<template>
    <form class="meal-form" v-on:submit.prevent="handleSubmit">
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date" />

      <label for="meal">Select Meal:</label>
      <select name="meal" id="meal" v-model="type">
        <option disabled selected>Meal?</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>

      <label for="calories">Kcal</label>
      <input type="number" id="calories" v-model.number="calories" />

      <input type="submit" />
    </form>
</template>

<script>
import MealsService from '../services/MealsService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'add-meal-form',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      type: null,
      calories: null
    };
  },
  methods: {
    handleSubmit() {
      const newMeal = {
        date: this.date,
        type: this.type,
        calories: this.calories
      };
      MealsService.addMeal(newMeal).then(res => {
        eventBus.$emit('meals-changed', res);
      });
    }
  }
};
</script>

<style scoped>
.meal-form {
  float: none;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: lightblue;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  /* color: #818181; */
  display: block
}


</style>

<!-- .meal-form {
  display: flex;
  flex-direction: column;
  position: fixed;
  /* float: left; */ -->
  <!-- /* overflow: hidden; */ -->
