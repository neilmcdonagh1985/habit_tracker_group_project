<template>
  <div>
    <td>{{ meal.date }}</td>
    <td>{{ meal.type }}</td>
    <td>{{ meal.calories }}</td>
    <td>
      <button @click="handleDelete()">DELETE</button>
    </td>
  </div>
</template>

<script>
import MealsService from '@/services/MealsService.js';

import { eventBus } from '@/main.js';

export default {
  name: 'meal-item',
  props: ['meal'],
  methods: {
    handleDelete() {
      MealsService.deleteMeal(this.meal._id).then(res => {
        eventBus.$emit('meals-changed', res);
      });
    }
  }
};
</script>

<style scoped></style>