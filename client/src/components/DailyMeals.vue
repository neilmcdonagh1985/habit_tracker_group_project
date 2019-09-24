<template>

    <h3>{{ formatMealText(meal.type) }} {{ meal.calories }} kcal</h3>

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

<style scoped>




</style>
