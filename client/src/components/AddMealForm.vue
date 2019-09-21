<template>
  <div>
    <form class="meal-form">
      <label for="date">Date:</label>
      <input type="date" id="date">
      
      <label for="meal">Select Meal:</label>
      <select name="meal" id="meal">
        <option disabled selected>Meal?</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>

      <label for="calories">Kcal</label>
      <input type="text" id="calories">

      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'add-meal-form'
  
}
</script>

<style scoped>

</style>
