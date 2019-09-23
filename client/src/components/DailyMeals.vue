<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <span class="float-left value">{{ formatMealText(meal.type) }}</span>
      <span class="float-right value">{{ meal.calories }}</span>
    </li>
  </ul>
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