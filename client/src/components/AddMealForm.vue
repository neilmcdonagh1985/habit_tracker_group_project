<template>
  <div>
    <form class="meal-form" v-on:submit.prevent="handleSubmit">
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date">
      
      <label for="meal">Select Meal:</label>
      <select name="meal" id="meal" v-model="mealType">
        <option disabled selected>Meal?</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>

      <label for="calories">Kcal</label>
      <input type="number" id="calories" v-model.number="calories">

      <input type="submit">
    </form>
  </div>
</template>

<script>
import MealsService from '../services/MealsService.js'

export default {
  name: 'add-meal-form',
  data() {
    return {
    date: null,
    mealType: null,
    calories: null
    }
    
      
    },
    methods: {
      handleSubmit() {
        const newMeal = {
          date: this.date,
          mealType: this.mealType,
          calories: this.calories
        };
        MealsService.addMeal(newMeal)
      }
    

  },

  
}
</script>

<style scoped>

</style>
