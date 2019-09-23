<template>
  <li>
    <h3>{{ meal.type }}</h3>
    <p>{{ meal.calories }}</p>
  </li>
</template>

<script>
export default {
  name: 'daily-meals',
  props: ['meal'],
  methods: {
    formatMealText() {}
  }
};
</script>

<style>
</style>