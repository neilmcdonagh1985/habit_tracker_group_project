<template lang="html">
  <div>
    <apexchart id="chart" height="400" type="bar" :options="options" :series="options.series" />
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts';




export default {
  name: "bar-chart",
  props: ['meals'],
  components: {
    apexchart: VueApexCharts
  },
  computed: {
    uniqueDates: function() {
      return this.meals.map(meal => meal.date).filter((v, i, a) => a.indexOf(v) ===i )
    },
    breakfastCalories: function () {
      return this.meals.filter(meal => meal.type === "breakfast")
      .map(meal => meal.calories)
    },
    lunchCalories: function () {
      return this.meals.filter(meal => meal.type === "lunch").map(meal => meal.calories)
    },
    dinnerCalories: function () {
      return this.meals.filter(meal => meal.type === "dinner").map(meal => meal.calories)
    },
    snackCalories: function () {
      return this.meals.filter(meal => meal.type === "snack").map(meal => meal.calories)
    },
    options: function() {
      return {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: 'Breakfast',
          data: this.breakfastCalories
        }, {
          name: 'Lunch',
          data: this.lunchCalories
        }, {
          name: 'Dinner',
          data: this.dinnerCalories
        },{
          name: 'Snack',
          data: this.snackCalories
        }],

        xaxis: {
          categories: this.uniqueDates,
        },
        yaxis: {
          title: {
            text: 'kcal '
          }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "kcal " + val + " "
            },
            show: true
          }
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
