<template>
  <div class="daily-chart">
    <apexchart height="550" type="radialBar" :options="chartOptions" :series="formattedData" />
    <br><br>
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
          height: 550,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              showOn: 'always',
              name: {
                show: true,
                fontSize: "36px"
              },
              value: {
                fontSize: "26px",
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

<style scoped>

</style>
