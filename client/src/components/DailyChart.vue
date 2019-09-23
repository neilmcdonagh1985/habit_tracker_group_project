<template>
  <div>
    <apexchart height="400" type="radialBar" :options="chartOptions" :series="formattedData" />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'daily-chart',
  props: ['todaysMeals'],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      dailyIntake: 3000, // TODO add this to the dataLabel.
      chartOptions: {
        labels: ['Kcal'],
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              showOn: 'always',
              name: {
                show: true
              },
              value: {
                formatter: function(val) {
                  return val;
                },
                show: true
              }
            }
          }
        }
      }
    };
  },

  computed: {
    formattedData() {
      let calories = this.todaysMeals
        .map(meal => meal.calories)
        .reduce((totalCalories, calories) => totalCalories + calories, 0);
      let percentageCalories = Math.floor((calories / this.dailyIntake) * 100);
      return [percentageCalories];
    }
  }
};
</script>

<style>
</style>