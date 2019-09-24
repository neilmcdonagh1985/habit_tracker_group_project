<template>
  <div>
    <div>
      <label for="selectedDate">Date:</label>
      <input type="date" id="selectedDate" v-model="selectedDate" v-on:select="handleSelect" />
    </div>
    <table>
      <tr>
        <th>Date</th>
        <th>Meal</th>
        <th>Calories</th>
        <th></th>
      </tr>
      <tr v-for="meal in meals" v-if="meal.date === selectedDate" :key="meal._id">
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
  },
  data() {
    return {
      selectedDate: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    handleSelect(){
      const newDate = {
        selectedDate: this.selectedDate
      }
    }
  }
};
</script>

<style scoped></style>
