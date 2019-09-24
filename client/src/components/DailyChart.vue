<template>
  <div>
    <apexchart height="400" type="radialBar" :options="chartOptions" :series="formattedData" />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'daily-chart',
  props: ['dailyCalories', 'dailyIntake'],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        // TODO format the chart.
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
                formatter: () => {
                  return `${this.dailyCalories}/${this.dailyIntake}`;
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
      let percentageCalories = Math.floor(
        (this.dailyCalories / this.dailyIntake) * 100
      );
      return [percentageCalories];
    }
  }
};
</script>

<style>
</style>
