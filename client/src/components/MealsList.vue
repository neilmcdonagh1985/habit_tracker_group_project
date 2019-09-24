<template>
  <div>
    <table>
      <tr>
        <th>Date</th>
        <th>Meal</th>
        <th>Calories</th>
        <th></th>
      </tr>
      <tr v-for="meal in meals" :key="meal._id">
        <meal-item :meal="meal" />
      </tr>
    </table>
  </div>
</template>

<script>
import MealItem from '@/components/MealItem.vue';
export default {
  name: 'meals-list',
  props: ['meals'],
  components: {
    MealItem
  }
};
</script>

<style scoped></style>