<template>
  <div>
    <h1>Calories Trend</h1>
    <apexchart id="chart" height="400" type="line" :options="options" :series="options.series" />
    <hr>
    <br><br>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts';

export default {
  name: "line-chart",
  props: ['meals'],
  components: {
    apexchart: VueApexCharts
  },
  
  computed: {
    uniqueDates: function() {
      return this.meals.map(meal => meal.date).filter((date, index, datesArray) => datesArray.indexOf(date) === index )
    },
    dailyIntake: function() {
      let intakeArray = []
    
      for (let i = 0; i< this.uniqueDates.length; i++) {
        intakeArray.push(3000)
      }
      return intakeArray
    },
    dailyConsumption () {
      let daily = []
      for (const date of this.uniqueDates) {
      let kcls = this.meals.filter(meal => meal.date === date)
        .map(meal => meal.calories)
        .reduce((totalCalories, calories) => totalCalories + calories, 0);
        daily.push(kcls)
      }
      return daily;
    },
    options: function () {
        return {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      series: [{
          name: "Daily Calories Consumed",
          data: this.dailyConsumption
        },
        {
          name: "Calorie Target",
          data: this.dailyIntake
        },
      ],
      title: {
        text: '',
        align: 'centre'
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 4,

        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: this.uniqueDates,
      },
      tooltip: {
        y: [{
          title: {
            formatter: function (val) {
              return val 
            }
          }
        }, {
          title: {
            formatter: function (val) {
              return val + " per day"
            }
          }
        }, {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
    }

    }
  }
}
</script>

<style lang="css" scoped>
</style>
