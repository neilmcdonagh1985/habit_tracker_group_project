<template>
  <div>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Meal</th>
          <th scope="col">Calories</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="meal in meals" :key="meal._id">
        <meal-item :meal="meal" />
      </tbody>
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