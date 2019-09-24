<template lang="html">
  <div>
    <apexchart id="chart" height="400" type="heatmap" :options="options" :series="series" />
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
  computed: {
    generateData: function (count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = 'w' + (i + 1).toString();
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push({
                    x: x,
                    y: y
                });
                i++;
            }
            return series;
        }
  },
  options: {
  plotOptions: {
    heatmap: {
      colorScale: {
        ranges: [{
            from: -30,
            to: 5,
            color: '#00A100',
            name: 'low',
          },
          {
            from: 6,
            to: 20,
            color: '#128FD9',
            name: 'medium',
          },
          {
            from: 21,
            to: 45,
            color: '#FFB200',
            name: 'high',
          }
        ]
      }
    }
  }
}
}
</script>

<style lang="css" scoped>
</style>
