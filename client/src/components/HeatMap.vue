<template lang="html">
  <div>
    <apexchart id="chart" height="400" type="heatmap" :options="options" :series="options.series" />
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts';


export default {
  name: "heat-map",
  props: ['meals'],
  components: {
    apexchart: VueApexCharts
  },
  methods: {
    generateData: function (count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = 'w' + (i + 1).toString();
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
  },
  computed: {
    options: function () {
      return {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,

          colorScale: {
            ranges: [{
                from: -30,
                to: 5,
                name: 'low',
                color: '#00A100'
              },
              {
                from: 6,
                to: 20,
                name: 'medium',
                color: '#128FD9'
              },
              {
                from: 21,
                to: 45,
                name: 'high',
                color: '#FFB200'
              },
              {
                from: 46,
                to: 55,
                name: 'extreme',
                color: '#FF0000'
              }
            ]
          }
        }
      },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        series: [{
          name: 'Breakfast',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Lunch',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Dinner',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Snack',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      title: {
        text: 'HeatMap Calory Chart'
      }
    }
  }
}
}

</script>

<style lang="css" scoped>
</style>
