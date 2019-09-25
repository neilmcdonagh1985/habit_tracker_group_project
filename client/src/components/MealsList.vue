<template>
  <div class="selected-meals-table">
    <div>
      <label for="selectedDate">Search Meals By Date:</label>
      <input type="date" id="selectedDate" v-model="selectedDate"  />
    </div>

    <table>
      <tr v-for="meal in meals" :key="meal._id"  >
        <meal-item  v-if="meal.date === selectedDate" :meal="meal" />
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
    
  }
};
</script>

<style scoped>

tr {
  text-align: left;
}
th {
  text-align: left;
}
.selected-meals-table {
  text-align: center;
}
table {
  background-color: white;
  text-align: center;
}



</style>
