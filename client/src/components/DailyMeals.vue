<template>
  <li>
    <h3>{{ formatMealText(meal.type) }}</h3>
    <p>{{ meal.calories }}</p>
  </li>
</template>

<script>
export default {
  name: 'daily-meals',
  props: ['meal'],
  methods: {
    formatMealText(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style>
</style>