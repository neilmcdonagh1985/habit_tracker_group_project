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
  data () {
    return {
      options: {
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
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Lunch',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Dinner',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        },{
          name: 'Snack',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],

        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },

      // var chart = new ApexCharts(
      //   document.querySelector("#chart"),
      //   options
      // );
      //
      // chart.render();

    }
  }
}
</script>

<style lang="css" scoped>
</style>
