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
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        series: [{
          name: 'Metric1',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric2',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric3',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric4',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric5',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric6',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric7',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric8',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric9',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      title: {
        text: 'HeatMap Chart (Single color)'
      }
    }
  }
}
}

</script>

<style lang="css" scoped>
</style>
