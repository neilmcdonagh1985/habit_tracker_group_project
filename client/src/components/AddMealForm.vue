<template>
    <form class="meal-form" v-on:submit.prevent="handleSubmit">
      <br>
      <img src="/calories.png" height="175px" alt="calories">
      <br>
      <div>
      <label for="date">Date</label>
      <input type="date" id="date" class="input-field" v-model="date" />
      </div>
      <div>
      <label for="meal">Select Meal</label>
      <select name="meal" id="meal" v-model="type" class="input-field">
        <option disabled selected>Meal?</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      </div>
      <div>
      <label for="calories">Kcal</label>
      <input type="number" id="calories" v-model.number="calories" class="input-field"/>
      </div>
      <input class="submit-button" type="submit" />
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
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 255px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #008ffb;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  padding: 6px 8px 6px 16px;
  font-size: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
div {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 250px;
}
.input-field {
  border: 2px solid black;
  font-size: 18px;
  padding: 5px;
}
.submit-button {
  border: 2px solid black;
  font-size: 18px;
  padding: 5px;
}
</style>

